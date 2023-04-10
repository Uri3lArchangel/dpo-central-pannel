import React from 'react'
import body from "../../../../styles/Home/Body.module.css";
import { OverviewChartData } from '../core/data/overviewData';


function HoldersChart() {
  return (
    <>
    <div className={body.holdersChart}>
      <h2>Token Holders: {OverviewChartData.token.token_holders.slice(-1)}</h2>
      <canvas id="holdersChart"  width={'500%'} ></canvas>
    </div>
  </>
  )
}

export default HoldersChart