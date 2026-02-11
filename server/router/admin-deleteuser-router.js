import express from 'express';
import { authMiddleware } from '../middlewares/auth-middleware.js';
import { adminMiddleware } from '../middlewares/admin-middleware.js';
import { deleteUserById } from '../controllers/admin-deleteUserById-controller.js';
const router = express.Router()

router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, deleteUserById);

export default router;
