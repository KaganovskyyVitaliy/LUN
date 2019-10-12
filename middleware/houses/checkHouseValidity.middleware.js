const {houseValidator} = require('../../validators')

module.exports = async (req, res, next) => {
    try {
        const house = req.body

        houseValidator.NewHouseValidator(house);

        next() 
    } catch (e) {
        res.status(400).json(e.message)
    }
    

}