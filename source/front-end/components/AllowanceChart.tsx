import React from 'react'
import body from "../../../styles/Home/Body.module.css";


function AllowanceChart() {
  return (
    <div>
    <aside>Token</aside>
    <div className={body.allowanceBalance}>
      <h2>Token Allowance Balance: 0</h2>
      <canvas id="allowanceChart" height="300px"></canvas>
    </div>
    </div>
  )
}

export default AllowanceChart