import React from 'react'
import body from "../../../styles/Home/Body.module.css";
import { OverviewDigitalData } from './core/data/overviewData';


function TotalTokenHolders() {
  return (
    <>
    <div className={body.tokenHolders}>
      <h2>Token Holders</h2>
      <p>{OverviewDigitalData.token_holders}</p>
    </div>
    </>
  )
}

export default TotalTokenHolders