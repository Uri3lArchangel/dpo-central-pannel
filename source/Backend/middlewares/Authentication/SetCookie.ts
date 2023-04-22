import {  NextApiResponse } from "next";
import cookie from 'cookie'


export const setCookie= (token:string,res:NextApiResponse)=>{
    
    res.setHeader("Set-Cookie",cookie.serialize("session",token,{
        httpOnly:true,
        secure:true,
        maxAge:60 * 60,
        sameSite:"strict",
      path:'/',
      
    }))

};
export const clearSessionCookie = (res:NextApiResponse)=>{
  res.setHeader("Set-Cookie",cookie.serialize("session","",{
    httpOnly:true,
    secure:true,
    expires:new Date(0),
    sameSite:'strict',
    path:'/'
  }))
  
}