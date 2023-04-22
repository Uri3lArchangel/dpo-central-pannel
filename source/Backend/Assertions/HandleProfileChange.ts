import { NoticeType } from "antd/es/message/interface";
import { checkUname } from "./CheckifUnameExists";

const returnStruct: returnStructType = {
  msg: "",
  type: "error",
  time: 5,
};
export interface returnStructType {
  msg: string;
  type: NoticeType;
  time: number;
}

export const assertUnameAndEmail = async(email?: string,uname?:string) => {
  if(!email && !uname){
    return undefined
  }
  if (email && !uname) {
    if (email.split("@").length < 2) {
      returnStruct.type = "error";
      returnStruct.msg = "invalid email ex: aaa@yahoo.com or bbb@gmail.com";
      return returnStruct;
    } else if (email.split("@")[1].split(".").length < 2) {
      returnStruct.type = "error";
      returnStruct.msg = "invalid email ex: aaa@yahoo.com or bbb@gmail.com";
      return returnStruct;
    } else if (email.includes(" ")) {
      returnStruct.type = "error";
      returnStruct.msg =
        "invalid email no spaces allowed ex: aaa@yahoo.com or bbb@gmail.com";
      return returnStruct;
    }
    return undefined
  }
  if(uname && !email){
   let res = await checkUname(uname)
   return res
  }
  if(email && uname){
    if (email.split("@").length < 2) {
      returnStruct.type = "error";
      returnStruct.msg = "invalid email ex: aaa@yahoo.com or bbb@gmail.com";
      return returnStruct;
    } else if (email.split("@")[1].split(".").length < 2) {
      returnStruct.type = "error";
      returnStruct.msg = "invalid email ex: aaa@yahoo.com or bbb@gmail.com";
      return returnStruct;
    } else if (email.includes(" ")) {
      returnStruct.type = "error";
      returnStruct.msg =
        "invalid email no spaces allowed ex: aaa@yahoo.com or bbb@gmail.com";
      return returnStruct;
    }
    let res = await checkUname(uname)
    return res
  }
};
