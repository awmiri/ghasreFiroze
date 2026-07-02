import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Project from "../Models/projectModel.js";
import mongoose from "mongoose";


export const getAllProject = catchAsync(async (req, res, next) => {

    const result = await new ApiFeatures(Project, req.query)
        .addManualFilters({
            isActive: true
        })
        .filter()
        .search(['title'])
        .sort()
        .paginate()
        .populate('userId')
        .populate({
            path: "manager.user",
            select: "fullName phoneNumber"
        })
        .limitFields("brand,title,description,manager.user,manager.position,manager.telegram,manager.whatsapp")
        .execute()

    return res.status(200).json(result)
})


export const getOneProject = catchAsync(async (req, res, next) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new HandleERROR("Invalid project id", 400));
    }


    const project = await Project.findById(id)
        .populate({
            path: "manager.user",
            select: "fullName phoneNumber"
        })
        .populate({
            path: "propertyFiles",
            select: "title _id "

        })
        .select('-__v -createdAt -updatedAt')
    if (!project) {
        return next(new HandleERROR('not found project', 404))
    }

    return res.status(200).json({
        success: true,
        data: project
    })

})


export const createProject = catchAsync(async (req, res, next) => {
    // 1. بررسی تکراری نبودن پروژه بر اساس عنوان
    const { title } = req.body;
    const exitProject = await Project.findOne({ title });
    if (exitProject) {
        return next(new HandleERROR("پروژه قبلا ساخته شده است", 400));
    }

    // 2. پارس کردن داده‌های تو دورتو و ساختار داده‌های تخت (Form-Data Parsing)
    const brand = req.body.brand;
    const description = req.body.description;
    const direction = req.body.direction;
    const totalFloors = req.body.totalFloors ? Number(req.body.totalFloors) : 1;
    const area = req.body.area ? Number(req.body.area) : undefined;
    const landArea = req.body.landArea ? Number(req.body.landArea) : undefined;

    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const estimatedCompletion = req.body.estimatedCompletion;
    const actualCompletion = req.body.actualCompletion;

    // پارس کردن مختصات (Coordinates)
    const coordinates = {
        lat: req.body["coordinates.lat"] ? Number(req.body["coordinates.lat"]) : (req.body.coordinates?.lat || 0),
        lng: req.body["coordinates.lng"] ? Number(req.body["coordinates.lng"]) : (req.body.coordinates?.lng || 0)
    };

    // پارس کردن جزئیات طبقات (Floor Details)
    const floorDetails = {
        groundFloor: {
            hasUnits: req.body["floorDetails.groundFloor.hasUnits"] === 'true' || req.body.floorDetails?.groundFloor?.hasUnits === true,
            purpose: req.body["floorDetails.groundFloor.purpose"] || req.body.floorDetails?.groundFloor?.purpose || 'residential'
        },
        basement: {
            hasUnits: req.body["floorDetails.basement.hasUnits"] === 'true' || req.body.floorDetails?.basement?.hasUnits === true,
            purpose: req.body["floorDetails.basement.purpose"] || req.body.floorDetails?.basement?.purpose || 'none',
            floorCount: req.body["floorDetails.basement.floorCount"] ? Number(req.body["floorDetails.basement.floorCount"]) : (req.body.floorDetails?.basement?.floorCount || 0)
        },
        roof: {
            hasGarden: req.body["floorDetails.roof.hasGarden"] === 'true' || req.body.floorDetails?.roof?.hasGarden === true,
            hasPool: req.body["floorDetails.roof.hasPool"] === 'true' || req.body.floorDetails?.roof?.hasPool === true,
            hasCommonArea: req.body["floorDetails.roof.hasCommonArea"] === 'true' || req.body.floorDetails?.roof?.hasCommonArea === true
        }
    };

    // پارس کردن اطلاعات مدیران (Manager)
    const manager = [];
    if (req.body["manager[0].user"] || req.body.manager?.[0]?.user) {
        manager.push({
            user: req.body["manager[0].user"] || req.body.manager[0].user,
            position: req.body["manager[0].position"] || req.body.manager[0].position,
            telegram: req.body["manager[0].telegram"] || req.body.manager[0].telegram,
            whatsapp: req.body["manager[0].whatsapp"] || req.body.manager[0].whatsapp,
        });
    }

    // پارس کردن واحدها (Units)
    const units = {
        total: req.body["units.total"] ? Number(req.body["units.total"]) : (req.body.units?.total || 1),
        byBedrooms: {
            studio: req.body["units.byBedrooms.studio"] ? Number(req.body["units.byBedrooms.studio"]) : (req.body.units?.byBedrooms?.studio || 0),
            oneBedroom: req.body["units.byBedrooms.oneBedroom"] ? Number(req.body["units.byBedrooms.oneBedroom"]) : (req.body.units?.byBedrooms?.oneBedroom || 0),
            twoBedroom: req.body["units.byBedrooms.twoBedroom"] ? Number(req.body["units.byBedrooms.twoBedroom"]) : (req.body.units?.byBedrooms?.twoBedroom || 0),
            threeBedroom: req.body["units.byBedrooms.threeBedroom"] ? Number(req.body["units.byBedrooms.threeBedroom"]) : (req.body.units?.byBedrooms?.threeBedroom || 0),
        },
        areaRange: {
            min: req.body["units.areaRange.min"] ? Number(req.body["units.areaRange.min"]) : (req.body.units?.areaRange?.min || 0),
            max: req.body["units.areaRange.max"] ? Number(req.body["units.areaRange.max"]) : (req.body.units?.areaRange?.max || 0),
            average: req.body["units.areaRange.average"] ? Number(req.body["units.areaRange.average"]) : (req.body.units?.areaRange?.average || 0),
        },
        byFloor: req.body.units?.byFloor || [] // در صورت ارسال آرایه از کلاینت
    };

    // پارس کردن آدرس (Address)
    const address = {
        province: req.body["address.province"] || req.body.address?.province,
        city: req.body["address.city"] || req.body.address?.city,
        neighborhood: req.body["address.neighborhood"] || req.body.address?.neighborhood,
        street: req.body["address.street"] || req.body.address?.street,
        alley: req.body["address.alley"] || req.body.address?.alley,
        plaque: req.body["address.plaque"] ? Number(req.body["address.plaque"]) : (req.body.address?.plaque || undefined),
        renewalCode: req.body["address.renewalCode"] || req.body.address?.renewalCode,
    };

    // پارس کردن قیمت‌گذاری (Pricing)
    const pricing = {
        minPrice: req.body["pricing.minPrice"] ? Number(req.body["pricing.minPrice"]) : (req.body.pricing?.minPrice || 0),
        maxPrice: req.body["pricing.maxPrice"] ? Number(req.body["pricing.maxPrice"]) : (req.body.pricing?.maxPrice || 0),
        averagePrice: req.body["pricing.averagePrice"] ? Number(req.body["pricing.averagePrice"]) : (req.body.pricing?.averagePrice || 0),
        pricePerMeter: req.body["pricing.pricePerMeter"] ? Number(req.body["pricing.pricePerMeter"]) : (req.body.pricing?.pricePerMeter || 0),
        currency: req.body["pricing.currency"] || req.body.pricing?.currency || 'IRT',
        isNegotiable: req.body["pricing.isNegotiable"] !== undefined ? (req.body["pricing.isNegotiable"] === 'true' || req.body.pricing?.isNegotiable === true) : true
    };

    // اصلاح ساختار امکانات (Features) - مدیریت ارسال به صورت آرایه یا فیلدهای جداگانه
    let features = [];
    if (Array.isArray(req.body.features)) {
        features = req.body.features;
    } else {
        let idx = 0;
        while (req.body[`features[${idx}]`] !== undefined) {
            features.push(req.body[`features[${idx}]`]);
            idx++;
        }
    }

    // 3. پردازش فایل‌های الحاقی (Attachments & Metadata)
    const images = req.files?.images || [];
    const videos = req.files?.videos || [];
    const attachmentsMeta = typeof req.body.attachmentsMeta === 'string' ? JSON.parse(req.body.attachmentsMeta || "[]") : (req.body.attachmentsMeta || []);

    const attachments = [];

    // پردازش تصاویر
    images.forEach((file, index) => {
        const meta = attachmentsMeta.find(
            m => m.type === "image" && m.index === index
        ) || attachmentsMeta[index] || {}; // هماهنگی در صورت عدم ارسال فیلد type در سورس اصلی metadata

        attachments.push({
            type: "image",
            url: `/media/${file.filename}`,
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
            isMain: meta.isMain || false,
            tour: meta.tour || false
        });
    });

    // پردازش ویدیوها
    videos.forEach((file, index) => {
        const meta = attachmentsMeta.find(
            m => m.type === "video" && m.index === index
        ) || {};

        attachments.push({
            type: "video",
            url: `/media/${file.filename}`,
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
            isMain: false,
            tour: meta.tour || false
        });
    });

    // 4. ثبت نهایی در پایگاه داده بر اساس Schema
    const project = await Project.create({
        brand,
        title,
        description,
        userId: req.id, // دریافت شناسه ادمین از Request
        manager,
        address,
        coordinates,
        area,
        landArea,
        direction,
        totalFloors,
        floorDetails,
        units,
        pricing,
        features,
        startTime,
        endTime,
        estimatedCompletion,
        actualCompletion,
        attachments,
        projectSimilar: req.body.projectSimilar || [],
        propertyFiles: req.body.propertyFiles || [],
    });

    return res.status(201).json({
        success: true,
        data: project
    });
});


