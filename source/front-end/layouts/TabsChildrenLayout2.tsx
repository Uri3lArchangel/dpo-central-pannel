import React, { ReactNode } from 'react'

import tl from '/styles/Token/TabLayouts.module.css'

interface Props{
    children?:ReactNode,
    close?:React.MouseEventHandler
}
function TabsChildrenLayout2({children,close}:Props) {
  return (
    <div onClick={close} className={tl.Container2}>{children}</div>
  )
}

export default TabsChildrenLayout2