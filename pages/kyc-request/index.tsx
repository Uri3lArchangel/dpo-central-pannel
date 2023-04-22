import React, { Fragment } from 'react'
import Requests from '../../source/front-end/components/kyc-requestPage/requests'
import Rootlayout from '../../source/front-end/layouts/Rootlayout'
import { NextPageContext } from 'next'
import { CookieMemberProps } from '../settings'
import { fetchRequests } from '../../source/Backend/middlewares/fetchKycRequests'

function index({cookie,kycdata}:CookieMemberProps) {
  return (
    <Fragment>
    <Rootlayout cookie={cookie}>
    <Requests kycdata={kycdata} />
    </Rootlayout>
    </Fragment>

  )
}

export default index

export async function getServerSideProps(context:NextPageContext){
    const cookie = context.req?.headers.cookie
    
   if(!cookie){
    return {
      redirect:{
        destination:'/auth',
        permanent:false
      }
    }
   }
  const kycdata =JSON.stringify(await fetchRequests())
  // console.log(data)
    return {
      props:{
        cookie,kycdata
      }
  }
    }
  
  