export const sliceCookie = (cookie:string)=>{
   return cookie.slice((cookie.indexOf('='))+1)
}