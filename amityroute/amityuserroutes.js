const express = require('express');
const amityuser_router = express();
require('dotenv').config();

const bodyParser = require('body-parser');
amityuser_router.use(bodyParser.json());
amityuser_router.use(bodyParser.urlencoded({ extended: true }));

const session = require('express-session')

amityuser_router.set('view engine', 'ejs');  
amityuser_router.set('views', './amityviews'); 

// const multer = require('multer');
// const path = require('path');
amityuser_router.use(express.static('amityPublic'));

const SessionSecretKey = process.env.SESSION_SECRET_KEY

amityuser_router.use(session({
    secret:SessionSecretKey,
    resave:false,
    saveUninitialized:true,
    cookie:{secure: true}
}))

const amityuserController = require('../amitycontroller/amityUsercontroller');
amityuser_router.get('/login',amityuserController.loginlouder);

module.exports = amityuser_router;