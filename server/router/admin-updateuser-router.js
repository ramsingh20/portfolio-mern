import express from 'express';
import { authMiddleware } from '../middlewares/auth-middleware.js';
import { adminMiddleware } from '../middlewares/admin-middleware.js';
import { updateUserById } from '../controllers/admin-updateUserById.js';
const router = express.Router()

router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, updateUserById);

export default router;
