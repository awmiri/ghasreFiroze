import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Category from "../Models/categoryBlogModel.js";


export const getAllCategory = catchAsync(async (req, res, next) => {
    const result = await new ApiFeatures(Category, req.query)
        .search(["title"])
        .filter()
        .sort()
        .limitFields()
        .paginate()
        .populate()
        .execute()

    return res.status(200).json(result)
})


export const getOneCategory = catchAsync(async (req, res, next) => {
    const { id } = req.params

    if (!id) {
        return next(new HandleERROR("plese send all filds", 400))
    }

    const oneCat = await Category.findById(id)
        .select('-createdAt')
        .select('-updatedAt')
        .select('-__v')
    if (!oneCat) {
        return res.status(404).json({
            success: false,
            message: "not found category"
        })

    }

    return res.status(200).json({
        success: true,
        message: "send category successfully",
        category: oneCat
    })
})

export const updateCategory = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return next(
            new HandleERROR("category id is required", 400)
        );
    }

    const updateData = {};

    const { title, desc } = req.body
    if (title) {
        updateData.title = title
    }
    if (desc) {
        updateData.desc = desc
    }
    const category = await Category.findByIdAndUpdate(
        id,
        updateData,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!category) {
        return next(
            new HandleERROR("category not found", 404)
        )
    }
    return res.status(200).json({
        success: true,
        message: "category updated successfully",
        category,
    });
})

export const deleteCategory = catchAsync(async (req, res, next) => {
    const { id } = req.params

    const category = await Category.findOneAndDelete(id)

    if (!category) {
        return next(new HandleERROR('not found category'))
    }

    return res.status(200).json({
        success: true,
        category
    })

})

export const createCategory = catchAsync(async (req, res, next) => {
    const { role, permission } = req

    if (!role || !permission) {
        return next(new HandleERROR('you no have permission', 400))
    }

    const { title, desc } = req.body

    const newCat = await Category.create({ title, desc })


    if (newCat) {
        return res.status(200).json({
            success: true,
            message: 'create category is successfully ',
            category: newCat
        });
    } else {
        return next(new HandleERROR('server error ', 400))

    }
})


