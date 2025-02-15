const amityExit = require('../amitymodel/amitymodel');
const amityUser = require('../amitymodel/amityusermodel'); // Make sure you are using amityUser here
const bcrypt = require('bcrypt');


const securepassword = async(password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        console.log(error.message);
    }
}

const amitySetup = async(req, res) => {
    try {
        const amity = await amityExit.find({});
        if (amity.length > 0) {
            res.redirect('/login');
        } else {
            res.render('amitySetup');
        }
    } catch (error) {
        console.log(error.message);
    }
}

const amityNameSave = async(req, res) => {
    try {
        const Name = req.body.Name;
        const Fathername = req.body.Fathername;
        const Phonenumber = req.body.Phonenumber;
        const email = req.body.email;
        const Birthday = req.body.Birthday;
        const password = await securepassword(req.body.password);

        const amityExit1 = new amityExit({
            amitymodel_name: Name,
            amitymodel_Fathername: Fathername,
            amitymodel_email: email
        });
        await amityExit1.save();

        // Use amityUser instead of user
        const user = new amityUser({
            Birthday: Birthday,
            Phonenumber: Phonenumber,
            password: password,
            is_admin: 1
        });
        const userData = await user.save();

        if (userData) {
            res.redirect('/login');
        } else {
            res.render('amitySetup', { message: 'Registration page has some problem' });
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    amityNameSave,
    amitySetup,
    
}
