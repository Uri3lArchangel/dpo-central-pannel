import jwt from 'jsonwebtoken'

let KEY = process.env.TOKENKEY!

export const jwtSign = (email:string | null,role:string | null)=>{
    console.log(email)

if(email && role){
let SignedJWT= jwt.sign({
    email:email,
    role:role,
},KEY)

return SignedJWT
}else{
    return null
}
}

export const jwtDecode = (jwtStringCookie:string)=>{
    let index = (jwtStringCookie).indexOf('=')
    let jwtString = jwtStringCookie.slice(index+1)
   let json = jwt.decode(jwtString) as {[key:string]:string}
   let data = {
    email:json.email,
    role:json.role
   }
   return data
}