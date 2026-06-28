import ApiFeatures, { catchAsync, HandleERROR } from "vanta-api";
import Blog from '../Models/blogModel.js'
import Admin from "../Models/adminModel.js";
import mongoose from "mongoose";



export const getAllBlog = catchAsync(async (req, res, next) => {
    const result = await new ApiFeatures(Blog, req.query)
        .filter()
        .search(['title'])
        .sort()
        .paginate()
        .populate({
            path: 'createBy',
            select: 'fullName'
        })
        .execute()

    const filteredData = result.data.map(item => ({
        _id: item._id,
        title: item.title,
        subTitle: item.subTitle,
        typeBlog: item.typeBlog,
        studyTime: item.studyTime,
        createdAt: item.createdAt,
        createBy: item.createBy,

    }))


    return res.status(200).json({
        success: true,
        count: result.count,
        data: filteredData
    })
})


export const getOneBlog = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return next(new HandleERROR("Please send blog ID", 400));
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new HandleERROR("Invalid blog ID format", 400));
    }

    const blog = await Blog.findById(id)
        .select('-__v')
        .populate('createBy', 'fullName phoneNumber')
        .populate('catId', 'title desc')
        .lean();

    if (!blog) {
        return next(new HandleERROR("Blog not found", 404));
    }

    return res.status(200).json({
        success: true,
        message: "Blog retrieved successfully",
        data: blog
    });
});


export const createBlog = catchAsync(async (req, res, next) => {
    const { title, subTitle, studyTime, typeBlog, content, catId, isPub } = req.body;
    const { id } = req;

    const admin = await Admin.findById(id);
    if (!admin) {
        return next(new HandleERROR("Admin not found", 404));
    }
    if (!admin.isActive) {
        return next(new HandleERROR("Admin is not active", 403));
    }

    if (!title || !subTitle || !typeBlog || !content || !catId) {
        return next(new HandleERROR("title, subTitle, typeBlog, content and catId are required", 400));
    }

    let processedContent = content;
    // if (typeof content === 'string') {
    //     try {
    //         processedContent = JSON.parse(content);
    //     } catch (error) {
    //         return next(new HandleERROR("Invalid content format. content must be a valid JSON array", 400));
    //     }
    // }

    if (!Array.isArray(processedContent)) {
        return next(new HandleERROR("content must be an array of blocks", 400));
    }

    if (req.files) {
        const imageBlock = processedContent.find(block => block.image === null || block.image === undefined || !block.image.url);
        if (imageBlock) {
            if (!imageBlock.image) {
                imageBlock.image = {};
            }
            imageBlock.image.url = `/media/${req.file.filename}`;
            if (!imageBlock.image.alt) {
                imageBlock.image.alt = title || 'Blog image';
            }
        } else {
            processedContent.push({
                heading: title || 'New Section',
                text: '',
                image: {
                    url: `/media/${req.file.filename}`,
                    alt: title || 'Blog image'
                }
            });
        }
    }

    const blog = await Blog.create({
        title: title.trim(),
        subTitle: subTitle.trim(),
        studyTime: studyTime || 5,
        typeBlog,
        content: processedContent,
        catId,
        createBy: admin._id,
        isPub: isPub || false
    });

    const populatedBlog = await Blog.findById(blog._id)
        .populate('createBy', 'fullName phoneNumber')
        .populate('catId', 'title')
        .lean();

    return res.status(201).json({
        success: true,
        message: "Blog created successfully",
        data: populatedBlog
    });
});


export const updateBlog = catchAsync(async (req, res, next) => {
    const { title, subTitle, studyTime, typeBlog, catId, isPub } = req.body;
    const { id } = req.params;
    const adminId = req.id

    if (!id) {
        return next(new HandleERROR("Blog ID is required", 400));
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new HandleERROR("Invalid blog ID format", 400));
    }

    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
        return next(new HandleERROR("Blog not found", 404));
    }


    const updateData = {};

    if (title !== undefined) {
        updateData.title = title.trim();
    }
    if (subTitle !== undefined) {
        updateData.subTitle = subTitle.trim();
    }
    if (studyTime !== undefined) {
        updateData.studyTime = studyTime;
    }
    if (typeBlog !== undefined) {
        updateData.typeBlog = typeBlog;
    }
    if (catId !== undefined) {
        if (!mongoose.Types.ObjectId.isValid(catId)) {
            return next(new HandleERROR("Invalid category ID format", 400));
        }
        updateData.catId = catId
    }
    if (isPub !== undefined) {
        updateData.isPub = isPub;
    }

    if (Object.keys(updateData).length === 0) {
        return next(new HandleERROR("No fields to update. Please send at least one field (title, subTitle, studyTime, typeBlog, catId, isPub)", 400));
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
        id,
        updateData,
        {
            new: true,
            runValidators: true
        }
    )
        .populate('createBy', 'fullName phoneNumber')
        .populate('catId', 'title')
        .lean();

    return res.status(200).json({
        success: true,
        message: "Blog updated successfully",
        data: updatedBlog
    });
});

