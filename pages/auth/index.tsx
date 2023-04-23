import React, { Fragment } from "react";
import Rootlayout from "../../source/front-end/layouts/Rootlayout";
import SigninPage from "../../source/front-end/components/Auth/SigninPage";
import { generatePassword } from "../../source/Backend/Utils/PasswordHashingFunction";
import { NextPageContext } from "next";

interface Props{
  enviroment?:string
  url?:string
}

function Signin({enviroment,url}:Props) {
  return (
    <Fragment>
      <SigninPage url={url} enviroment={enviroment} />
    </Fragment>
  );
}

export default Signin;

export async function getServerSideProps(context: NextPageContext) {
  const enviroment = process.env.NODE_ENV
  const url = process.env.URL
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
        enviroment,url
      }
    }
  }
}
