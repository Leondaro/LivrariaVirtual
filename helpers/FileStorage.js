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
        const nameImage = path.join(pathDir, fileName);
        fs.renameSync(file.filepath, nameImage);
        return {
            success: true,
            content: fileName,
        };
    } catch (error) {
        return {
            success: false,
            content: error,
        };
    }
}

export const deleteFile = (pathName) => {
    try {
        fs.unlinkSync(pathName);
        return {
            success: true,
            message: "File deleted!"
        }
    } catch (error) {
        return {
            success: false,
            message: error
        }
    }
}

export default async (fileUpload, pathDir) => {
    if (!fileUpload.length) {
        const file = fileUpload;
        const isValid = isFileValid(file);
        const fileName = encodeURIComponent(file.originalFilename.replace("/\s/g", "-"));

        if (!isValid) {
            return { 
                success: false, 
                content: "Invalid type file",
            }; 
        }
        return rename(file, pathDir, fileName);
    }
}
