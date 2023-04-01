import client from "../../../services/api";
import connectionDB from "../../../services/connectionDB";
import { ObjectId } from "mongodb";

export default async function Handler(req, res) {
    const { method } = req;
    const { ClientID } = req.query;

    switch(method) {
        case 'PUT':
            try {
                //const id = ClientID;
                //const { item } = req.body;
                //if (!name, !email) throw "Invalid data"
                const objId = new ObjectId("64264b2eac8c6cdb798843cf");
                
                const { db, client } = await connectionDB();
                const result = await db.collection('planets').updateOne(
                    { _id: objId }, { $set: { hasRings: true} });
                client.close();
                //await connectionDb().insertOne({ _id:clientID }, { name, email })
                res.status(200).json({ method: "put", success: true, content: result });
            } catch (error) {
                console.log(error);
                res.status(500).json({ method: "put", success: false, content: error });
            }
        break;
        case 'DELETE':
            try {
                //const id = ClientID;
                const objId = new ObjectId("64264b2eac8c6cdb798843cf");
                
                const { db, client } = await connectionDB();
                const result = await db.collection("planets").deleteOne({_id: objId})
                client.close();
                //await connectionDb.deleteOne({ _id:clientID });
                res.status(201).json({ method: "delete", success: true, content: result });
            } catch (error) {
                console.log(error);
                res.status(200).json({ method: "delete", success: false, content: error });
            }
        break;
    }    
}