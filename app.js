import express from "express";
import userRouter from  "./routes/user.js";
import taskRouter from  "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app= express();

config({
    path:"./data/config.env",
})

//using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    orgin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
}))

//using routes
app.use("/users",userRouter);
app.use("/task",taskRouter);


app.get("/",(req,res)=>
{   
 res.send("It's Working");
})
//using errorMiddleware
app.use(errorMiddleware);

