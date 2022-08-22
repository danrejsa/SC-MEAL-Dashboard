const Indicators = require('../../model/indicators');
const Projects = require('../../model/project-infos');
const sequelize = require('sequelize');
const db = require('../../config/db');


module.exports = async (req, res)=>{
    try {
        
        const getTotalReached = await db.query('SELECT sum(child_boys + child_girls + adole_boys + adole_girls + adult_boys + adult_girls + male + female) AS total_reached FROM indicators', {
            type: sequelize.QueryTypes.SELECT
        })
        if(!getTotalReached){
            return res.status(400).json({
               success: false,
               message: "Cannot get total reached check your indicators table",
               Description: "Kindly Cross check your indicators table and project code carefully" 
            })
        }
        const getTarget = await db.query('SELECT sum(target) AS total_target FROM Indicators', {
            type: sequelize.QueryTypes.SELECT
        })
        if(!getTarget){
            return res.status(400).json({
               success: false,
               message: "Cannot get total reached check your indicators table",
               Description: "Kindly Cross check your indicators table and project code carefully" 
            })
        }
        const getTotalBoys = await db.query('SELECT sum(child_boys + adole_boys + adult_boys) AS total_boys FROM Indicators', {
            type: sequelize.QueryTypes.SELECT
        })
        const getTotalGirls = await db.query('SELECT sum(child_girls + adole_girls + adult_girls) AS total_girls FROM Indicators', {
            type: sequelize.QueryTypes.SELECT
        })
       
        const getTotalPWDs = await db.query('SELECT sum(total_pwd) AS total_pwds FROM Indicators', {
            type: sequelize.QueryTypes.SELECT
        })
        const getTotalmales = await db.query('SELECT sum(male) AS total_males FROM Indicators', {
            type: sequelize.QueryTypes.SELECT
        })
        const getTotalFemales = await db.query('SELECT sum(female) AS total_females FROM Indicators', {
            type: sequelize.QueryTypes.SELECT
        })
        if(!getTarget){
            return res.status(400).json({
               success: false,
               message: "Cannot get total reached check your indicators table",
               Description: "Kindly Cross check your indicators table and project code carefully" 
            })
        }
        if(getTarget){
            return res.status(200).json({
               data:{
                target:  getTarget,
                reached: getTotalReached,
                total_boys: getTotalBoys,
                total_girls: getTotalGirls,
                total_pwds: getTotalPWDs,
                total_males: getTotalmales,
                total_females: getTotalFemales
               }
            })
        }
        
    } catch (e) {
        console.log(e);
    }
}