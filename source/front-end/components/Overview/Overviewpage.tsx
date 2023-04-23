import React, { CSSProperties, useEffect } from "react";
import body from "../../../../styles/Home/Body.module.css";
import { HiHome } from "react-icons/hi2";
import { allowanceChart } from "../../functions/component specific/allowanceChart";
import { investorStatChart } from "../../functions/component specific/investorsStatChart";
import PriceChart from "../Charts/AllowanceChart";
import InvestorsStatChart from "../Charts/InvestorsStatChart";
import TotalTokensSold from "../TotalTokensSold";
import TotalTransfers from "../TotalTransfers";
import TotalTokenHolders from "../TotalTokenHolders";
import HoldersChart from "../Charts/HoldersChart";
import { holdersChart } from "../../functions/component specific/holdersChart";
import { CookieProps } from "../../../../pages";


const sectorHeading:CSSProperties={textAlign:'right', fontSize:'1.4rem',fontWeight:'600'}

function Maincontent({res,transferCount,soldTokens,investorsStatusStats}:CookieProps) {
  let price:number
  if(res){
    Number.isNaN(parseFloat(res)) 
    price=0
  }else{
    price=Number(parseFloat(res!))
  }

  useEffect(() => {
    allowanceChart(price);
    investorStatChart(investorsStatusStats!);
    holdersChart();

    return () => {};
  }, []);

  return (
    <div className={body.mainContent}>
      <aside className={body.pageTitle}>
        <HiHome className={body.icons} size={34} />
        <h1>Overview</h1>
      </aside>
      <article className={body.dataOverviewContainer}>
        <section>
        
            <aside style={sectorHeading}>Data</aside>
            <div>
            <TotalTokensSold soldTokens={soldTokens} />
            <TotalTransfers transferCount={transferCount} />
            <TotalTokenHolders />
          </div>
        </section>
        <section>
        <aside style={sectorHeading}>Charts</aside>
          <div>
          <InvestorsStatChart investorsStatusStats={investorsStatusStats}/>
          <PriceChart price={price} />
          <HoldersChart />
          </div>
        </section>
      </article>
    </div>
  );
}

export default Maincontent;
