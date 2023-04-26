import axios from "axios"
import { returnStructType } from "./HandleProfileChange"

export const passwordCheck=async(data:{password:string},url:string,enviroment:string)=>{
let res = await axios.post(enviroment === 'development'?'/api/utils/passwordCheck':`${url}/api/utils/passwordCheck`,data)
if(res.data.message == 'success'){
    let pass:string = res.data.Password
    return pass
}else{
    let struct:returnStructType = res.data.message
    return struct
}
} 