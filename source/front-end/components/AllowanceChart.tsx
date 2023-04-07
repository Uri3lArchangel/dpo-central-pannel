import React from "react";
import body from "../../../styles/Home/Body.module.css";

function AllowanceChart() {
  return (
    <>
      
      <div className={body.allowanceBalance}>
        <h2>Token Allowance Balance: 0</h2>
        <canvas id="allowanceChart"  width={'500%'} ></canvas>
      </div>
    </>
  );
}

export default AllowanceChart;
