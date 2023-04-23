import { connectMongoInvestor } from "../DB/connectInvestorsMongo"
import Investor from "../DB/investorModel"

export const fetchRequests=async()=>{
await connectMongoInvestor()
let data = await Investor.find({})

return data
}

export const fetchPendingRequests=async()=>{
    await connectMongoInvestor()
    let data = await Investor.find({Status:'pending'})
    
    return data
    }
    
    export const fetchApprovedRequests=async()=>{
        await connectMongoInvestor()
        let data = await Investor.find({Status:'approved'})
        
        return data
        }
        
        export const fetchRejectedRequests=async()=>{
            await connectMongoInvestor()
            let data = await Investor.find({Status:'rejected'})
            
            return data
            }
            