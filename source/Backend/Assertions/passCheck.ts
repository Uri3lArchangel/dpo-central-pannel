import axios from "axios"

export const passwordCheck=async(data:{password:string})=>{
let res = await axios.post('/api/utils/passwordCheck',data)
if(res.data.message == 'success'){
    return undefined
}else{
    return res.data.message
}
} 