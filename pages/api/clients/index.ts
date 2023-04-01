import connectionDB from "../../../services/connectionDB";
import { ObjectId } from "mongodb";
//import uploadImage from "../../../public";
import formidable from "formidable";
import fs from "fs";
import path from "path";


export default async function Handler(req, res) {
    const { method } = req;

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
                const { img } = req.body;
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
                }
                const { db, client } = await connectionDB();
                const result = await db.collection("planets").insertOne(obj)
                */
                const destPath = "../../../public/upload/products/";
                const options : formidable.options = {};
                options.uploadDir = path.join(process.cwd(), destPath)
                options.filename = (name, ext, path, form) => {
                    return Date.now().toString() + "_" + path.originalFilename;
                }

                const form = formidable(options)
                form.parse(req, async function (err, fields, files) {
                    const file = files.file
                    const data = fs.readFileSync(file.path);
                    
                    fs.writeFileSync(`../../../public/upload/products/${file.name}`, data);
                    await fs.unlinkSync(file.path);
                });
                res.status(201).json({ method: "post", success: true, content: {} });
            } catch (error) {
                console.log(error);
                res.status(500).json({ method: "post", success: false, content: error });
            }
        break;
    }
}