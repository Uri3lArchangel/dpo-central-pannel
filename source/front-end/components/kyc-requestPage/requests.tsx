import { Table } from "antd";
import React from "react";
import { columns, dataSource } from "../core/data/kycrequests";
import { CookieMemberProps, kycdataInterface } from "../../../../pages/settings";

function Requests({kycdata}:CookieMemberProps) {
  const dataSource = (data:string | undefined) => {
    if(data){
    const kycdata = JSON.parse(data) as kycdataInterface[]
   return ( kycdata.map((a, index) => {
      return {
        key: index,
        date: a.Date,
        name: a.FirstName,
        address: a.Location,
        membershipPlan: a.Plan,
        phoneNumber: a.PhoneNumber,
        email: a.Email,
        wallet: a.Wallet,
        status: a.Status,
      };
    }))
  }
  };
  return (
    <Table
      scroll={{ x: true }}
      style={{ margin: "12em auto", width: "98%" }}
      dataSource={dataSource(kycdata)}
      columns={columns}
    />
  );
}

export default Requests;
