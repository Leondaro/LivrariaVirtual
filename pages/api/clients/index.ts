import connectionDB from "../../../services/connectionDB";
import { ObjectId } from "mongodb";
import FileStorage from "../../../helpers/FileStorage";
import Formidable from "formidable";
import path, { join } from "path";
import fs from "fs";
//import no from ""
//import path from "path";
//import { inspect } from "util";
//import Busboy from "@fastify/busboy";


export default async function Handler(req, res) {
    const { method, body } = req;

    switch(method) {
        case 'GET':
            try {
                const { db } = await connectionDB();
                const cursor = await db.collection('planets').find({}).toArray();
                //client.close();
                res.status(200).json({ method: "get", success: true, content: cursor });
            } catch (error) {
                console.log(error);
                res.status(500).json({ method: "get", success: false, content: error });
            }
        break;
        case 'POST':
            try {
                //const { img } = req.body;
                
                //if (!item) throw res.status(400).json({ method: "post", success: false, data: error });
                /*
                const objId = new ObjectId();
                const obj = { 
                    _id: objId, 
                    name: "Kronos", 
                    orderFromSun: 9, 
                    hasRings: false, 
                    mainAtmosphere: [], 
                    surfaceTemperatureC: {}
                }*/
                //const { db, client } = await connectionDB();
                //const result = await db.collection("planets").insertOne(obj)

                const form = new Formidable.IncomingForm();
                const uploadFolder = path.join(__dirname, "../../../../public/upload/products");
                form.maxFileSize = 50 * 1024 * 1024;
                form.uploadDir = uploadFolder;
                form.parse(req, async (err, fields, files) => {
                    if (err) {
                        console.log("error parsing files");
                        console.log(err);
                        return res.status(400).json({ 
                            method: "post", 
                            success: false, 
                            content: err,
                        });
                    }
                    //console.log(files);
                    const result = FileStorager(files, uploadFolder);
                    console.log(result);
                });

                res.status(201).json({ method: "post", success: true, content: body });
            } catch (error) {
                console.log(error);
                res.status(500).json({ method: "post", success: false, content: error });
            }
        break;
    }
}

/**/
export const config = {
  api: {
    bodyParser: false,
  },
};