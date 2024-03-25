import mongoose from "mongoose";

const schema = mongoose.Schema

const userifno = new schema({
    name:{
        type:String,required:true,trim:true
    },
    email:{
        type:String,required:true,unic:true
    },
    password:{
        type:String,required:true
    },
    phone:{
        type:String,required:true
    },
    address:{
        type:String,required:true
    },
answer:{
    type:String, required:true
},
    role:{
        type:Number,default:0
    },
},{timestamps:true})
const user = mongoose.model('user',userifno);
export default user