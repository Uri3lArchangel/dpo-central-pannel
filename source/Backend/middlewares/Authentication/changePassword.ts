import { NextApiRequest } from "next";
import { jwtDecode } from "../../Utils/Jwt";
import { updateDB } from "../../DB/updateDB";
import { generatePassword } from "../../Utils/PasswordHashingFunction";


export const changePassword = async(req:NextApiRequest)=>{
const {passwordData,confirmPasswordData}=req.body

let defaultEmail:string=' '
if(req.cookies.session){
    defaultEmail = jwtDecode(req.cookies.session).email
}
let newPassword = generatePassword(passwordData,passwordData)
let update={
    Password:newPassword
}
await updateDB(defaultEmail,update)

}