import { NextPageContext } from 'next'
import React, { Fragment, useEffect } from 'react'
import Maincontent from '../source/front-end/components/Overview/Overviewpage'
import Rootlayout from '../source/front-end/layouts/Rootlayout'
export interface CookieProps{
  cookie:string | undefined
}

function index({cookie}:CookieProps) {

  
  return (
    <Fragment>
      <Rootlayout cookie={cookie}>
      <Maincontent />
      </Rootlayout>
    </Fragment>
  )
}

export default index

export async function getServerSideProps(context:NextPageContext){
  const cookie = context.req?.headers.cookie
  
 if(!cookie){
  return {
    props:{
      
    }
  }
 }

  return {
    props:{
      cookie
    }
}
  }

