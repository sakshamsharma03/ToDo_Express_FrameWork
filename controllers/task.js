import {task} from "../models/task.js";

export const newtask=async (req,res)=>
{
const {title ,description}=req.body;
await task.create({
    title,description,User:req.user,
});
res.status(201).json({
    success:true,message:"Task added succssfully",
})
};
