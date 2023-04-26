import { Button, Table, message } from "antd";
import React from "react";
import { columns } from "../core/data/kycrequests";
import { CookieMemberProps, kycdataInterface } from "../../../../pages/settings";
import {connectWallet} from '../../../Backend/web3/connectWallet'
function Requests({kycdata,cookieData,isBatchReady}:CookieMemberProps) {
  const [messageApi, contextHolder] = message.useMessage();
const walletInit = async()=>{
  await connectWallet()
}
  const dataSource = (data:string | undefined) => {
    if(data){
    const kycdata = JSON.parse(data) as kycdataInterface[]
   return ( kycdata.map((a) => {
      return {
        key: a._id,
        date: a.Date,
        name: a.FirstName,
        address: a.Location,
        membershipPlan: a.Plan,
        phoneNumber: a.PhoneNumber,
        email: a.Email,
        wallet: a.Wallet,
        status: a.Status,
        ApprovedByBoard:a.ApprovedByBoard
      };
    }))
  }
  };
  return (
    <>
    {contextHolder}
   {isBatchReady? <Button onClick={walletInit} style={{marginTop:'15em'}}>Upload Batch Onchain</Button>:<></>}
    <Table
      scroll={{ x: true }}
      style={{ margin: "2em auto", width: "98%" }}
      dataSource={dataSource(kycdata)}
      columns={columns(cookieData?.group,messageApi,isBatchReady)}
    />
    </>
  );
}

export default Requests;
