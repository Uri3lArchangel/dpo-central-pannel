import React from 'react'
import body from "../../../styles/Home/Body.module.css";
import { OverviewDigitalData } from './core/data/overviewData';


function TotalTransfers() {
  return (
    <>
    <div className={body.totalTransfers}>
      <h2>Total Transfers </h2>
      <p>{OverviewDigitalData.transfers}</p>
    </div>
    </>
  )
}

export default TotalTransfers