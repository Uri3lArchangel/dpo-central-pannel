import Head from 'next/head'
import React, { ReactNode } from 'react'
import Sidebar from '../components/Sidebar'


interface Props{
    children:ReactNode
}

function Rootlayout({children}:Props) {
  return (
    <>
    <Head>
    <title>Direct Private Offers Dashboard Panel</title>
    <link rel="icon" href="/assets/handshake.png" />
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <header>
        <Sidebar />
      </header>
      <main>{children}</main>

    </>
  )
}

export default Rootlayout