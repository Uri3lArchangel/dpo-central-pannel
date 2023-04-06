import { ChartConfiguration, ChartData } from "chart.js"
import { generateChart } from "../Chartcontext"

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
        data:[100,40,5],
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