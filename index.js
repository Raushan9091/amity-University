const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const amityroute = require("./amityroute/amityroutes");
const amityuserroutes = require("./amityroute/amityuserroutes");

const isAmityExit = require('./amitymiddleware/amityExist');

const database_url = process.env.DATABASE_URL;
const dbName = 'amity';

mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', () => {
    console.log('Connection established to', dbName);
});

app.use(isAmityExit.isAmityExitorNot);
app.use('/', amityroute);  // Main routes
app.use('/', amityuserroutes);


app.get('/', (req, res) => {
    res.send("This is the second project Amity University");
});

const PORTNo = process.env.PORTNo;

app.listen(PORTNo, () => {
    console.log(`Server started at PORT No ${PORTNo}`);
});
