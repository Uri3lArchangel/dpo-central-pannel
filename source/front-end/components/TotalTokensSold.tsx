import React from 'react'
import body from "../../../styles/Home/Body.module.css";
import {OverviewDigitalData } from './core/data/overviewData'
import { CookieProps } from '../../../pages';

function TotalTokensSold({soldTokens}:CookieProps) {
  return (
    <>
    <div className={body.tokenSold}>
      <h2>Total Tokens Sold</h2>
      <p>{soldTokens}</p>
    </div>
    </>
  )
}

export default TotalTokensSold