import multer from "multer";

export default multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/upload/products')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + "_" + file.originalname)
        }
    }),
    fileFilter: (req, file, cb) => {
        const extImg = ['image/png', 'image/jpg', 'image/jpeg'].find
        (acceptedForm => acceptedForm == file.mimetype);

        if(extImg){
            return cb(null, true);
        }

        return cb(null, false);
    }
});