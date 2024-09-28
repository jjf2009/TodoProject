/* 
Todo{
title:string;
description:string;
completed:boolen;


} */
import mongoose from "mongoose";
mongoose.connect("mongodblink")
const todoSchema =mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
    
})
const todo= mongoose.model('todo', todoSchema);
module.exports={
    todo
}