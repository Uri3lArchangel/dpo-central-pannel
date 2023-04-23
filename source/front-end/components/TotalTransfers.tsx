import React from 'react'
import body from "../../../styles/Home/Body.module.css";
import { OverviewDigitalData } from './core/data/overviewData';
import { CookieProps } from '../../../pages';


function TotalTransfers({transferCount}:CookieProps) {
  return (
    <>
    <div className={body.totalTransfers}>
      <h2>Total Transfers </h2>
      <p>{transferCount}</p>
    </div>
    </>
  )
}

export default TotalTransfers