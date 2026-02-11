// Here I will create all router related to adminContact
// this is admin contact router which will be used to get all the contacts from the database and will be used by the admin to view all the contacts and will be used by the admin to delete the contacts if needed. This router will be used in the server.js file and will be used in the admin dashboard to view all the contacts. This router will be protected by the auth middleware and admin middleware to ensure that only authenticated users with admin role can access this route.

import express from 'express';
import { deleteContactById, getAllContacts } from '../controllers/adminContact-controller.js';
import { authMiddleware } from '../middlewares/auth-middleware.js';
import { adminMiddleware } from '../middlewares/admin-middleware.js';
const router = express.Router()

router.route('/contacts').get(authMiddleware, adminMiddleware, getAllContacts)
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, deleteContactById)

// router.route('/').get((req, res) => {
//     res.status(200).send("")
// })

export default router;