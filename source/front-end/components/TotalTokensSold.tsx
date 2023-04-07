import React from 'react'
import body from "../../../styles/Home/Body.module.css";


function TotalTokensSold() {
  return (
    <>
    <div className={body.tokenSold}>
      <h2>Total Tokens Sold</h2>
      <p>1,000</p>
    </div>
    </>
  )
}

export default TotalTokensSold