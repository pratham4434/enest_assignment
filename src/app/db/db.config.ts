import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://prathamsharmafaangm:prathamsharmafaangm@cluster0.lxsog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
export async function connectDB() {
  const databaseName = "enes-assignment";
  try {
    await mongoose.connect(`${MONGO_URI}/${databaseName}`);
    const connection = mongoose.connection;

    connection.on("connected", () => {
       console.log(`MongoDB Connected Successfully to ${databaseName}`);
    });

    connection.on("error", () => {
      process.exit(1);
    });
  } catch (error) {
    process.exit(1);
  }
}