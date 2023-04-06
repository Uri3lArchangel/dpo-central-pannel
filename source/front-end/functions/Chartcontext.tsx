import Chart from 'chart.js/auto'
import {ChartConfiguration} from 'chart.js'

let chart:Chart

export function generateChart(ctx:CanvasRenderingContext2D,config:ChartConfiguration){
const canvas = ctx.canvas
const canvasId=canvas.id

const existingChart = Chart.getChart(canvasId);

if (existingChart) {
  existingChart.destroy();
}

    chart = new Chart(ctx,config)



  return chart
 
}
