import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config()

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected: `);
    console.log("Mongo URI: ", process.env.MONGO_URI);
  } catch (error) {
    console.error("Some error occurred while connecting to database:", error);
    process.exit(1); // Optional: exit on DB failure
  }
};

export default dbConnection;
