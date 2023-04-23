
export const OverviewDigitalData = {
    'tokens_sold':1000,
    'transfers':12,
    'token_holders':0
}

export const OverviewChartData={
    investors:{
        'accredited':100,
        'unaccredited':12,
        'pending':4
    },
    token:{
    'token_price':(price)=>{
        price=Math.abs(price)
        let a = new Array(12).fill(0)
        a[(((new Date()).getMonth())+1)] = price
        return a
    },
    'token_holders':()=>{
        let a = new Array(12).fill(0)
        return a
    }
    }
}