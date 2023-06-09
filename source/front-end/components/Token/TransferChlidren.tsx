import { Button } from 'antd'
import React from 'react'
import tl from '../../../../styles/Token/TabLayouts.module.css'
import TabsChildrenLayout from '../../layouts/TabsChildrenLayout'

function TransferChlidren() {
  return (
    <TabsChildrenLayout>
    <h3>Total Supply:0</h3>
    <h3>Total Transfers:0</h3>
    <input placeholder='Enter Amount Of Tokens to Transfer' type="number" min={1} />
    <input placeholder='Receiving Address' type="text" />
    <Button>Transfer</Button>
    </TabsChildrenLayout>  )
}

export default TransferChlidren