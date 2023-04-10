import { Button } from 'antd'
import React from 'react'
import tl from '../../../../styles/Token/TabLayouts.module.css'

function MintChildren() {
  return (
    <div className={tl.Container}>
        <h3>Total Supply:0</h3>
        <input  placeholder='Enter Amount Of Token To Mint' type="number" min={1} />
        <Button>Mint</Button>
    </div>
  )
}

export default MintChildren