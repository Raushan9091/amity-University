const mongoose = require('mongoose');

const amityusermodel = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Birthday:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    Phonenumber:{
        type : String,
        required: true
    },
    token:{
        type: String,
        required: true
    }
});

const amityuser = mongoose.model('amityuser',amityusermodel);
module.exports = amityuser;