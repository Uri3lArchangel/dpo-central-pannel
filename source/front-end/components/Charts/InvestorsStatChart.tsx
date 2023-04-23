import React from "react";
import body from "../../../../styles/Home/Body.module.css";
import { OverviewChartData } from "../core/data/overviewData";
import { CookieProps } from "../../../../pages";

const o = OverviewChartData.investors

function InvestorsStatChart({investorsStatusStats}:CookieProps) {
  let i = investorsStatusStats!
  return (
    <>
      <div className={body.investorsStatChart}>
      <h2>Total Investors: {i?.approvedInvestorsCount+i?.pendingInvestorsCount+i?.rejectedInvestorsCount}</h2>
        <canvas id="investorsStatChart"></canvas>
      </div>
    </>
  );
}

export default InvestorsStatChart;
