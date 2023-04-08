import React from 'react'
import body from "../../../styles/Home/Body.module.css";
import {OverviewDigitalData } from './core/data/overviewData'

function TotalTokensSold() {
  return (
    <>
    <div className={body.tokenSold}>
      <h2>Total Tokens Sold</h2>
      <p>{OverviewDigitalData.tokens_sold}</p>
    </div>
    </>
  )
}

export default TotalTokensSold