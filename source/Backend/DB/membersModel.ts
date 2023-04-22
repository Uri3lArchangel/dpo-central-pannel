import { Model, Schema, model,models } from "mongoose";

const MembersSchema=new Schema({
    Image:String,
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
    Username:String,
    
})

let Member = models.Members || model('Members',MembersSchema)

export default Member
