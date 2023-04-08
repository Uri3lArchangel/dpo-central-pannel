import { ChartConfiguration, ChartData } from "chart.js"
import { OverviewChartData } from "../../components/core/data/overviewData"
import { generateChart } from "../Chartcontext"
import { MONTHS } from "./allowanceChart"


let colorArray=[
    '#f40',
    '#0ff',
    '#00a',
    '#706',
    '#111',
    '#afa',
    '#0af'
]
let colorArrayOp=[
    '#f405',
    '#0ff5',
    '#00a5',
    '#7065',
    '#1115',
    '#afa5',
    '#0af5'
]

export const holdersChart = ()=>{
let canvas = document.getElementById('holdersChart') as HTMLCanvasElement
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D

const labels = MONTHS.get(0,6)

const data:ChartData = {
labels:labels,
datasets:[{
    label:'Token Holders',
    data:OverviewChartData.token.token_holders,
    backgroundColor:colorArrayOp,
    borderColor:colorArray,
    borderWidth:2
}
]
}
const config:ChartConfiguration={
type:'bar',
data:data,
options:{
    scales:{
        y:{
            beginAtZero:true
        }
    }
}
}


generateChart(ctx,config)
}