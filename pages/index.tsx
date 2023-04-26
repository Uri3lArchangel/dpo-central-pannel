import { NextPageContext } from "next";
import React, { Fragment, useEffect } from "react";
import Maincontent from "../source/front-end/components/Overview/Overviewpage";
import Rootlayout from "../source/front-end/layouts/Rootlayout";
import { fetchBalance } from "../source/Backend/Utils/FetchTokenPrice";
import { fetchTransfers } from "../source/Backend/Utils/FetchTokenTransfers";
import {
  fetchApprovedRequests,
  fetchPendingRequests,
  fetchRejectedRequests,
  fetchRequests,
} from "../source/Backend/middlewares/fetchKycRequests";
import { connectMongoInvestor } from "../source/Backend/DB/connectInvestorsMongo";
export interface CookieProps {
  cookie?: string | undefined;
  res?: string;
  transferCount?: number;
  soldTokens?: number;
  investorsStatusStats?: {
    approvedInvestorsCount: number;
    rejectedInvestorsCount: number;
    pendingInvestorsCount: number;
  };
  url?:string;
  enviroment?:string
}

function index({
  cookie,
  res,
  transferCount,
  soldTokens,
  investorsStatusStats,
}: CookieProps) {
  return (
    <Fragment>
      <Rootlayout cookie={cookie}>
        <Maincontent
          transferCount={transferCount}
          soldTokens={soldTokens}
          investorsStatusStats={investorsStatusStats}
          res={res}
        />
      </Rootlayout>
    </Fragment>
  );
}

export default index;

export async function getServerSideProps(context: NextPageContext) {
  try {
    const cookie = context.req?.headers.cookie;
    const transfers = await fetchTransfers();
    let transferCount = transfers?.result?.length;
    await connectMongoInvestor()
    const res = await fetchBalance();
    const approvedInvestorsCount: number = (await fetchApprovedRequests())
      .length;
    const rejectedInvestorsCount: number = (await fetchRejectedRequests())
      .length;
    const pendingInvestorsCount: number = (await fetchPendingRequests()).length;
    const investorsStatusStats = {
      approvedInvestorsCount,
      rejectedInvestorsCount,
      pendingInvestorsCount,
    };
    let soldTokens: number = 0;
    if (transferCount && transfers?.result) {
      for (let i = 0; i < transferCount; i++) {
        console.log(transferCount);
        if (
          transfers.result[i].from_address !=
          "0x0000000000000000000000000000000000000000"
        ) {
          soldTokens = soldTokens + parseInt(transfers.result[i].value) / 10e8;
        }
      }
    }

    if (!cookie) {
      if (!transferCount || !soldTokens) {
        return {
          props: { res, transferCount: 0, soldTokens: 0, investorsStatusStats },
        };
      }
      return {
        props: {
          res,
          transferCount,
          soldTokens,
          investorsStatusStats,
        },
      };
    }else{
      if (!transferCount || !soldTokens) {
        return {
          props: {cookie, res, transferCount: 0, soldTokens: 0, investorsStatusStats },
        };
      }
    return {
      props: {
        cookie,
        res,
        transferCount,
        soldTokens,
        investorsStatusStats,
      },
    };
  }
  } catch (err) {
    console.error(err);
  }
}
