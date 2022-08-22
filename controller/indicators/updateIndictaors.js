

const validator = require('validator');
const Indicators = require('../../model/indicators');
const db = require('../../config/db');



module.exports = async (req, res)=>{
    try { 
      
        let ID = req.params.id
      
        let {child_boys, child_girls, adole_boys, adole_girls, 
            adult_boys, adult_girls, male, female, beneficiary_status, 
            total_pwd} = req.body;
           
            if(validator.isNumeric(child_boys)==false){
                return res.status(400).json({
                    success: false,
                    message: "child_boys must be number not string",
                    Description: "Kindly put your child_boys in numbers"
                })
            }
            if(validator.isEmpty(child_girls)){
                return res.status(400).json({
                    success: false,
                    message: "Oops child_girls is required",
                    Description: "child_girls cannot be blank"
                })
            }
            if(validator.isNumeric(adole_boys)==false){
                return res.status(400).json({
                    success: false,
                    message: "adole_boys must be number not string",
                    Description: "Kindly put your adole_boys in numbers"
                })
            }
            if(validator.isEmpty(adole_girls)){
                return res.status(400).json({
                    success: false,
                    message: "Oops adole_girls is required",
                    Description: "adole_girls cannot be blank"
                })
            }
            if(validator.isNumeric(adult_boys)==false){
                return res.status(400).json({
                    success: false,
                    message: "adult_boys must be number not string",
                    Description: "Kindly put your adult_boys in numbers"
                })
            }
            if(validator.isEmpty(adult_girls)){
                return res.status(400).json({
                    success: false,
                    message: "Oops adult_girls is required",
                    
                    Description: "adult_girls cannot be blank"
                })
            }
            if(validator.isNumeric(male)==false){
                return res.status(400).json({
                    success: false, 
                    message: "male must be number not string",
                    Description: "Kindly put your male in numbers"
                })
            }
            if(validator.isEmpty(female)){
                return res.status(400).json({
                    success: false,
                    message: "Oops female is required",
                    
                    Description: "female cannot be blank"
                })
            }
            

            if(validator.isEmpty(total_pwd)){
                return res.status(400).json({
                    successs: false,
                    message: "beneficiary status is required",
                    Description: "Must be Aplha-numeric"
                })
            }
            const Transaction = await db.transaction()
        
            const queryIndicator = await Indicators.findOne({
                where:{
                    id: ID,
                    is_deleted: false
                }
            })
                {
                    transaction:Transaction
                }
                queryIndicator.child_boys = child_boys,
                queryIndicator.child_girls = child_girls,
                queryIndicator.adole_boys = adole_boys,
                queryIndicator.adole_girls = adole_girls,
                queryIndicator.adult_boys = adult_boys,
                queryIndicator.adult_girls =    adult_girls,
                queryIndicator.male = male,
                queryIndicator.female =    female,
                queryIndicator.total_pwd = total_pwd,
                queryIndicator.beneficiary_status =    beneficiary_status,
              
           await queryIndicator.save();
           await Transaction.commit();
           return res.status(200).json({
            success: true,
            message: "Indicator updated successfully"
           })
            
    }catch (e) {
        
        console.log(e);
        await Transaction.rollback()
        return res.status(500).json({
            message: "Could not complete operation"
        });    
    }
}
