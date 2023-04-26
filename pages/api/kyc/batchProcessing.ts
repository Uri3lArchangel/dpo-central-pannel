// import { NextApiRequest, NextApiResponse } from "next";
// import { fetchApprovedRequests } from "../../../source/Backend/middlewares/fetchKycRequests";
// import { connectMongoInvestor } from "../../../source/Backend/DB/connectInvestorsMongo";
// import { dacertSign } from "../../../source/Backend/Utils/dacertGenerstor";

// let onChainData: { [key: string]: string } = {};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     onChainData = {};
//     await connectMongoInvestor();
//     let approved = await fetchApprovedRequests();
//     if (approved.length % 5 === 0) {
//       let nextFive = approved.splice(-5);
//       for (let i = 0; i < 5; i++) {
//         onChainData[`address${i}`] = nextFive[i].Wallet;
//       }
//       //   console.log(onChainData);
//      let DACERT = dacertSign(onChainData);
     

//       res.status(200).json({ msessage: "success" });
//     } else {
//       res.status(200).json({ message: "not yet" });
//     }
//   } catch (err: any) {
//     console.error(err);
//     res.status(500).json({ msessage: err.message });
//   }
// }
