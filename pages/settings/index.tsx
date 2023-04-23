import React, { Fragment } from 'react'
import Rootlayout from '../../source/front-end/layouts/Rootlayout'
import SettingsPage from '../../source/front-end/components/settings/SettingsPage'
import { NextPageContext } from 'next'
import { jwtDecode } from '../../source/Backend/Utils/Jwt'
import { FetchMemberData, a } from '../../source/Backend/Utils/ReturnMemberforSetting'
import { Int32, ObjectId } from 'mongodb'

export interface kycdataInterface{
  _id:ObjectId;
  Image?:string;
  FirstName:string;
  LastName:string;
  Location:string;
  Email:string;
  PhoneNumber:string;
  Plan:string;
  Wallet:string;
  Company?:string;
  Status:string;
  Date:string;
  __v:Int32;
}

export interface CookieMemberProps{
  cookie?:string,
  MemberObject?:a,
  kycdata?:string,
  url?:string;
  enviroment?:string
}

function index({cookie,MemberObject,url,enviroment}:CookieMemberProps) {

  return (
    <Fragment>
        <Rootlayout cookie={cookie}>
            <SettingsPage cookie={cookie} url={url} enviroment={enviroment} MemberObject={MemberObject} />
        </Rootlayout>
    </Fragment>
    )
}

export default index

export async function getServerSideProps(context:NextPageContext){
    const cookie = context.req?.headers.cookie
    const enviroment = process.env.NODE_ENV
    const url = process.env.URL
   if(!cookie){
    return {
      redirect:{
        destination:'/auth',
        permanent:false
      }
    }
   }
    let email = jwtDecode(cookie).email
   let MemberObject = await FetchMemberData(email)
  
    return {
      props:{
  cookie,MemberObject,url,enviroment
      }
  }
    }
  
  