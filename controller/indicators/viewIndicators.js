const Indicators = require('../../model/indicators');

module.exports = async (req, res)=>{
    try {
        const viewAllIndicators = await Indicators.findAll({
            where: {
                is_deleted: false,

            }
        })
        if(!viewAllIndicators){
            return res.status(400).json({
                success: false,
                message: "Kindly check your Indicators",
                description: "Indicators not found"
            })
        }
       
        if(viewAllIndicators){
            return res.status(200).json({
                success: true,
                message: "Indicators Retrieved successfully",
                data: viewAllIndicators
            })
        }
    } catch (e) {
        console.log(e);
    }
}