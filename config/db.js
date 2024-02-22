import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path:'config/.env.local'});

console.log(process.env.MONGO_URI)
 const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("MongoDB connected")
    }
    catch(err){
        console.error(err)
        process.exit(1)
    }
 }

 export default connectDB