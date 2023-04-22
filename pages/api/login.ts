// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from '../../source/Backend/middlewares/Authentication/SetCookie'
import { isAuth } from '../../source/Backend/Assertions/CheckAuth'
import { jwtSign } from '../../source/Backend/Utils/Jwt'

type Data = {
  name: string
}

export default async function handler(req:NextApiRequest,res:NextApiResponse){
   const {email} =req.body
   let a = await isAuth(req,res)
    if(a.success){
        let token  = jwtSign(a.email,a.role)
        if(token){
        setCookie(token,res)
        }else{
            res.status(417).json({message:'error initializing cookie'})
        }
        res.status(200).json({success:true,email:email})
    }else{
        res.status(200).json({success:false})

    }
  

}
