const math =require('mathjs')

let ab = 'abcdefg'
let eqn = '2*i+1'

let r 
for(let i=0;i<10;i=(math.evaluate(r))){
     r =  eqn.replace('i',i)

    
    console.log(i)
}