
const Bcrypt = require('bcryptjs');
const Users = require('../../model/Users');
const jwt = require('jsonwebtoken')


module.exports = async(req, res)=>{
    try {
        let Email = req.body.email;
        let Password = req.body.password;
        const AuthencateUser = await Users.findOne({
            where:{
                email: Email,
                is_deleted: false,
            }
        })
        if(!AuthencateUser){
            return res.status(400).json({
                success: false,
                message: "Invalid Login credential"
            })
        }

        const AuthHashpassword = await Bcrypt.compare(Password, AuthencateUser.password)
        if(AuthHashpassword == false){
            return res.status(400).json({
                success: false,
                message: "Invalid login credential",
                description: "Provide login credential"
            })
        }

        

        const AccessToken = (UserID) =>{
            return jwt.sign(UserID, process.env.SECRET_KEY, {expiresIn: '1hr'});
        }

        const token = AccessToken({ UserID: AuthencateUser.id });



        return res.status(200).json({
            success: true,
            message: "Login successfully",
            data: {
                token
            }
        })
    } catch (e) {
        console.log(e);
    }
}