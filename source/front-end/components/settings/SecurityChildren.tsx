import React from 'react'
import TabsChildrenLayout from '../../layouts/TabsChildrenLayout'
import PasswordInput from '../core/utils/Passwordinput'
import { Button } from 'antd'
import {} from 'react-icons/bi'

function SecurityChildren() {
  return (
    <TabsChildrenLayout>
        <h2>Change Password</h2>
        <PasswordInput />
        <div className='wflexable'>
            <h2>Setup 2fa</h2>
            <Button className='custom'>Setup</Button>
        </div>
    </TabsChildrenLayout>
  )
}

export default SecurityChildren