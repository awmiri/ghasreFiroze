import express from 'express'
import { isAdmin } from '../Middleware/isAdmin.js'
import { isLogin } from '../Middleware/isLogin.js'
import { checkPermission } from '../Middleware/checkPermission.js'
import { checkCode, createUser, getAllUser, getOneUser, isActiveUser, updateUser, userCreateByAdmin } from '../Controllers/userCn.js'
const userRouter = express.Router()
userRouter.route('/').get(isAdmin, checkPermission('user'), getAllUser).post(createUser)
userRouter.route('/:id').get(isLogin, getOneUser).patch(isLogin, updateUser)
userRouter.route('/isactive/:id').patch(isLogin, isActiveUser)
userRouter.route("/verify-code").post(checkCode)
userRouter.route("/create-userby-admin").post(isAdmin, checkPermission('user'), userCreateByAdmin)
