const express = require('express');
const amity_router = express();

const bodyParser = require('body-parser');
amity_router.use(bodyParser.json());
amity_router.use(bodyParser.urlencoded({ extended: true }));


amity_router.set('view engine', 'ejs');  
amity_router.set('views', './amityviews'); 

const multer = require('multer');
const path = require('path');
amity_router.use(express.static('amityPublic'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../amityPublic/images');
    console.log('Resolved upload path', uploadPath);
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname;
    cb(null, name);
  }
});

const upload = multer({ storage: storage });

const amityController = require("../amitycontroller/amityControllers");

amity_router.get('/amity-setup', amityController.amitySetup);

amity_router.post('/amity-setup', upload.single('Name'),amityController.amityNameSave);

module.exports = amity_router;
