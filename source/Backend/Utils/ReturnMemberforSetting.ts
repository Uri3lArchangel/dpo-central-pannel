import { connectMongo } from "../DB/connectMongo";
import Member from "../DB/membersModel";
export interface a {
  image: string;
  email: string;
  role: string;
  password: string;
  username: string;
  success: boolean;
}

export let responseStruct: a = {
  image: "",
  email: "",
  password: "",
  role: "",
  username: "",
  success: false,
};
export const FetchMemberData = async (email: string | undefined) => {
    try{
  if (email) {
    await connectMongo();
    console.log("finding");
    let member = await Member.findOne({ Email: email }).exec();
    responseStruct.image = member.Image;
    responseStruct.email = member.Email;
    responseStruct.password = member.Password;
    responseStruct.role = member.Role;
    responseStruct.username = member.Username;
    responseStruct.success = true;
    if (responseStruct.email === email) {
      return responseStruct;
    }

  }
}catch(err){
    console.error(err)
    return responseStruct
}
};
