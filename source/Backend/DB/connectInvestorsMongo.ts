import Mongoose from "mongoose";
const URI = process.env.MONGOURI_INVESTORS!
export const connectMongoInvestor = async() => {console.log('connecting to investors db...');Mongoose.connect(URI);console.log('connected to investor db')}