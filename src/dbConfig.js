import mongoose from "mongoose";
import config from "./config.js";


mongoose.set('strictQuery', true);

try {
    
    await mongoose.connect(config.mongo_uri)

} catch (error) {
    console.log(error)
}