import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import User from "../Models/userModel.js";
import jwt from 'jsonwebtoken'

export const getAllUser = catchAsync(async (req, res, next) => {

    const result = await new ApiFeatures(User, req.query, req.role)
        .search(['phoneNumber', 'fullName'])
        .filter()
        .sort()
        .limitFields('-__v')
        .paginate()
        .populate()
        .execute()
    return res.status(200).json(result)
})


export const getOneUser = catchAsync(async (req, res, next) => {
    const { id: userId, role, permission = [] } = req
    const { id } = req.params
    if ((role == 'user' || role == "agent" || role == 'contractor') && id === userId) {
        const user = await User.findById(id)
            .populate("collaboration")
        if (!user) {
            return next(new HandleERROR('not found user ', 404))
        }
        return res.status(200).json({
            success: true,
            message: 'found user suuccesfully',
            data: user

        })
    }

    if ((role == 'admin' || role == 'superAdmin') && permission.includes('user')) {
        const user = await User.findById(id)
            .populate("collaboration")

        if (!user) {
            return next(new HandleERROR('not found user ', 404))
        }

        return res.status(200).json({
            success: true,
            message: 'found user suuccesfully',
            data: user

        })

    }


})



export const checkCode = catchAsync(async (req, res, next) => {
    const { code } = req?.body;
    const { phoneNumber, type } = jwt.verify(
        req.headers?.authorization.split(" ")[1],
        process.env.JWT_SECRET
    );
    const vaildate = await verifyCode(phoneNumber, code);

    if (vaildate.success) {
        if (type == "register") {
            const newUser = await User.create({ fullName, phoneNumber });
            return res.status(201).json({
                success: true,
                message: "user created successfully",
                newUser
            });
        } else if (type == "login") {
            const user = await User.findOne({ phoneNumber });
            const cart = await Cart.findOne({ userId: user._id });

            const token = jwt.sign(
                { phoneNumber: user.phoneNumber, id: user._id },
                process.env.JWT_SECRET
            );
            return res.status(200).json({
                success: true,
                token,
                user,
                cart
            });
        }
    } else {
        next(new HandleERROR("code is wrong", 401));
    }
});

export const createUser = catchAsync(async (req, res, next) => {
    const { phoneNumber } = req?.body;

    if (!phoneNumber) {
        return next(new HandleERROR("phone number is required", 400));
    }
    const existUser = await User.findOne({ phoneNumber });
    if (existUser) {
        return next(new HandleERROR("this phone number is already exist", 400));
    }
    const result = await sendAuthCode(phoneNumber);
    if (result.success) {
        const tempToken = jwt.sign(
            { phoneNumber, type: "register" },
            process.env.JWT_SECRET
        );
        return res.status(200).json({
            success: true,
            message: "code sent successfuly",
            token: tempToken,
        });
    } else {
        return next(new HandleERROR(result.sessage, 400));
    }

})

export const updateUser = catchAsync(async (req, res, next) => {
    const { fullName, role, permission, contractorDetails, collaborationStatus } = req.body;
    const { id } = req.params;
    const { id: userId, role: userRole, permission: userPermission } = req;

    if (userId !== id && userRole !== 'admin' && userRole !== 'superAdmin') {
        return next(new HandleERROR('شما اجازه ویرایش این کاربر را ندارید', 403));
    }

    const updateData = {};
    if (fullName !== undefined) updateData.fullName = fullName;
    if (role !== undefined) updateData.role = role;
    if (permission !== undefined) updateData.permission = permission;
    if (contractorDetails !== undefined) updateData.contractorDetails = contractorDetails;
    if (collaborationStatus !== undefined) updateData.collaborationStatus = collaborationStatus;

    if (userRole !== 'admin') {
        delete updateData.role;
        delete updateData.permission;
    }

    if (Object.keys(updateData).length === 0) {
        return next(new HandleERROR('هیچ فیلدی برای به‌روزرسانی ارسال نشده است', 400));
    }

    const user = await User.findByIdAndUpdate(
        id,
        { $set: updateData },
        {
            new: true,
            runValidators: true
        }
    );

    if (!user) {
        return next(new AppError('کاربری با این شناسه یافت نشد', 404));
    }

    res.status(200).json({
        status: 'success',
        data: { user }
    });
});

export const isActiveUser = catchAsync(async (req, res, next) => {
    const { id: userId, role, permission = [] } = req
    const { id } = req.params
    const { isActive } = req.body

    if ((role == 'user' || role == "agent" || role == 'contractor') && id === userId) {
        const user = await User.findOneAndUpdate(id, {
            isActive: false
        },
            {
                new: true,
                runValidators: true
            }
        )


        if (!user) {
            return next(new HandleERROR('not found user ', 404))
        }
        return res.status(200).json({
            success: true,
            data: user

        })
    }
    if ((role == 'admin' || role == 'superAdmin') && permission.includes('user')) {

        const user = await User.findByIdAndUpdate(id, {
            isActive
        },
            {
                new: true,
                runValidators: true
            })
        if (!user) {
            return next(new HandleERROR('not found user ', 404))
        }

        return res.status(200).json({
            success: true,
            message: 'update user suuccesfully',
            data: user

        })


    }




})