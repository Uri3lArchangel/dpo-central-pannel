import {ChartConfiguration,ChartData} from 'chart.js'
import { generateChart } from '../Chartcontext';

export const MONTHS ={
    all:[
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
      ],
      get:(start:number,end:number)=>{
       return MONTHS.all.slice(start,end)
      },    
      nth:(equation:string)=>{
        let tmp=[]

        let l=MONTHS.all.length
        if(equation === 'odd'){
            for(let i=1;i<l;i=(2*i)-1){
            tmp.push(MONTHS.all[i])
        }
        return tmp
      } else if(equation === 'even'){
        for(let i=1;i<l;i=(2*i)){
            tmp.push(MONTHS.all[i])
        }
        return tmp
      }
    

}
}



export function allowanceChart(){
    let canvas = document.getElementById('allowanceChart') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const labels = MONTHS.all
    
    const data:ChartData = {
        labels:labels,
        
        datasets:[{
            
            label:'No. of tokens',
            data:[0,100,200,400,500],
            fill:true,
            backgroundColor:'#0922',
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
                            
                        },color:'#092'
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
            aspectRatio:1.1,
            maintainAspectRatio:true,
        
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
