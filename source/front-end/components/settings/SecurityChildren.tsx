import React, { useEffect, useRef, useState } from 'react'
import TabsChildrenLayout from '../../layouts/TabsChildrenLayout'
import PasswordInput from '../core/utils/Passwordinput'
import { Button, InputRef } from 'antd'
import {BiLock} from 'react-icons/bi'
import TabsChildrenLayout2 from '../../layouts/TabsChildrenLayout2'
import Form from '../Members/Form'
import Message from '../core/utils/message'

function SecurityChildren() {
  const [passwordPromptDisplay, setPromptDisplay] = useState(false);
  const passRef = useRef<InputRef>(null)
  const confpassRef = useRef<InputRef>(null)
  const triggerPromptOpen = (e:React.MouseEvent) => {
    e.stopPropagation()

    setPromptDisplay(true);
  };
  const triggerPromptClose = (e:React.MouseEvent) => {
    e.stopPropagation()
    setPromptDisplay(false);
  };
  
  useEffect(()=>{
    if(!passRef.current?.input?.value || ( passRef.current?.input?.value === confpassRef.current?.input?.value)){
      console.log(passRef.current?.input?.value)
    let save_btn = document.getElementById('saveChangesButton') as HTMLButtonElement
      let cancel_btn = document.getElementById('cancelChangesButton') as HTMLButtonElement
    
      save_btn.disabled=true;
      cancel_btn.disabled=true;}

  })

  const updateChange=()=>{
    let save_btn = document.getElementById('saveChangesButton') as HTMLButtonElement
    let cancel_btn = document.getElementById('cancelChangesButton') as HTMLButtonElement
  
    let password = passRef.current?.input?.value
    let confirmPassword = confpassRef.current?.input?.value
    
    
    if(password != "" && confirmPassword === password){
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

  return (
    <>
    {passwordPromptDisplay ? 
      <Form>
        <label htmlFor="pass">Enter Password to confirm action </label>
        <input type="password" required name="" id="pass" />
        <Message text={'Save Changes'}  loading={"Saving....."} success={"Saved"} />
        <Button onClick={triggerPromptClose} danger>Cancel</Button>
      </Form> : <></>}
   <TabsChildrenLayout2 close={triggerPromptClose}>
    
    <h2>Change Password</h2>
    <div className='block justify-between my-6 flexable sm:flex' >
      <PasswordInput change={updateChange}  ref={passRef} placeholder='New Password' classname='w-full my-2 sm:w-5/12' />
      <PasswordInput change={updateChange} ref={confpassRef} placeholder='Confirm Password' classname='w-full my-2 sm:w-5/12' />
      </div>
      <Button danger type='link'>Forgot Password?</Button>
      <div className='my-6 flex justify-between items-center '>
        <h3 className='text-left'>Setup 2FA <BiLock /></h3>
        
        <Button className='bg-blue-300 text-white'>Setup</Button>
      </div>
      <div className="flex justify-end space-x-3">
            <Button onClick={triggerPromptOpen} id='saveChangesButton'>Save</Button>
          <Button danger id='cancelChangesButton'>Cancel</Button>
        </div>
   </TabsChildrenLayout2>
   </>
  )
}

export default SecurityChildren