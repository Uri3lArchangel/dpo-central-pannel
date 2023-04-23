import React, { Fragment } from "react";
import Memberspage from "../../source/front-end/components/Members/Memberspage";
import Rootlayout from "../../source/front-end/layouts/Rootlayout";
import { Form } from "antd";
import Drop from "../../source/front-end/components/core/utils/Dropdown";
import { CookieProps } from "..";
import { NextPageContext } from "next";

function index({ cookie,url,enviroment }: CookieProps) {
  return (
    <Fragment>
      <Rootlayout cookie={cookie}>
        <Memberspage url={url} enviroment={enviroment} cookie={cookie} />
      </Rootlayout>
    </Fragment>
  );
}

export default index;

export async function getServerSideProps(context: NextPageContext) {
  const cookie = context.req?.headers.cookie;
  const enviroment = process.env.NODE_ENV
  const url = process.env.URL
  if(cookie){
    return {
      props: {
        cookie,url,enviroment
      },
    };
  }else{
    return {
      props: {
        url,enviroment
      },
    };
  }
  
}
