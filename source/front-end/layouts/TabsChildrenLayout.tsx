import React, { ReactNode } from 'react'

import tl from '/styles/Token/TabLayouts.module.css'

interface Props{
    children?:ReactNode,
    closePassPrompt?:React.MouseEventHandler
}

function TabsChildrenLayout({children,closePassPrompt}:Props) {
  return (
    <div onClick={closePassPrompt} className={tl.Container}>
        {children}
    </div>

  )
}

export default TabsChildrenLayout