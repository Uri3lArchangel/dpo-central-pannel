import { NoticeType } from "antd/es/message/interface";
import { connectMongo } from "../DB/connectMongo"
import Member from "../DB/membersModel"

const returnStruct: returnStructType = {
    msg: "",
    type: "error",
    time: 5,
  };
  interface returnStructType {
    msg: string;
    type: NoticeType;
    time: number;
  }
  

export const checkUname = async(uname:string)=>{
await connectMongo()
console.log('checking username...')
let result = await Member.find({Username:uname})
console.log('done')
if(result.length > 0){
    returnStruct.msg = 'Username Already Exists'
    returnStruct.time=5
    returnStruct.type="error"
    return returnStruct
}
return undefined

}
