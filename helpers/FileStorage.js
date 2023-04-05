import fs from "fs";
import path, { join } from "path";


const isFileValid = (file) => {
    const type = file.mimetype.split("/").pop();
    const validTypes = ["jpg", "jpeg", "png", "pdf"];
    if (validTypes.indexOf(type) === -1) {
        return false;
    }
    return true;
}

const rename = (file, pathDir, fileName) => {
    try {
        fs.renameSync(file.filepath, path.join(pathDir, fileName));
        return {
            success: true,
            message: "Renamed!",
        };
    } catch (error) {
        return {
            success: false,
            message: error,
        };
    }
}

const saveOnDatabase = () => {
    try {
        //const newFile = await SaveFile();
        return {
            success: true,
            message: "New image saved!",
        };
    } catch (error) {
        return {
            success: false,
            message: error,
        };
    }
}

export default async (files, pathDir) => {
    if (!files.myImage.length) {
        const file = files.myImage;
        const isValid = isFileValid(file);
        const fileName = encodeURIComponent(file.originalFilename.replace("/\s/g", "-"));

        if (!isValid) {
            return { 
                success: false, 
                message: "Invalid type file",
            }; 
        }
        const renamed = rename(file, pathDir, fileName);
        const saved = saveOnDatabase();

        return { renamed, saved }
    }
}

/*
export default async (file) => {
    const data = fs.readFileSync(file.path);
    fs.writeFileSync(`../public/upload/products${file.name}`, data);
    await fs.unlinkSync(file.path);
    return "GEISSOONN";
}
*/