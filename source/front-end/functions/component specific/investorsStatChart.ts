import { ChartConfiguration, ChartData } from "chart.js"
import { OverviewChartData } from "../../components/core/data/overviewData"
import { generateChart } from "../Chartcontext"

const o= OverviewChartData

export const investorStatChart = ()=>{
    let canvas = document.getElementById('investorsStatChart') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const data:ChartData ={
       labels:[
        'Accredited investors',
        'Unaccredited investors',
        'Pending'
       ],
       datasets:[{
        label:'Investors Stat',
        data:[o.investors.accredited,o.investors.unaccredited,o.investors.pending],
        backgroundColor:[
            '#f00',
            '#0f0',
            '#00f'
        ],
        hoverOffset:4
       }]
    }
    const config:ChartConfiguration = {
        type:'doughnut',
        data:data,
        options:{
            responsive:true,
            plugins:{
                legend:{
                    labels:{
                    font:{
                        size:20
                    },color:'#000'
                    }
                }
            }
            
            
        }
    }
    generateChart(ctx,config)
}