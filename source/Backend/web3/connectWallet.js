import Web3 from 'web3'

const returnStruct={
    account:'',
    msg:'',
    type:'',
    time:0
}

export const connectWallet = async()=>{
    try{
if(typeof window.ethereum === 'undefined'){
    returnStruct.msg = 'Metamask not found'
    returnStruct.type = "error"
    returnStruct.time = 5
    return returnStruct
}else{
    const web3 = new Web3(Web3.givenProvider)
    await web3.eth.requestAccounts()
    const acc = web3.eth.getAccounts()[0]
    returnStruct.msg = 'Connected'
    returnStruct.time = 5
    returnStruct.type="success"
    returnStruct.account=acc
    return returnStruct
}
    }catch(err){
        console.error(err)
    }
}