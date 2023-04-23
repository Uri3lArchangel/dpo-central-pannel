import { NextApiRequest, NextApiResponse } from "next";
import { changePassword } from "../../../source/Backend/middlewares/Authentication/changePassword";
import { returnStructType } from "../../../source/Backend/Assertions/HandleProfileChange";

const responseStruct:returnStructType={
msg:"",
type:'error',
time:0
}

export default async function handler(req:NextApiRequest,res:NextApiResponse){
try {
    const {passwordData,confirmPasswordData}=req.body
    if(passwordData != confirmPasswordData){
        responseStruct.msg='error passwords do not match'
        responseStruct.time=5
        responseStruct.type="info"
        res.status(400).json({'message':responseStruct})
    }
    await changePassword(req)
    responseStruct.msg='Updated'
    responseStruct.time=5
    responseStruct.type="success"
    res.status(201).json({'message':responseStruct})
} catch (error) {
    console.error(error)
    responseStruct.msg='A server error occured'
    responseStruct.time=5
    responseStruct.type="error"
    res.status(500).json({'message':responseStruct})
}
}