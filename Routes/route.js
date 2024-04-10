import express from "express";
import Cors from "cors";
import userRouter from "./userRoute.js";
import { protect } from "../Middleware/auth.js";
import uploadRouter from "./uploadRoute.js";
import mailRouter from "./mailRoute.js";
import CategoryRouter from "./CategoryRoute.js";
// import { setupChangeStream } from '../Middleware/ChangeStream.js';
import messageRouter from "./messageRoute.js";

var app = express();
app.use(Cors());
app.use(express.json());
app.get("/", async (req, res) => {
    res.send("Welcome to the home page");
});
// app.use('/user', setupChangeStream, userRouter);
app.use('/user', userRouter);
app.use('/upload', protect, uploadRouter);
app.use('/sendmain', protect, mailRouter);
app.use('/message', protect, messageRouter);
app.use('/category', protect, CategoryRouter);
export default app;