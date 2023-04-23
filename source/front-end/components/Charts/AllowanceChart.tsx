import React from "react";
import body from "../../../../styles/Home/Body.module.css";
import { OverviewChartData } from "../core/data/overviewData";
import { CookieProps } from "../../../../pages";

interface Props{
  price:number
}
function PriceChart({price}:Props) {
  // console.log('res',)
  return (
    <>
      
      <div className={body.allowanceBalance}>
        
        <h2>Token Current Price: ${price}</h2>
        <canvas id="allowanceChart"  width={'500%'} ></canvas>
      </div>
    </>
  );
}

export default PriceChart;
