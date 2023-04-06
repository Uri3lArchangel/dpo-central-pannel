import React, { useEffect } from "react";
import body from "../../../styles/Home/Body.module.css";
import { HiHome, HiUserGroup } from "react-icons/hi2";
import { allowanceChart } from "../functions/component specific/allowanceChart";
import { Chart } from "chart.js";
import { investorStatChart } from "../functions/component specific/investorsStatChart";
import AllowanceChart from "./AllowanceChart";
import InvestorsStatChart from "./InvestorsStatChart";

function Maincontent() {
  useEffect(() => {
    allowanceChart();
    investorStatChart();

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
         <AllowanceChart />
        </section>
        <section>
         <InvestorsStatChart />
        </section>
      </article>
    </div>
  );
}

export default Maincontent;
