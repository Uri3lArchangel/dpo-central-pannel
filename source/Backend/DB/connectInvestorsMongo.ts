import Mongoose from "mongoose";
const URI = process.env.MONGOURI_INVESTORS!;
export const connectMongoInvestor = async () => {
   await Mongoose.disconnect()
  console.log("connecting to investors db...");
 await Mongoose.connect(URI);
  console.log("connected to investor db");
};
