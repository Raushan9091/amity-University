const amityExit = require('../amitymodel/amitymodel');

const isAmityExitorNot = async(req, res, next)=>{
    try{

        const amity = await amityExit.find({});

        if(amity.length == 0 && req.originalUrl !="/amity-setup"){
            res.redirect('/amity-setup');
        }
        else{
            next();
        }

    }catch(error){
        console.log(error.message);
    }
}

module.exports = {isAmityExitorNot}