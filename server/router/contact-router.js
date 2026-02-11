import express from "express";
const router = express.Router();

import { contactForm } from "../controllers/contact-controller.js";
// const contactForm = require("../controllers/contact-controller");

router.route("/contact").post(contactForm);

export default router ;