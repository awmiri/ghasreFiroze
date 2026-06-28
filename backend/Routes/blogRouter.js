import express from 'express'
import { addBlogBlock, createBlog, deleteBlog, deleteBlogBlock, getAllBlog, getOneBlog, updateBlog, updateBlogBlock } from '../Controllers/blogCn.js'
import { isAdmin } from '../Middleware/isAdmin.js'
import { checkPermission } from '../Middleware/checkPermission.js'
import upload from '../Middleware/upload.js'


const blogRouter = express.Router()

blogRouter.route('/').get(getAllBlog)
blogRouter.route('/:id').get(getOneBlog).patch(upload.array('image', 5), updateBlog).delete(isAdmin, checkPermission('blog'), deleteBlog)
blogRouter.route('/create').post(upload.array('image', 5), createBlog)
blogRouter.route('/:blogId/block/:blockId')
    .patch(
        isAdmin,
        checkPermission('blog'),
        upload.array('image', 5),
        updateBlogBlock
    )
    .delete(
        isAdmin,
        checkPermission('blog'),
        deleteBlogBlock
    );

blogRouter.route('/:blogId/block')
    .post(
        // isAdmin,
        // checkPermission('blog'),
        upload.array('image', 5),
        addBlogBlock

    );

export default blogRouter
