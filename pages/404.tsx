import React from 'react'
import {Button, Empty} from 'antd'

function FoF() {
  return (
    <Empty style={{position:'absolute',width:'100%',top:'30%'}} description='404 Ooops.....Page Not Found'>
        <Button onClick={()=>{
            window.history.back()
        }}>Go Back</Button>
    </Empty>
  )
}

export default FoF