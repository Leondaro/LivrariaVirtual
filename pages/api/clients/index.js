import connectionDB from "../../../services/connectionDB";
import FileStorage from "../../../helpers/FileStorage";
import IsEmpty from "../../../utils/IsEmpty";
import Formidable from "formidable";


export default async function Handler(req, res) {
    const { method } = req;
    const { query } = req;
    let filter = {};

    switch(method) {
        case 'GET':
            if (typeof query === 'object' && !IsEmpty(query)) {
                const { queryFilter } = query;
                if (queryFilter !== "Todos") filter = { "genero": queryFilter };
            }

            try {
                const db = await connectionDB();
                const cursor = await db.collection('livros').find(
                    filter
                ).toArray();
                /*const cursor = await db.collection('livros').find({}).toArray();*/
                res.send(cursor);
                //res.send(req.config);
            } catch (error) {
                console.log(error);
                res.send(error);
            }
        break;
        case 'POST':
            try {               
                const form = new Formidable.IncomingForm();
                const uploadFolder = path.join(__dirname, "../../../../public/upload/products");
                form.maxFileSize = 50 * 1024 * 1024;
                form.uploadDir = uploadFolder;
                let finalResult = [];

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
                    
                    let formData = JSON.parse(fields.inputFields);
                    const { genero } = formData;
                    if (genero !== 'undefined') (() => {
                        genero.includes(',') ? formData["genero"] = genero.split(',') : formData["genero"] = [genero];
                    })();
                    
                    const renameNewFile = await FileStorage(files.fileImage, uploadFolder);
                    if (renameNewFile.success) formData.capa = renameNewFile.content;

                    const db = await connectionDB();
                    const queryResult = await db.collection("livros").insertOne(formData);
                    finalResult.push(formData, queryResult);
                    res.status(201).json({ method: "post", success: true, content: finalResult });
                });
            } catch (error) {
                console.log(error);
                res.status(500).json({ method: "post", success: false, content: error });
            }
        break;
    }
}

export const config = {
  api: {
    bodyParser: false,
  },
};