export const sliceCookie = (cookie:string)=>{
   if(cookie){
   return cookie.slice((cookie.indexOf('='))+1)
   }else{
      return null
   }
}