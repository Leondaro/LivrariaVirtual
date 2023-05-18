import { Db, MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error('Environment variable "MONGODB_URI" is invalid or missing');
}
const uri = process.env.MONGODB_URI;
const options = {}
let cachedDB : Db | null;

export default async () => {
    if (cachedDB) return cachedDB;

    const mongoClient = new MongoClient(uri, options);
    let client;
    try {
       client = await mongoClient.connect();
    } catch (error) {
        console.log("Connection error: "+error);
    }

    let db: Db = client.db(process.env.DATABASE_NAME);
    cachedDB = db;
    return db;
}