import React, { useState } from 'react'
import TabsChildrenLayout from '../../layouts/TabsChildrenLayout'
import PasswordInput from '../core/utils/Passwordinput'
import { Button } from 'antd'
import {BiLock} from 'react-icons/bi'
import TabsChildrenLayout2 from '../../layouts/TabsChildrenLayout2'
import Form from '../Members/Form'
import Message from '../core/utils/message'

function SecurityChildren() {
  const [passwordPromptDisplay, setPromptDisplay] = useState(false);
  const triggerPromptOpen = (e:React.MouseEvent) => {
    e.stopPropagation()

    setPromptDisplay(true);
  };
  const triggerPromptClose = (e:React.MouseEvent) => {
    e.stopPropagation()
    setPromptDisplay(false);
  };
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
      <PasswordInput placeholder='New Password' classname='w-full my-2 sm:w-5/12' />
      <PasswordInput placeholder='Confirm Password' classname='w-full my-2 sm:w-5/12' />
      </div>
      <Button danger type='link'>Forgot Password?</Button>
      <div className='my-6 flex justify-between items-center '>
        <h3 className='text-left'>Setup 2FA <BiLock /></h3>
        
        <Button className='bg-blue-300 text-white'>Setup</Button>
      </div>
      <div className="flex justify-end space-x-3">
            <Button onClick={triggerPromptOpen}>Save</Button>
          <Button danger>Cancel</Button>
        </div>
   </TabsChildrenLayout2>
   </>
  )
}

export default SecurityChildren