import { ChartConfiguration, ChartData } from "chart.js"
import { OverviewChartData } from "../../components/core/data/overviewData"
import { generateChart } from "../Chartcontext"

const o= OverviewChartData
type i = {

        approvedInvestorsCount: number;
        rejectedInvestorsCount: number;
        pendingInvestorsCount: number;
      
}
export const investorStatChart = (i:i)=>{
    let canvas = document.getElementById('investorsStatChart') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const data:ChartData ={
       labels:[
        'Accredited Investors',
        'Unaccredited Investors',
        'Pending'
       ],
       datasets:[{
        label:'Investors Stat',
        data:[i.approvedInvestorsCount,i.rejectedInvestorsCount,i.pendingInvestorsCount],
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