import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
console.log(USERNAME,"hello")

const connection = async () => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.9j0zobg.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to database", error.message);
  }
};

export default connection;
