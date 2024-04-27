import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(config.db as string);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
