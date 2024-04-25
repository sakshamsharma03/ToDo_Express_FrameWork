import ErrorHandler from "../middlewares/error.js";
import {task} from "../models/task.js";
import { user } from "../models/user.js";

export const newtask=async (req,res)=>
{
try {
    const {title ,description}=req.body;
await task.create({
    title,description,User:req.user,
});
res.status(201).json({
    success:true,message:"Task added succssfully",
})
} catch (error) {
    next(error);
}
};

export const getmytask=async(req,res,next)=>
{

      try {
        const Userid=req.user._id;
        //console.log(Userid);
       const Task= await task.find ({User:Userid});
       res.status(200).json({
         success:true,
         Task,
       })
      } catch (error) {
        next(error);
      }
}
export const deleteTask=async(req,res,next)=>
{
    try {
        const {id}=req.params;
    const Task=await task.findById(id);
    if(!Task)
    {
     return   
    }
    await Task.deleteOne();
      res.status(200).json({
        success:true,
        message:"Task Deleted",
      })
    } catch (error) {
        next(error);
    }
}
export const UpdateTask=async(req,res,next)=>
{
      try {
        const {id}=req.params;
      const Task=await task.findById(id);
      if(!Task)
    {
        return next(new ErrorHandler("Invalid ID",404));
    }
      Task.isCompleted=!Task.isCompleted;
      await Task.save();
       
      res.status(200).json({
        success:true,
        message:"Task Updated",
      })
      } catch (error) {
        next(error);
      }
}