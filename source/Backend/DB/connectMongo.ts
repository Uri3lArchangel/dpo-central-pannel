import Mongoose from "mongoose";
const URI = process.env.MONGOURI!;
export const connectMongo = async () => {
    await Mongoose.disconnect()
  console.log("connecting...");
  await Mongoose.connect(URI);
  console.log("connected");
};
