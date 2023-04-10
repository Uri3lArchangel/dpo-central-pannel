import { Button } from 'antd'
import React from 'react'
import tl from '../../../../styles/Token/TabLayouts.module.css'

function BurnChildren() {
  return (
    <div className={tl.Container}>
    <h3>Total Supply:0</h3>
    <input placeholder='Enter Amount Of Token To Burn' type="number" min={1} />
    <Button>Burn</Button>
</div>
  )
}

export default BurnChildren