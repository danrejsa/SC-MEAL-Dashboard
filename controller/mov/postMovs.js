
const { v4: uuidv4 } = require('uuid');
const db = require('../../config/db')
const multer = require('multer');
const validator = require('validator');

const fileUpload = require('../../Middleware/uploadFile');
const cloudinary = require('../../Middleware/cloudinary');

module.exports = async (req, res)=>{
    try {
        let name = req.body.name;
        let documentName = req.files.filename[0];

            if(validator.isEmpty(name)){
                return res.status(400).json({
                    success: false,
                    message: "Oops Name is Required",
                    Description: "Name must be fill cant be blank"
                })
            }
            if(validator.isNumeric(name)){
                return res.status(400).json({
                    success: false,
                    message: "Name cannot be numbers"
                })
            }
            
            try {
                let ToolID = uuidv4();
            
                const Transaction = await db.transaction()
                try {
                    const createToolkit = await Toolkits.create({
                        id: ToolID,
                        name: name,
                        path: documentName.path,
                        is_deleted: 0,
                    })
                    
                    {
                        transaction:Transaction
                    }
        
                    await Transaction.commit();
                        return res.status(201).json({
                        message: "Created successfully"
                    })    
                } catch (e) {
                    console.log(e);
                    await Transaction.rollback()             
                    return res.status(500).json({
                        success: false, 
                        message: "Internal Server error",
                        description: "Something went wrong"
                    })  
                }
            } catch (e) {

               console.log(e);
               return res.status(500).json({
                success: false, 
                message: "Internal Server error",
                description: "Something went wrong"
            })
            }
    } catch (e) {
        console.log(e);
       return res.status(400).json({
           success: false,
           message: "File name and type are required"
       }) 
    }
}
