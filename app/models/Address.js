import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    address:{
        type:String,
    },
    number:{
        type:String,
    }
},{timestamps:true})


mongoose.models = {}


module.exports = mongoose.model('Address',addressSchema);


