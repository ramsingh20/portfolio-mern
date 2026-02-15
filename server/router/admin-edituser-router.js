import express from 'express';
import { authMiddleware } from '../middlewares/auth-middleware.js';
import { adminMiddleware } from '../middlewares/admin-middleware.js';
import { getAllUserById } from '../controllers/admin-editUserById-controller.js';
const router = express.Router()

router.route('/users/:id').get(authMiddleware, adminMiddleware, getAllUserById);

export default router;
