import React, { useEffect, useRef, useState } from "react";
import TabsChildrenLayout from "../../layouts/TabsChildrenLayout";
import FileUpload from "../core/utils/FileUpload";
import { Button, message } from "antd";
import Message from "../core/utils/message";
import Form from "../Members/Form";
import { CookieMemberProps } from "../../../../pages/settings";
// import { assertUnameAndEmail } from "../../../Backend/Assertions/HandleProfileChange";
import axios from "axios";
import { NoticeType } from "antd/es/message/interface";
import { useRouter } from "next/router";
import { passwordCheck } from "../../../Backend/Assertions/passCheck";
import { returnStructType } from "../../../Backend/Assertions/HandleProfileChange";
import { jwtSign } from "../../../Backend/Utils/Jwt";

function ProfileChildren({MemberObject,url,enviroment,cookie}:CookieMemberProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const [passwordPromptDisplay, setPromptDisplay] = useState(false);
  const router = useRouter()
  const passRef = useRef<HTMLInputElement>(null)
  const messageHandle = (msg: string, type: NoticeType, time: number) => {
    messageApi.open({
      key: "3",
      type: type,
      content: msg,
      duration: time,
    });
  };
  const triggerPromptOpen = (e:React.MouseEvent) => {
    e.stopPropagation()

    setPromptDisplay(true);
  };
  const triggerPromptClose = (e:React.MouseEvent) => {
    e.stopPropagation()
    setPromptDisplay(false);
  };
  const UsernameRef=useRef<HTMLInputElement>(null)
  const EmailRef=useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(!UsernameRef.current?.value || !EmailRef.current?.value){
    let save_btn = document.getElementById('saveChangesButton') as HTMLButtonElement
      let cancel_btn = document.getElementById('cancelChangesButton') as HTMLButtonElement
    
      save_btn.disabled=true;
      cancel_btn.disabled=true;}

  })

  const updateChange=()=>{
    let save_btn = document.getElementById('saveChangesButton') as HTMLButtonElement
    let cancel_btn = document.getElementById('cancelChangesButton') as HTMLButtonElement
  
    let EmailValue = EmailRef.current?.value
    let UnameValue = UsernameRef.current?.value
    
    
    if(EmailValue != "" || UnameValue != ""){
      save_btn.disabled = false
      cancel_btn.disabled = false

    }else{
      save_btn.disabled = true
      cancel_btn.disabled = true
    }
  }
  const cancelChanges=()=>{
    (document.getElementById('uname') as HTMLInputElement).value = "";
    (document.getElementById('email') as HTMLInputElement).value = "";

    let save_btn = document.getElementById('saveChangesButton') as HTMLButtonElement
    let cancel_btn = document.getElementById('cancelChangesButton') as HTMLButtonElement 
      save_btn.disabled = true
      cancel_btn.disabled = true
  }

  const submitChanges = async(e:React.MouseEvent)=>{
    messageApi.destroy()
    messageApi.loading('Updating',10000)
    let result:returnStructType|string
   const password = passRef.current?.value
   if(password){
    let data = {
      password
    }
   result = await passwordCheck(data,url!,enviroment!)
   if(result){
    if(typeof result != 'string'){
      messageApi.destroy()
   messageHandle(result.msg,result.type,result.time)
   setTimeout(()=>{messageApi.destroy("3")},5000)
   return}
   

   }
   }else{
    messageApi.destroy()
    messageHandle('Please Input Your Pasword',"error",5)
    return
   }
   messageApi.destroy()
    messageHandle('Saving...','loading',10000)
    let EmailValue = EmailRef.current?.value!
    let UnameValue = UsernameRef.current?.value!
    
    const data = {
     email: EmailValue,
     uname:UnameValue,
     pass:typeof result === 'string'? result:''
    }
   let res= await axios.post(enviroment === 'development'?'/api/settings/profile':`${url}/api/settings/profile`,data)
    triggerPromptClose(e)
    let r:{msg:string,type:NoticeType,time:number} = res.data.message
    messageApi.destroy()
    messageHandle(r.msg,r.type,r.time)
    cancelChanges()
    if(r.type == "success"){
      router.reload()
    }
  }

  return (
    <>
    {contextHolder}
      {passwordPromptDisplay ? 
      <Form>
        <label htmlFor="pass">Enter Password to confirm action </label>
        <input type="password" required name="" ref={passRef} id="pass" />
        <Button onClick={submitChanges} >Save</Button>
        <Button onClick={triggerPromptClose} danger>Cancel</Button>
      </Form> : <></>}
      <TabsChildrenLayout closePassPrompt={triggerPromptClose}>
        <p>Current Profile Picture</p>
        <FileUpload />
        <label htmlFor="">Upload Profile Picture</label>
        <p>Current Username:{MemberObject?.username}</p>
        <label htmlFor="uname" className="left">
          Change User name:
        </label>
        <input id="uname" onChange={updateChange} type="text" name=""  ref={UsernameRef} />
        <p>Current e-mail: {MemberObject?.email}</p>
        <label htmlFor="" className="left">
          Change E-mail Address:
        </label>
        <input id="email" onChange={updateChange} type="email" ref={EmailRef}/>
        <div className="rflexable">
            <Button id="saveChangesButton" onClick={triggerPromptOpen}  >Save</Button>
          <Button danger id="cancelChangesButton" onClick={cancelChanges}>Cancel</Button>
        </div>
      </TabsChildrenLayout>
    </>
  );
}

export default ProfileChildren;

