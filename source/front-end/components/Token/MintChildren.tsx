import { Button } from 'antd'
import React from 'react'
import tl from '../../../../styles/Token/TabLayouts.module.css'
import TabsChildrenLayout from '../../layouts/TabsChildrenLayout'

function MintChildren() {
  return (
    <TabsChildrenLayout >
        <h3>Total Supply:0</h3>
        <input  placeholder='Enter Amount Of Token To Mint' type="number" min={1} />
        <Button>Mint</Button>
    </TabsChildrenLayout>
  )
}

export default MintChildren