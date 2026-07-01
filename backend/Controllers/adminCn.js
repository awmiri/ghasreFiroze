import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Admin from "../Models/adminModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";


export const getAllAdmin = catchAsync(async (req, res, next) => {
    const result = await new ApiFeatures(Admin, req.query, req.role)
        .addManualFilters({
            // isActive: true 
        })
        .filter()
        .sort()
        .limitFields('-__v')
        .paginate()
        .populate()
        .execute()
    return res.status(200).json(result)
})


export const getOneAdmin = catchAsync(async (req, res, next) => {

    const { id } = req.params
    if (!id) {
        return next(new HandleERROR("Admin ID is required", 400));
    }

    const admin = await Admin.findById(id)
        .lean()
        .select('-__v')


    if (!admin) {
        return res.status(404).json({
            success: false,
            admin
        })
    }

    return res.status(200).json({
        success: true,
        admin
    })

})


export const updateAdmin = catchAsync(async (req, res, next) => {
    const { id } = req.params

    const { fullName, permission = [], role } = req.body

    let newData = {}
    if (fullName !== undefined) newData.fullName = fullName;
    if (permission.length > 0) newData.permission = permission;
    if (role !== undefined) newData.role = role;

    if (Object.keys(newData).length === 0) {
        return next(new HandleERROR(400, "هیچ فیلدی برای آپدیت ارسال نشده است"));
    }

    const updateAdmin = await Admin.findByIdAndUpdate(id, newData, {
        new: true,
        runValidators: true
    })
        .select('fullName phoneNumber permission role isActive')
        .lean()

    if (!updateAdmin) {
        return next(new HandleERROR('not found admin', 404))
    }

    return res.status(200).json({
        success: true,
        message: "user updated successfully",
        updateAdmin,
    });
})


export const createAdmin = catchAsync(async (req, res, next) => {
    const { phoneNumber, fullName, permission = [], role, isActive, password } = req?.body

    if (!phoneNumber || !fullName || !permission || !role || !isActive) {
        return next(new HandleERROR("plese send All fild", 400))
    }

    const oldAdmin = await Admin.findOne({ phoneNumber })

    if (oldAdmin) {
        return next(new HandleERROR("admin has already been created", 404))
    }

    const hashPass = await bcrypt.hashSync(password, 10)
    const admin = await Admin.create({
        phoneNumber,
        fullName,
        permission,
        role,
        isActive,
        password: hashPass
    })
    return res.status(201).json({
        success: true,
        message: 'create Admin success',
        admin
    })

})

export const deletAdmin = catchAsync(async (req, res, next) => {
    const { id } = req.params

    if (!id) {
        return next(new HandleERROR("Admin ID is required", 400));
    }


    const admin = await Admin.findByIdAndUpdate(id,
        {
            isActive: false
        },
        {
            new: true,
            runValidators: true,
        }
    )

    if (!admin) {
        return next(new HandleERROR('not found admin', 404))
    }

    return res.status(200).json({
        success: true,
        message: 'admin delete is successfully',
        admin
    })

})


export const loginAmin = catchAsync(async (req, res, next) => {
    const { phoneNumber, password } = req?.body

    if (!phoneNumber || !password) {
        return next(new HandleERROR("phone number and passWord  send Plese", 400));
    }

    const user = await Admin.findOne({ phoneNumber }).lean()


    if (!user) {
        return next(new HandleERROR("not Found is user", 404));
    }

    const isMatch = await bcrypt.compare(password, user?.password)

    if (isMatch) {
        const token = jwt.sign(
            { id: user._id, phoneNumber: user.phoneNumber, role: user.role, permission: user.permission },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )
        const { password, _id, __v, ...others } = user
        return res.status(200).json({
            success: true,
            user: others,
            token,
        })

    } else {
        next(new HandleERROR("phone number or password wrong", 400))
    }

})
