import express from 'express'
import { isAdmin } from '../Middleware/isAdmin.js'
import { checkPermission } from '../Middleware/checkPermission.js'
import { createAdmin, deletAdmin, getAllAdmin, getOneAdmin, loginAmin, updateAdmin } from '../Controllers/adminCn.js'
const adminRouter = express.Router()

adminRouter.route('/').get(isAdmin, checkPermission('admin'), getAllAdmin).post(createAdmin)
adminRouter.route('/:id').get(isAdmin, checkPermission('admin'), getOneAdmin)
    .patch(updateAdmin)
adminRouter.route('/authadmin').post(loginAmin)
adminRouter.route('/:id/delete').patch(isAdmin, checkPermission('admin'), deletAdmin)
export default adminRouter    
