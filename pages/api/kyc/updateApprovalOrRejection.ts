import { NextApiRequest, NextApiResponse } from "next";
import { update } from "../../../source/Backend/middlewares/updateAppOrRej";
import { jwtDecode } from "../../../source/Backend/Utils/Jwt";
import { connectMongoInvestor } from "../../../source/Backend/DB/connectInvestorsMongo";
import Tx from "../../../source/Backend/DB/investorTxData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongoInvestor();
    const b = await Tx.find({})
    if(b.length > 0){
      res.end('Error')
    }
    const { id, option } = req.body;
    const cookie = req.cookies.session
    if(cookie){
    const group = jwtDecode(cookie).group
    await update(id, option,group);

    }

    res.status(200).json({'message':'success'});
  } catch (err:any) {
    res.status(500).json({'message':err.message})
  }
}
