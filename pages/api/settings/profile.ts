import { NextApiRequest, NextApiResponse } from "next";
import { assertUnameAndEmail, returnStructType } from "../../../source/Backend/Assertions/HandleProfileChange";
import { NoticeType } from "antd/es/message/interface";
import { updateDB } from "../../../source/Backend/DB/updateDB";
import { jwtDecode, jwtSign } from "../../../source/Backend/Utils/Jwt";
import { clearSessionCookie, setCookie } from "../../../source/Backend/middlewares/Authentication/SetCookie";

let updateObject: { [key: string]: string; }={}

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    updateObject={}
    const {email,uname,pass}=req.body
    console.log(pass)
    let defaultEmail:string | undefined
    let group:string | undefined
    let role:string|undefined
    if(req.cookies.session){
        let a= jwtDecode(req.cookies.session)
        defaultEmail = a.email
        group = a.group
        role=a.role
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
   await updateDB(defaultEmail,pass,updateObject)
    }else{
        res.end("Error")
    }
    const successResponse:returnStructType = {
        msg:'Updated Successfully',
        type:'success',
        time:5
    }
    if(req.cookies.session){
        if(role && group){
    let token = jwtSign(email?email:defaultEmail,role,group)!
    clearSessionCookie(res)
    setCookie(token,res)
        }
    }
    res.status(201).json({'message':successResponse})

}