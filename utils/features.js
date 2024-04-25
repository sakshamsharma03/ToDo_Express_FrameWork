import jwt from "jsonwebtoken";

export const setCookie=(User,res,message,statusCode=200)=>
{
     const token=jwt.sign({_id:User._id},process.env.JWT_SECRET);
     res.status(statusCode).cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000,
     }).json({success:true,message});
     
}