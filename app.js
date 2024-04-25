import express from "express";
import userRouter from  "./routes/user.js";
import taskRouter from  "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";

export const app= express();

config({
    path:"./data/config.env",
})

//using Middlewares
app.use(express.json());
app.use(cookieParser());

//using routes
app.use("/users",userRouter);
app.use("/task",taskRouter);


app.get("/",(req,res)=>
{   
 res.send("Chlra hai");
})


