import mongoose from "mongoose";
import { MONGO_DB_CDN } from "./config";

export const dbConnection = async() => {
    try {
        const db: any = await mongoose.connect(MONGO_DB_CDN!);
        console.log(`Connected to ${db.connection.name}`);
    }
    catch (error: any) {
        throw new Error(error!);
    }
}