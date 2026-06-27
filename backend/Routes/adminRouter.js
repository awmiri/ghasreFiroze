import express from 'express'
import { isAdmin } from '../Middleware/isAdmin.js'
import { checkPermission } from '../Middleware/checkPermission.js'
import { createAdmin, deletAdmin, getAllAdmin, getOneAdmin, updateAdmin } from '../Controllers/adminCn.js'
const adminRouter = express.Router()

adminRouter.route('/').get(isAdmin, checkPermission('admin'), getAllAdmin).post(isAdmin, checkPermission('admin'), createAdmin)
adminRouter.route('/:id').get(isAdmin, checkPermission('admin'), getOneAdmin)
    .patch(updateAdmin)

adminRouter.route('/:id/delete').patch(isAdmin, checkPermission('admin'), deletAdmin)
export default adminRouter    
