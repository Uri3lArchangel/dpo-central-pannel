import axios from "axios"

export const passwordCheck=async(data:{password:string},url:string,enviroment:string)=>{
let res = await axios.post(enviroment === 'development'?'/api/utils/passwordCheck':`${url}/api/utils/passwordCheck`,data)
if(res.data.message == 'success'){
    return undefined
}else{
    return res.data.message
}
} 