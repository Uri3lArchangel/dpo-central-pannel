import React, { Fragment } from "react";
import Rootlayout from "../../source/front-end/layouts/Rootlayout";
import TokenDashboard from "../../source/front-end/components/Token/TokenDashboard";
import { NextPageContext } from "next";
import { CookieProps } from "..";

function index({cookie}:CookieProps) {
  return (
    <Fragment>
      <Rootlayout cookie={cookie}>
        <TokenDashboard />
      </Rootlayout>
    </Fragment>
  );
}

export default index;

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

  return {
    props:{
      cookie
    }
}
  }

