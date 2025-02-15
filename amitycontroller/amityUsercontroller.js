const loginlouder = async(req, res)=>{
    try{

        res.render('login');
    }catch(error){
        console.log(error.message);
    }
}
module.exports ={
    loginlouder
}