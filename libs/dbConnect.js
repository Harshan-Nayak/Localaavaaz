import mongoose from "mongoose";

export default async  function dbConnect(){
await mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
}



