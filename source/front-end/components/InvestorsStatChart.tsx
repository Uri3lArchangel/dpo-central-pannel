import React from "react";
import body from "../../../styles/Home/Body.module.css";


function InvestorsStatChart() {
  return (
    <>
      <div className={body.investorsStatChart}>
      <h2>Total Invesotrs: 145</h2>
        <canvas id="investorsStatChart"></canvas>
      </div>
    </>
  );
}

export default InvestorsStatChart;
