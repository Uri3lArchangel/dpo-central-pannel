import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../source/Backend/DB/connectMongo";
import Member from "../../../source/Backend/DB/membersModel";
import { generatePassword } from "../../../source/Backend/Utils/PasswordHashingFunction";
import { jwtDecode } from "../../../source/Backend/Utils/Jwt";

const responseStruct={
    msg:'',
    type:'',
    time:0
    }

export default async function handler(req:NextApiRequest,res:NextApiResponse){
const {password} = req.body
const session = req.cookies.session
let email:string
if(session){
 email= jwtDecode(session).email
}else{
    res.end('Error')
}
const pass = generatePassword(password,password)

await connectMongo()
console.log('checking....')
let r = await Member.findOne({Email:email!,Password:pass})

if(r){
    res.status(200).json({'message':'success'})
}else{
    responseStruct.msg = 'Invalid password'
    responseStruct.time = 5
    responseStruct.type="error"
    res.status(200).json({'message':responseStruct})
}
}