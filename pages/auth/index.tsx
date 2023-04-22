import React, { Fragment } from "react";
import Rootlayout from "../../source/front-end/layouts/Rootlayout";
import SigninPage from "../../source/front-end/components/Auth/SigninPage";
import { generatePassword } from "../../source/Backend/Utils/PasswordHashingFunction";
import { NextPageContext } from "next";

function Signin() {
  let ab = "abc123";
  return (
    <Fragment>
      <SigninPage />
    </Fragment>
  );
}

export default Signin;

export async function getServerSideProps(context: NextPageContext) {
  if (context.req?.headers.cookie) {

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }else{
    return {
      props:{
        
      }
    }
  }
}
