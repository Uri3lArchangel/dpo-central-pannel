import React from "react";
import body from "../../../../styles/Home/Body.module.css";
import { OverviewChartData } from "../core/data/overviewData";

const o = OverviewChartData.investors

function InvestorsStatChart() {
  return (
    <>
      <div className={body.investorsStatChart}>
      <h2>Total Invesotrs: {o.accredited+o.pending+o.unaccredited}</h2>
        <canvas id="investorsStatChart"></canvas>
      </div>
    </>
  );
}

export default InvestorsStatChart;
