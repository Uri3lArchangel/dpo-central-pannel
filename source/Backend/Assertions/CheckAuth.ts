import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../DB/connectMongo";
import Member from "../DB/membersModel";
import { generatePassword } from "../Utils/PasswordHashingFunction";

let responseStruct: {
  email: string | null;
  role: string | null;
  group: string | null;
  success: boolean;
} = {
  email: "",
  role: "",
  group: "",
  success: false,
};
interface a {
  email: string;
  password: string;
}
export const isAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password }: a = req.body;
  let pass = generatePassword(password, password);
  await connectMongo();
  console.log("finding");
  let member = await Member.findOne({ Email: email, Password: pass }).exec();

  if (member) {
    console.log(member);
    responseStruct.email = member.Email;
    responseStruct.role = member.Role;
    responseStruct.group = member.Group;
    responseStruct.success = true;
    console.log("found");

    return responseStruct;
  }
  responseStruct.email = null;
  responseStruct.role = null;
  responseStruct.group = null;
  responseStruct.success = false;
  console.log("not found");

  return responseStruct;
};
