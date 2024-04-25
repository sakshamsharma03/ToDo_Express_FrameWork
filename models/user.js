import mongoose from "mongoose";

const schema=new mongoose.Schema({
    
    name:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        select:false
    },
    createAt:{
        type:Date,
        require:true,
        default:Date.now,
    },
})

export const user=mongoose.model("User",schema);