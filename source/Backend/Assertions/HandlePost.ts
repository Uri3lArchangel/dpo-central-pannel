import { NoticeType } from "antd/es/message/interface";
import axios from "axios";

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

export const handleLoginCreds = async (
  email: string | undefined,
  pass: string | undefined
) => {
  if (email && pass) {
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
  }else{
    
    returnStruct.msg='Please fill in all fields'
    returnStruct.type='error'
    return returnStruct
  }
};
