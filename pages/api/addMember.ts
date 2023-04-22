import { NextApiRequest, NextApiResponse } from "next";
import AddMember from "../../source/Backend/middlewares/Authentication/Addmember";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    let a = await AddMember(req, res);

}
