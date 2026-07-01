import express from 'express'
import { isLogin } from '../Middleware/isLogin.js'
import { isAdmin } from '../Middleware/isAdmin.js'
import { checkPermission } from '../Middleware/checkPermission.js'
import { createCollaboration, getAllCollaboration, getOneCollaboration, updateCollaboration } from '../Controllers/collaborationCn.js'

const collaborationRouter = express.Router()

collaborationRouter.route('/').get(isAdmin, checkPermission('collaboration'), getAllCollaboration)
    .post(createCollaboration)

collaborationRouter.route('/:id').get(isAdmin, checkPermission('collaboration'), getOneCollaboration)
    .patch(isAdmin, checkPermission("collaboration"), updateCollaboration)

