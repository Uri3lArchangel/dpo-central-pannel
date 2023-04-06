import {ChartConfiguration,ChartData} from 'chart.js'
import { generateChart } from '../Chartcontext';

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];



export function allowanceChart(){
    let canvas = document.getElementById('allowanceChart') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const labels = MONTHS
    
    const data:ChartData = {
        labels:labels,
        
        datasets:[{
            
            label:'No. of tokens',
            data:[0,100,200,400,500],
            fill:true,
            backgroundColor:'#fff3',
            borderColor:'rgb(40,50,60)',
            tension:0.1,
            

        }]
    }

    const config:ChartConfiguration = {
        type:'line',
        data:data,
        options:{
            scales:{
                x:{
                    ticks:{
                        font:{
                            size:10,
                            
                        },color:'#fff'
                    }
                },  y:{
                    ticks:{
                        font:{
                            size:10,
                            
                        },color:'#000'
                    }
                }
            },
            responsive:true,
        
           plugins:{
            
            legend:{
                
                labels:{
                
                    font:{
                        size:20
                    },color:'black'
                }
            }
           }
        }
    }
    generateChart(ctx,config)

    
}
