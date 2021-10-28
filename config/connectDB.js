const mongoose=require("mongoose");


const connectDB = async () => {
    try
    {
        
        await mongoose.connect(
            process.env.PFEDB_URI,()=>{
            console.log(process.env.PFEDB_URI)
        }
        )
    }catch(error){
         console.log(error)
    }
    
}
module.exports=connectDB