export const updateProject = catchAsync(async (req, res, next) => {

    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
        return next(new HandleERROR("پروژه پیدا نشد.", 404));
    }

    const {
        brand,
        title,
        description,
        manager,
        address,
        coordinates,
        area,
        landArea,
        direction,
        totalFloors,
        floorDetails,
        units,
        pricing,
        features,
        startTime,
        endTime,
        estimatedCompletion,
        actualCompletion,
        projectSimilar,
        propertyFiles,
        imagesMeta
    } = req.body;

    if (brand !== undefined) project.brand = brand;
    if (title !== undefined) project.title = title;
    if (description !== undefined) project.description = description;

    if (manager !== undefined) project.manager = manager;

    if (address !== undefined) project.address = address;

    if (coordinates !== undefined) project.coordinates = coordinates;

    if (area !== undefined) project.area = area;

    if (landArea !== undefined) project.landArea = landArea;

    if (direction !== undefined) project.direction = direction;

    if (totalFloors !== undefined) project.totalFloors = totalFloors;

    if (floorDetails !== undefined) project.floorDetails = floorDetails;

    if (units !== undefined) project.units = units;

    if (pricing !== undefined) project.pricing = pricing;

    if (features !== undefined) project.features = features;

    if (startTime !== undefined) project.startTime = startTime;

    if (endTime !== undefined) project.endTime = endTime;

    if (estimatedCompletion !== undefined)
        project.estimatedCompletion = estimatedCompletion;

    if (actualCompletion !== undefined)
        project.actualCompletion = actualCompletion;

    if (projectSimilar !== undefined)
        project.projectSimilar = projectSimilar;

    if (propertyFiles !== undefined)
        project.propertyFiles = propertyFiles;

    const deletedImages = JSON.parse(req.body.deletedImages || "[]");

    project.attachments = project.attachments.filter(
        image => !deletedImages.includes(image._id.toString())
    );

    const attachmentsMeta = JSON.parse(
        req.body.attachmentsMeta || "[]"
    );

    project.attachments.forEach(image => {

        const item = attachmentsMeta.find(
            i => i._id === image._id.toString()
        );

        if (!item) return;

        image.isMain = item.isMain;
        image.tour = item.tour;
        image.alt = item.alt || "";
        image.title = item.title || "";
        image.description = item.description || "";

    });
    const newImagesMeta = JSON.parse(
        req.body.newImagesMeta || "[]"
    );

    const deletedAttachments = JSON.parse(req.body.deletedAttachments || "[]");

    project.attachments = project.attachments.filter(
        item => !deletedAttachments.includes(item._id.toString())
    );


    project.attachments.forEach(item => {

        const meta = attachmentsMeta.find(
            m => m._id === item._id.toString()
        );

        if (!meta) return;

        item.isMain = meta.isMain ?? item.isMain;
        item.tour = meta.tour ?? item.tour;
        item.alt = meta.alt ?? item.alt;
        item.title = meta.title ?? item.title;
        item.description = meta.description ?? item.description;

    });

    const newAttachmentsMeta = JSON.parse(
        req.body.newAttachmentsMeta || "[]"
    );

    const images = req.files?.images || [];
    const videos = req.files?.videos || [];

    const files = [...images, ...videos];

    files.forEach((file, index) => {

        const meta = newAttachmentsMeta[index] || {};

        project.attachments.push({

            type: file.mimetype.startsWith("image/")
                ? "image"
                : "video",

            url: `/media/${file.filename}`,

            originalName: file.originalname,

            mimeType: file.mimetype,

            size: file.size,

            isMain: meta.isMain || false,

            tour: meta.tour || false,

            alt: meta.alt || "",

            title: meta.title || "",

            description: meta.description || ""

        });

    });

    const mainImages = project.attachments.filter(
        item => item.type === "image" && item.isMain
    );

    // if (mainImages.length !== 1) {
    //     return next(
    //         new HandleERROR("دقیقاً یک تصویر اصلی باید وجود داشته باشد.", 400)
    //     );
    // }

    const tourImages = project.attachments.filter(
        item => item.type === "image" && item.tour
    );

    // if (tourImages.length > 1) {
    //     return next(
    //         new HandleERROR("فقط یک تصویر برای تور مجازی مجاز است.", 400)
    //     );
    // }

    await project.save();

    return res.status(200).json({
        success: true,
        project
    })
})


// export const deleteProject = catchAsync(async (req, res, next) => {
// })




