import Formidable from "formidable";
import path, { join } from "path";
import { ObjectId } from "mongodb";
import FileStorage, { deleteFile } from "../../../helpers/FileStorage";
import connectionDB from "../../../services/connectionDB";

export default async function Handler(req, res) {
    const { method } = req;
    const { ClientID } = req.query;

    switch(method) {
        case 'PUT':
            try {
                const id = ClientID;
                const objId = new ObjectId(id);
                const form = new Formidable.IncomingForm();
                const uploadFolder = path.join(__dirname, "../../../../../public/upload/products/");
                form.maxFileSize = 50 * 1024 * 1024;
                form.uploadDir = uploadFolder;
                let finalResult = [];

                console.log(id);
                form.parse(req, async (err, fields, files) => {
                    if (err) {
                        console.log("Error parsing files.");
                        console.log(err);
                    }
                    
                    let formData = JSON.parse(fields.inputFields);
                    const { genero } = formData;
                    if (genero) (() => {
                        genero.includes(',') ? formData["genero"] = genero.split(',') : formData["genero"] = [genero];
                    })();
                    
                    const db = await connectionDB();
                    if (formData.length === 0)
                        formData = {}
                    if (files.fileImage !== null && files.fileImage !== undefined) {
                        const doc = await db.collection('livros').findOne(
                            { _id: objId },
                            { capa: 1 }
                        );
                        const msg = deleteFile(uploadFolder+doc.capa);
                        finalResult.push(msg);
                        
                        const renameNewFile = await FileStorage(files.fileImage, uploadFolder);
                        if (renameNewFile.success) formData.capa = renameNewFile.content;
                    }
                    const queryResult = await db.collection('livros').updateOne(
                        { _id: objId }, { $set: formData }
                    );
                    finalResult.push(queryResult, formData);
                    res.status(200).json({ method: "put", success: true, content: finalResult });
                });
            } catch (error) {
                console.log(error);
                res.status(500).json({ method: "put", success: false, content: error });
            }
        break;
        case 'DELETE':
            try {
                const id = ClientID;
                const objId = new ObjectId(id);
                const uploadFolder = path.join(__dirname, "../../../../../public/upload/products/");
                let finalResult = [];

                const db = await connectionDB();
                const doc = await db.collection('livros').findOne(
                    { _id: objId },
                    { capa: 1 }
                );
                const msg = deleteFile(uploadFolder+doc.capa);
                const queryResult = await db.collection("livros").deleteOne({_id: objId});
                finalResult.push(msg, queryResult);

                res.status(201).json({ method: "delete", success: true, content: finalResult });
            } catch (error) {
                console.log(error);
                res.status(200).json({ method: "delete", success: false, content: error });
            }
        break;
    }    
}

export const config = {
    api: {
      bodyParser: false,
    },
  };
