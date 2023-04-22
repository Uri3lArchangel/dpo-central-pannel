import { connectMongo } from "./connectMongo";
import Member from "./membersModel";

export const updateDB = async (email: string, updateParams: Object) => {
  try {
    await connectMongo();
    console.log("searching and updating");
    let r = await Member.updateOne({ Email: email }, updateParams, {
      upsert: false,
    });
    
  } catch (err) {
    console.error(err);
  }
};
