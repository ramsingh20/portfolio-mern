import express from 'express';
import { home, login, register, user } from '../controllers/auth-controler.js';
import { loginSchema, signupSchema } from "../validators/auth-validator.js";
import { validate } from "../middlewares/validate-middleware.js";
import { authMiddleware } from '../middlewares/auth-middleware.js';

const router = express.Router()
// const register = require('../controllers/auth-controler')


// router.route('/').get((req, res) => {
//     res.status(200).send("Welcome sucessfully using router ")
// })
router.route('/').get(home)
// router.route("/").get(authControllers.home);

// router.route('/reg').get((req, res) => {
//     res.status(200).send("Welcome sucessfully using router and this register page")
// })
router.route('/register').post( validate(signupSchema), register)
router.route('/login').post( validate(loginSchema),login)

router.route('/user').get(authMiddleware, user)

export default router
