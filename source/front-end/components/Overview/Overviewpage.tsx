import React, { CSSProperties, useEffect } from "react";
import body from "../../../../styles/Home/Body.module.css";
import { HiHome } from "react-icons/hi2";
import { allowanceChart } from "../../functions/component specific/allowanceChart";
import { investorStatChart } from "../../functions/component specific/investorsStatChart";
import AllowanceChart from "../AllowanceChart";
import InvestorsStatChart from "../InvestorsStatChart";
import TotalTokensSold from "../TotalTokensSold";
import TotalTransfers from "../TotalTransfers";
import TotalTokenHolders from "../TotalTokenHolders";
import HoldersChart from "../HoldersChart";
import { holdersChart } from "../../functions/component specific/holdersChart";


const sectorHeading:CSSProperties={textAlign:'right', fontSize:'1.4rem',fontWeight:'600'}

function Maincontent() {
  useEffect(() => {
    allowanceChart();
    investorStatChart();
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
            <TotalTokensSold />
            <TotalTransfers />
            <TotalTokenHolders />
          </div>
        </section>
        <section>
        <aside style={sectorHeading}>Charts</aside>
          <div>
          <InvestorsStatChart />
          <AllowanceChart />
          <HoldersChart />
          </div>
        </section>
      </article>
    </div>
  );
}

export default Maincontent;
