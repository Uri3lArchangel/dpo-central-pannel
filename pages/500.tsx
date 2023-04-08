import React from 'react'
import {Button, Empty} from 'antd'
import { useRouter } from 'next/router'

function FiveHundred() {
    const router = useRouter()
  return (
    <Empty style={{position:'absolute',width:'100%',top:'30%'}} description='500..... Internal Server Error ...'>
        <Button onClick={()=>{
            window.history.back()
        }}>Go Back</Button>
        <Button onClick={()=>{
            router.reload()
        }}>Reload</Button>
    </Empty>
  )
}

export default FiveHundred