const {userValidator} = require('../../validators')

module.exports =  (req, res, next) =>{
    try {
        const user = req.body

        userValidator.NewUserValidator(user);

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
}