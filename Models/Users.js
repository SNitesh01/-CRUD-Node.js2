import mongoose from "mongoose";

const userSchma =  new mongoose.Schema({
    name:{type:String, minlength:3, maxlength:200, required:true},
    email:{type:String, minlength:3, maxlength:20, required:true},
    password:{type:String, minlength:3, maxlength:20, },
    isVerified:{type:Boolean}



});



export default new mongoose.model('userCol', userSchma);