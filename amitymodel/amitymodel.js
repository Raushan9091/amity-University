const mongoose = require('mongoose');

const amityblogmodel = new mongoose.Schema({

    amitymodel_name:{
        type: String,
        required: true
    },
    amitymodel_Fathername:{
        type: String,
        required: true
    },
    amitymodel_email:{
        type: String,
        required: true
    }

});

const amity = mongoose.model('amity',(amityblogmodel));
module.exports = amity;