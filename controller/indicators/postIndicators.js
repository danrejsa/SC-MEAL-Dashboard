
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');
const Indicators = require('../../model/indicators');
const Projects = require('../../model/project-infos');



module.exports = async (req, res)=>{
    try {

        let { code, name, target, child_boys, child_girls, adole_boys, adole_girls, 
            adult_boys, adult_girls, male, female, beneficiary_status, 
            total_pwd, project_code} = req.body;

            if(validator.isEmpty(project_code)){
                return res.status(400).json({
                    success: false,
                    message: "Opps Project Code cant be blank"
                })
            }
            

            if(validator.isEmpty(code)){
                return res.status(400).json({
                    success: false,
                    message: "Oops Indicator code fill is required",
                    Description: "Indicator code cannot be blank "
                })
            }
            if(validator.isEmpty(name)){
                return res.status(400).json({
                    success: false,
                    message: "name can not be blank",
                    Description: "name is required"
                })  
              }
            
            if(validator.isNumeric(target)==false){
                return res.status(400).json({
                    success: false,
                    message: "child_boys must be number not string",
                    Description: "Kindly put your child_boys in numbers"
                })
            }
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

            const AuthencateProject = await Projects.findOne({
                where:{
                    p_code: project_code,
                    is_deleted: false,
                }
            })
            if(!AuthencateProject){
                return res.status(400).json({
                    success: false,
                    message: "Invalid Project Code",
                    Description: "Project Code Must be provided"
                })
            }

            const projectCode = AuthencateProject.p_code;
            const projectID = AuthencateProject.id;
            const date = new Date();
   
        try {
           
            const createIndicators = await Indicators.create({
                id: uuidv4(),
                p_id: projectID,
                code: code,
                name: name,
                target: target,
                p_code : projectCode,
                child_boys: child_boys,
                child_girls:    child_girls,
                adole_boys: adole_boys,
                adole_girls:    adole_girls,
                adult_boys: adult_boys,
                adult_girls:    adult_girls,
                male: male,
                female:    female,
                project_code: project_code,
                total_pwd: total_pwd,
                beneficiary_status:    beneficiary_status,
                is_deleted: 0,
                date: date
              

            })
            
            return res.status(201).json({
            message: "Indicator Created successfully"
            })
        } catch (e) {
           
            console.log(e);
            return res.status(500).json({
                message: "Could not complete operation"
            });    
        }
        
    } catch (e) {
        console.log(e);
        // return res.status(400).json({
            
        //     message: "The Indicator information must be filled"
        // });
    }
}
