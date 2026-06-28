import express from 'express'
import { createCategory, deleteCategory, getAllCategory, getOneCategory, updateCategory } from '../Controllers/categoryCn.js'
import { isAdmin } from '../Middleware/isAdmin.js'
import { checkPermission } from '../Middleware/checkPermission.js'
const categoryRouter = express.Router()


categoryRouter.route("/").get(getAllCategory).post(isAdmin, checkPermission('blog'), createCategory)
categoryRouter.route("/:id").get(getOneCategory).delete(isAdmin, checkPermission('blog'), deleteCategory).patch(isAdmin, checkPermission('blog'), updateCategory)

export default categoryRouter