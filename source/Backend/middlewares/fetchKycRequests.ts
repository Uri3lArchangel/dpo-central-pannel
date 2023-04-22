import { connectMongoInvestor } from "../DB/connectInvestorsMongo"
import Investor from "../DB/investorModel"

export const fetchRequests=async()=>{
await connectMongoInvestor()
let data = await Investor.find({})
return data
console.log(data)
}