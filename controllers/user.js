
import {user} from "../models/user.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookie } from "../utils/features.js";
import { trusted } from "mongoose";
export const getAllusers=async (req,res)=>
{
    
 }

export const login = async (req,res,next)=>
{
   try {
    const {email,password}=req.body;
    const User=await user.findOne({email}).select("+password");
    if(!User) return next(new ErrorHandler("Invalid Email or Password",400))
    
   const isMatch= await bcrypt.compare(password,User.password);
   if(!isMatch) next(new ErrorHandler("Invalid Email or Password",400))
   setCookie(User,res,`Welcome Back,${User.name}`,200)
   } catch (error) {
    next(error);
   }
}

 export const register=async (req,res)=>
 {
     try {
        const {name ,email,password}=req.body;
     let User=await user.findOne({email});
     if(User) return next(new ErrorHandler("User Already Exists",400))
    
     
     const hashedPass=await bcrypt.hash(password,10);
     User=await user.create({
        name,email,password:hashedPass
     })
     setCookie(User,res,"Registered Successfully",201);
     } catch (error) {
        next(error);
     }

 }



 export const getmyProfile=(req,res)=>  
 {
     
     res.status(200).json({
        success:true,
        User:req.user,
     })
 }

 export const logout=(req,res)=>
 {
    res.status(200).cookie("token","",{
   expires:new Date(Date.now()),
   sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
   secure:process.env.NODE_ENV==="Development"?false:true,
     }).json({
        success:true,
        User:req.user,
    });

 }

 