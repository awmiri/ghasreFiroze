import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Collaboration from "../Models/collaborationRequest.js";
import User from "../Models/userModel.js";



export const getAllCollaboration = catchAsync(async (req, res, next) => {

    const result = await new ApiFeatures(Collaboration, req.query, req.role)
        .filter()
        .search(['title'])
        .sort()
        .paginate()
        .populate({
            path: 'userId',
            select: 'phoneNumber'
        })
        .limitFields('title status reviewedAt userId')
        .execute()

    return res.status(200).json(result)



})

export const getOneCollaboration = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const { id: adminId } = req

    const collaboration = await Collaboration.findById(id)
        .populate("userId")
        .populate('reviewedBy')
        .select('-__v')
        .lean()

    if (!collaboration) {
        return next(new AppError('همکاری یافت نشد', 404));
    }

    if (!collaboration.reviewedBy) {
        await Collaboration.findByIdAndUpdate(id, {
            reviewedBy: adminId,
            reviewedAt: Date.now()
        },
            {
                new: true,
                runValidators: true
            })

        const updatedCollaboration = await Collaboration.findById(id)
            .populate("userId")
            .populate('reviewedBy')
            .select('-__v')

        return res.status(200).json({
            success: true,
            message: "First view recorded",
            collaboration: updatedCollaboration
        })
    }

    return res.status(200).json({
        success: true,
        message: "get One collaborations success",
        collaboration
    })
})

export const createCollaboration = catchAsync(async (req, res, next) => {
    const { userId, requestType, desc, fullName } = req?.body

    if (!userId || !requestType || !desc || !fullName) {
        return next(new HandleERROR('همه فیلد ها را ارسال کنید'), 400)
    }

    const exitUser = await User.findById(userId)

    if (!exitUser) {
        return next(new HandleERROR('not found user '), 400)
    }

    const newCollaboration = await Collaboration.create({
        userId, requestType, desc, fullName
    })

    if (!newCollaboration) {
        return next(new HandleERROR('server error not create '), 400)
    }

    return res.status(200).json({
        success: true,
        data: newCollaboration
    })

})

export const updateCollaboration = catchAsync(async (req, res, next) => {

    const { fullName, requestType, status } = req.body
    const { id } = req.params

    let fild = {}

    if (fullName !== undefined) {
        fild.fullName = fullName.trim();
    }

    if (requestType !== undefined) {
        fild.requestType = requestType
    }
    if (status !== undefined) {
        fild.status = requestType
    }

    if (Object.keys(fild).length === 0) {
        return next(new HandleERROR("No fields to update. Please send at least one field", 400));
    }

    const updateRequest = await Collaboration.findOneAndUpdate(id, fild, { new: true, runValidators: true })
        .populate('userId')
        .select('-__v')


    if (!updateRequest) {
        return next(new HandleERROR("Not found requet for update", 400));
    }

    return res.status(200).json({
        success: true,
        data: updateRequest
    })

})


// export const deleteCollaboration = catchAsync(async (req, res, next) => {

// })
