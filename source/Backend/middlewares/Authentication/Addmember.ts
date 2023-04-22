import { NextApiRequest, NextApiResponse } from "next";
import { generatePassword } from "../../Utils/PasswordHashingFunction";
import { connectMongo } from "../../DB/connectMongo";
import Member from "../../DB/membersModel";
interface p {
  Email: string;
  Role: string;
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
    const { Email, Role }: p = req.body;
    if (Email && Role) {
      const pass = generatePassword(Email, Role);

      let newData = {
        Image: "",
        Email: Email,
        Password: pass,
        Role: Role,
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
