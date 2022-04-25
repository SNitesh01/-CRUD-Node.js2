import mongoose from "mongoose";

async function connectDb (){
   try {
      let result = await mongoose.connect(process.env.MONGODB_URI);
      console.log("connected db") 
   } catch (error) {
       console.log(error.message)
   }
}


export default connectDb;