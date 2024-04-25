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
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
})

export const task=mongoose.model("Task",schema);