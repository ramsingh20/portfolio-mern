import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import express from 'express';
import authRouter from './router/auth-router.js';
import contactRoute  from "./router/contact-router.js";
import serviceRoute  from "./router/service-router.js";
import adminRoute  from "./router/admin-router.js";
import adminContactRoute  from "./router/adminContact-router.js";
import adminDeleteUserRoute from "./router/admin-deleteuser-router.js";
import connectDb from "./utils/db.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";

const app = express();

app.use(cors());
app.use(express.json())
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// define admin route
app.use("/api/admin", adminRoute);
app.use("/api/admin", adminContactRoute);
app.use("/api/admin", adminDeleteUserRoute);


app.use(errorMiddleware)

// app.get('/', (req, res) => {
//     res.status(200).send("Welcome sucessfully ")
// })

// app.get('/reg', (req, res) => {
//     res
//         .status(200)
//         .send("Welcome sucessfully Register page ")
// })

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});

const corsOptions = {
  origin: "http://localhost:5175",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
// to get the json data in express app.
app.use(express.json());