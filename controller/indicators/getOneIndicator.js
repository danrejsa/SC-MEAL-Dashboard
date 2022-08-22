
const Indicators = require('../../model/indicators');

module.exports = async (req, res)=>{
    try {
        let ID = req.params.id
        const getIndicator = await Indicators.findOne({
            where: {
                is_deleted: false,
                id: ID

            }
        })
        if(!getIndicator){
            return res.status(400).json({
                success: false,
                message: "Kindly check your Indicators",
                description: "Indicators not found"
            })
        }
       const data = getIndicator;
        if(getIndicator){
            return res.status(200).json({
                success: true,
                message: "Indicators Retrieved successfully",
                data: data
            })
        }
    } catch (e) {
        console.log(e);
    }
}