import React, { Fragment } from "react";
import Requests from "../../source/front-end/components/kyc-requestPage/requests";
import Rootlayout from "../../source/front-end/layouts/Rootlayout";
import { NextPageContext } from "next";
import { CookieMemberProps } from "../settings";
import { fetchRequests } from "../../source/Backend/middlewares/fetchKycRequests";
import { jwtDecode } from "../../source/Backend/Utils/Jwt";
import { connectMongoInvestor } from "../../source/Backend/DB/connectInvestorsMongo";
import Tx from "../../source/Backend/DB/investorTxData";

function index({ cookie, kycdata, cookieData,isBatchReady }: CookieMemberProps) {
  return (
    <Fragment>
      <Rootlayout cookie={cookie}>
        <Requests kycdata={kycdata} isBatchReady={isBatchReady} cookieData={cookieData} />
      </Rootlayout>
    </Fragment>
  );
}

export default index;

export async function getServerSideProps(context: NextPageContext) {
  const cookie = context.req?.headers.cookie;
  
  console.log("hi");

  if (!cookie) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    }; 
  } else {
    let isBatchReady=false
    await connectMongoInvestor();
    const b = await Tx.find({})
    console.log('a',b.length)
    if(b.length > 0){
      isBatchReady = true
    }
    const kycdata = JSON.stringify(await fetchRequests());

    const cookieData = jwtDecode(cookie);
    console.log("cookieData", cookieData);
    return {
      props: {
        cookie,
        cookieData,kycdata,isBatchReady
      },
    };
  }
}
