import { NextApiRequest, NextApiResponse } from "next";
import { clearSessionCookie } from "../../source/Backend/middlewares/Authentication/SetCookie";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    clearSessionCookie(res)
    res.status(200).json({'message':'success'})

}