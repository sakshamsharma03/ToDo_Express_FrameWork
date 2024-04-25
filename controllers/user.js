
import {user} from "../models/user.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookie } from "../utils/features.js";
export const getAllusers=async (req,res)=>
{
    
 }

export const login = async (req,res,next)=>
{
    const {email,password}=req.body;
    const User=await user.findOne({email}).select("+password");
    if(!User) return res.status(404).json({
        success:false,message:"Invalid Email or Password"
    })
   const isMatch= await bcrypt.compare(password,User.password);
   if(!isMatch) return res.status(404).json({
    success:false,message:"Invalid Email or Password"
});
   setCookie(User,res,`Welcome Back,${User.name}`,200)
}

 export const register=async (req,res)=>
 {
     const {name ,email,password}=req.body;
     let User=await user.findOne({email});
     if(User) return res.status(404).json({
        success:false,message:"User Already Exists"
     })
     
     const hashedPass=await bcrypt.hash(password,10);
     User=await user.create({
        name,email,password:hashedPass
     })
     setCookie(User,res,"Registered Successfully",201);

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
    res.status(200).cookie("token","",
{
    expires:new Date(Date.now())}).json({
        success:true,
        User:req.user,
    });

 }

 