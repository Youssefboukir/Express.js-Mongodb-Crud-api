const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './src/public/images');
    },
    filename: function (req, file, callback) {
        callback(null,"IMG_"+ Date.now()+""+ file.originalname);
    },
});
module.exports.upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
});

module.exports.callback = (error, doc, res) => {
    if (error) {
        res.status(500).json(error);
    } else {
        res.status(200).json(doc);
    }
};

