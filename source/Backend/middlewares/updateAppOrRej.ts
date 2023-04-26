import { ObjectId } from "mongodb";
import Investor from "../DB/investorModel";
import { connectMongoInvestor } from "../DB/connectInvestorsMongo";
import Tx from "../DB/investorTxData";
import { fetchApprovedRequests } from "./fetchKycRequests";
import { dacertSign } from "../Utils/dacertGenerstor";

export const update = async (
  id: ObjectId,
  option: "Approvals" | "Rejections",
  group: String
) => {
  let count;
  let o = await Investor.findById(id).exec();
  if (group === "Board" && o.ApprovedByBoard) {
    return new Error("Already voted");
  } else {
    if (option === "Approvals") {
      count = o.Approvals;
      if (count < 2) {
        if (count === 1) {
          console.log("updating approval...");
          let a = await Investor.findByIdAndUpdate(id, {
            ApprovedByBoard: true,
            Status: "approved",
            $inc: { Approvals: 1 },
          }).exec();
          let approved = await fetchApprovedRequests();
          if (approved.length >= 5) {
            if (approved.length % 5 === 0) {
              let OnchainArray=[]
              for(let i=0;i<5;i++){
                OnchainArray.push(approved[i].Wallet)
              }
              let onchain = approved.splice(-5);
              await Tx.deleteMany({});
              let Dacert = dacertSign(onchain);
              await Tx.create({ Addresses: OnchainArray, Dacert: Dacert });
            }
          }
        } else {
          console.log("updating approval...");
          let s = await Investor.findByIdAndUpdate(id, {
            ApprovedByBoard: true,
            $inc: { Approvals: 1 },
          }).exec();
        }
        console.log("updated approval...");
      } else {
        return new Error("The two votes have been completed");
      }
    } else {
      count = o.Rejections;
      if (count < 2) {
        if (count === 1) {
          console.log("updating rejection...");
          await Investor.findByIdAndUpdate(id, {
            Status: "rejected",
            ApprovedByBoard: true,
            $inc: { Rejections: 1 },
          }).exec();
        } else {
          console.log("updating rejection...");
          await Investor.findByIdAndUpdate(id, {
            ApprovedByBoard: true,
            $inc: { Rejections: 1 },
          }).exec();
        }
        console.log("updated rejection...");
      } else {
        return new Error("The two votes have been completed");
      }
    }
  }
};
