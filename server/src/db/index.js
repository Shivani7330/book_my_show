import mongoose from "mongoose";

async function dbConnects() {

  try{
  const connection= await mongoose.connect(`${process.env.MONGODB_URI}/booking-tickets`);
  console.log(`mongodb connected ${connection}`);
  }
  catch (error){
    console.log("error in mongodb connection", error);
    process.exit(1);
  }
  
}
export default dbConnects;