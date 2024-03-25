import mongoose from "mongoose";

 
// const connectdb=async()=>{
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URL) 
//         console.log(`database connection is successful ${conn.connection.host}`)
//     }catch(error){
// console.log(error.message)
//     }
// }

  const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URL) 
    .then(()=>{
        console.log(`database connection is successful`) 
    }).catch((error)=>{
        console.log(error.message)
     })
 }


 export default connectdb;