import Mongoose from "mongoose";
const URI = process.env.MONGOURI!
export const connectMongo = async() => {console.log('connecting...');Mongoose.connect(URI);console.log('connected')}