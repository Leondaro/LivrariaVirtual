import { Db, MongoClient } from "mongodb";
import url from "url";

const uri = process.env.DATABASE_URL;
const dbName = url.parse(uri).pathname.substring(1);
let db: Db = null;

export default async () => {
    if (db) return { db } ;

    const client = new MongoClient(uri);
    try {
       await client.connect();     
    } catch (error) {
        console.log("Connection error: "+error);
    }

    db = client.db(dbName);
    //cachedDB = db;
    return { db, client };
}