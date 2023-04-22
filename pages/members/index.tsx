import React, { Fragment } from "react";
import Memberspage from "../../source/front-end/components/Members/Memberspage";
import Rootlayout from "../../source/front-end/layouts/Rootlayout";
import { Form } from "antd";
import Drop from "../../source/front-end/components/core/utils/Dropdown";
import { CookieProps } from "..";
import { NextPageContext } from "next";

function index({ cookie }: CookieProps) {
  return (
    <Fragment>
      <Rootlayout cookie={cookie}>
        <Memberspage cookie={cookie} />
      </Rootlayout>
    </Fragment>
  );
}

export default index;

export async function getServerSideProps(context: NextPageContext) {
  const cookie = context.req?.headers.cookie;
  
  if(cookie){
    return {
      props: {
        cookie
      },
    };
  }else{
    return {
      props: {
        
      },
    };
  }
  
}
