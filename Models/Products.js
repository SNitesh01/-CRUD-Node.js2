import mongoose from "mongoose";

const produstSchema = new mongoose.Schema({
    name:{type:String, minlength:3, maxlength:200, required:true},
    price:{type:Number, min:0.01, maxlength:10000000000, required:true},
    description:{type:String, minlength:3, maxlength:500},
    Images:{type:Array},
    inStock:{type:Boolean},
    departmnent:{type:String, minlength:3, maxlength:30}
});

export default new mongoose.model("Products", produstSchema);
