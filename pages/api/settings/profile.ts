import { NextApiRequest, NextApiResponse } from "next";
import { assertUnameAndEmail, returnStructType } from "../../../source/Backend/Assertions/HandleProfileChange";
import { NoticeType } from "antd/es/message/interface";
import { updateDB } from "../../../source/Backend/DB/updateDB";
import { jwtDecode, jwtSign } from "../../../source/Backend/Utils/Jwt";
import { setCookie } from "../../../source/Backend/middlewares/Authentication/SetCookie";

let updateObject: { [key: string]: string; }={}

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    updateObject={}
    const {email,uname}=req.body
    let defaultEmail:string | undefined
    if(req.cookies.session){
        defaultEmail = jwtDecode(req.cookies.session).email
    }
    let r = await assertUnameAndEmail(email,uname)
    if(r){
        res.status(200).json({'message':r})
       
    }
    if(email){
       updateObject["Email"] = email
    }
    if(uname){
        updateObject["Username"] = uname
    }
    if(defaultEmail){
   await updateDB(defaultEmail,updateObject)
    }else{
        res.end("Error")
    }
    const successResponse:returnStructType = {
        msg:'Updated Successfully',
        type:'success',
        time:5
    }
    if(req.cookies.session){
    let token = jwtSign(email,jwtDecode(req.cookies.session).role)!
    setCookie(token,res)
    }
    res.status(201).json({'message':successResponse})

}