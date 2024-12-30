const mongoose = require('mongoose');

const amityblogmodel = mongoose.Schema({

    amitymodel_titles:{
        type: String,
        require: true
    },
    amitymodel_description:{
        type: String,
        require: true
    },
    amitymodel_logo:{
        type: String,
        require: true
    }

});

const amity = mongoose.model('amity',(amityblogmodel));
module.exports = amity;