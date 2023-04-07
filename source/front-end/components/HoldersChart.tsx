import React from 'react'
import body from "../../../styles/Home/Body.module.css";


function HoldersChart() {
  return (
    <>
    <div className={body.holdersChart}>
      <h2>Token Holders</h2>
      <canvas id="holdersChart"  width={'500%'} ></canvas>
    </div>
  </>
  )
}

export default HoldersChart