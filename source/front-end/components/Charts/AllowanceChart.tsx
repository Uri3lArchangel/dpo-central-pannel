import React from "react";
import body from "../../../../styles/Home/Body.module.css";
import { OverviewChartData } from "../core/data/overviewData";

function AllowanceChart() {
  return (
    <>
      
      <div className={body.allowanceBalance}>
        <h2>Token Allowance Balance: {OverviewChartData.token.token_allowance.slice(-1)}</h2>
        <canvas id="allowanceChart"  width={'500%'} ></canvas>
      </div>
    </>
  );
}

export default AllowanceChart;