export const deleteBlog = catchAsync(async (req, res, next) => {
    const { id } = req.params

    if (!id) {
        return next(new HandleERROR(400, "Blog ID is required"))
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new HandleERROR(400, "Invalid blog ID format"))
    }

    const blog = await Blog.findByIdAndDelete(id)

    if (!blog) {
        return next(new HandleERROR(404, "Blog not found"))
    }

    return res.status(200).json({
        success: true,
        message: "Blog deleted successfully",
        data: blog
    })
})




export const updateBlogBlock = catchAsync(async (req, res, next) => {
    const { blogId, blockId } = req.params;
    const { heading, text, image } = req.body;
    const adminId = req.id || '6a3f9b1f575245fac1d0cf9a';

    if (!blogId || !blockId) {
        return next(new HandleERROR("Blog ID and Block ID are required", 400));
    }

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return next(new HandleERROR("Invalid blog ID format", 400));
    }

    if (!mongoose.Types.ObjectId.isValid(blockId)) {
        return next(new HandleERROR("Invalid block ID format", 400));
    }

    const blog = await Blog.findById(blogId);
    if (!blog) {
        return next(new HandleERROR("Blog not found", 404));
    }

    if (blog.createBy.toString() !== adminId && req.role !== 'superAdmin') {
        return next(new HandleERROR("You don't have permission to update this blog", 403));
    }

    const blockIndex = blog.content.findIndex(
        block => block._id && block._id.toString() === blockId
    );

    if (blockIndex === -1) {
        return next(new HandleERROR("Block not found", 404));
    }

    const block = blog.content[blockIndex];

    if (heading !== undefined) {
        block.heading = heading.trim();
    }
    if (text !== undefined) {
        block.text = text.trim();
    }
    if (image !== undefined) {
        if (!block.image) {
            block.image = {};
        }
        if (image.url !== undefined) {
            block.image.url = image.url;
        }
        if (image.alt !== undefined) {
            block.image.alt = image.alt;
        }
    }

    if (req.file) {
        if (!block.image) {
            block.image = {};
        }
        block.image.url = `/media/${req.file.filename}`;
        if (!block.image.alt) {
            block.image.alt = block.heading || blog.title || 'Blog image';
        }
    }

    blog.markModified('content');
    await blog.save();

    const updatedBlog = await Blog.findById(blogId)
        .populate('createBy', 'fullName phoneNumber')
        .populate('catId', 'title')
        .lean();

    return res.status(200).json({
        success: true,
        message: "Block updated successfully",
        data: {
            block: updatedBlog.content.find(b => b._id.toString() === blockId),
            blog: updatedBlog
        }
    });
});

export const addBlogBlock = catchAsync(async (req, res, next) => {
    const { blogId } = req.params;
    const { heading, text, image } = req.body;
    const adminId = req.id || '6a3f9b1f575245fac1d0cf9a';

    if (!blogId) {
        return next(new HandleERROR("Blog ID is required", 400));
    }

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return next(new HandleERROR("Invalid blog ID format", 400));
    }

    const blog = await Blog.findById(blogId);
    if (!blog) {
        return next(new HandleERROR("Blog not found", 404));
    }

    const newBlock = {
        _id: new mongoose.Types.ObjectId(),
        heading: heading || `بخش ${blog.content.length + 1}`,
        text: text || '',
        image: image || null
    };

    if (req.file) {
        newBlock.image = {
            url: `/media/${req.file.filename}`,
            alt: newBlock.heading || blog.title || 'Blog image'
        };
    }

    blog.content.push(newBlock);
    await blog.save();

    const updatedBlog = await Blog.findById(blogId)
        .populate('createBy', 'fullName phoneNumber')
        .populate('catId', 'title')
        .lean();

    return res.status(201).json({
        success: true,
        message: "Block added successfully",
        data: {
            block: updatedBlog.content.find(b => b._id.toString() === newBlock._id.toString()),
            blog: updatedBlog
        }
    });
});

export const deleteBlogBlock = catchAsync(async (req, res, next) => {
    const { blogId, blockId } = req.params;
    const adminId = req.id || '6a3f9b1f575245fac1d0cf9a';

    if (!blogId || !blockId) {
        return next(new HandleERROR("Blog ID and Block ID are required", 400));
    }

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return next(new HandleERROR("Invalid blog ID format", 400));
    }

    if (!mongoose.Types.ObjectId.isValid(blockId)) {
        return next(new HandleERROR("Invalid block ID format", 400));
    }

    const blog = await Blog.findById(blogId);
    if (!blog) {
        return next(new HandleERROR("Blog not found", 404));
    }

    if (blog.createBy.toString() !== adminId && req.role !== 'superAdmin') {
        return next(new HandleERROR("You don't have permission to update this blog", 403));
    }

    const blockIndex = blog.content.findIndex(
        block => block._id && block._id.toString() === blockId
    );

    if (blockIndex === -1) {
        return next(new HandleERROR("Block not found", 404));
    }

    const deletedBlock = blog.content[blockIndex];
    blog.content.splice(blockIndex, 1);
    await blog.save();

    return res.status(200).json({
        success: true,
        message: "Block deleted successfully",
        data: {
            deletedBlock,
            remainingBlocks: blog.content.length
        }
    });
});
