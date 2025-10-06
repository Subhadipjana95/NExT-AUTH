import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;
        connection.on("connected", ()=>{
            console.log("Database connected successfully");
        })

    connection.on("error", (err)=>{
        console.log("Database connection failed");
        console.log(err);
        process.exit();
        })

    }catch(error){
        console.log("Something went wrong!");
        console.log(error);
    }
}