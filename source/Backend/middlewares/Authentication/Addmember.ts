import { NextApiRequest, NextApiResponse } from "next";
import { generatePassword } from "../../Utils/PasswordHashingFunction";
import { connectMongo } from "../../DB/connectMongo";
import Member from "../../DB/membersModel";
interface p {
  Email: string;
  Role: string;
  Password:string
}
export default async function AddMember(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    if(!req.body){
      res.statusCode = 400
      res.end('Error')
      return
    }
    const { Email,Password ,Role }: p = req.body;
    if (Password && Email && Role) {
      const pass = generatePassword(Password, Password);

      let newData = {
        Image: "",
        Email: Email,
        Password: pass,
        Role: Role,
        Group:Role === 'TA' || Role === 'KYC'?'kyc':'Board',
        Username:" "
      };
      await connectMongo();
      console.log("creating....");
      await Member.create(newData);
      console.log("created");
      res.status(201).json({ message: "Member Added" });
    } else {
        res.status(500).json({ message: "invalid Data" });

    }
  } catch (err) {
    console.log("error adding member")
    res.status(500).json({ message: err });
  }
}
