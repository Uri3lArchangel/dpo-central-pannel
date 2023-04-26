import { model,Schema,models } from "mongoose";

const TxSchema = new Schema({
    Addresses:{
        type:Array,
        required:true
    },
    Dacert:{
        type:String,
        required:true

    }
})

let Tx = models.TxData || model('TxData',TxSchema)


export default Tx