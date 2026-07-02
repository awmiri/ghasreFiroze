import express from 'express'
import { createProject, getAllProject, getOneProject, updateProject } from '../Controllers/projectCn.js'
import { isAdmin } from '../Middleware/isAdmin.js'
import { isLogin } from '../Middleware/isLogin.js'
import { checkPermission } from '../Middleware/checkPermission.js'
import upload from '../Middleware/upload.js'

const projectRouter = express.Router()

projectRouter.route('/').get(getAllProject)
projectRouter.route('/:id').get(getOneProject)
projectRouter.route('/editproject/:id').patch(isAdmin, checkPermission('project'),
    upload.fields([
        {
            name: "images",
            maxCount: 40
        },
        {
            name: "videos",
            maxCount: 15
        }
    ]), updateProject)
projectRouter.route('/creatproject').post(isAdmin, checkPermission('project'), upload.fields([
    {
        name: "images",
        maxCount: 40
    },
    {
        name: "videos",
        maxCount: 15
    }
]), createProject)


export default projectRouter