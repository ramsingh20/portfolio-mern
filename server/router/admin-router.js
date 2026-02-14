import express from 'express';
import { addService, getAllUsers } from '../controllers/admin-controller.js';
import { authMiddleware } from '../middlewares/auth-middleware.js';
import { adminMiddleware } from '../middlewares/admin-middleware.js';
const router = express.Router()
// const adminRole 
// Admin Projects (Services) Add Route
router.route("/services/add").post(authMiddleware, adminMiddleware, addService);

router.route('/users').get(authMiddleware, adminMiddleware, getAllUsers);

export default router;
