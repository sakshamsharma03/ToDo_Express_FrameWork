import mongoose from "mongoose";

const schema=new mongoose.Schema({
    title:{
        type:String,
        unique:true,
    },
    description:{
        type:String,
        require:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        require:true,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
})

export const task=mongoose.model("Task",schema);