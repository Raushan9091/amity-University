const mongoose = require('mongoose');

const amityusermodel = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    is_admin:{
        type :String,
        require: true
    },
    token:{
        type: String,
        require: true
    }
});

const amityuser = mongoose.model('amityuser',amityusermodel);
module.exports = amityuser;