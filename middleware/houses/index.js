const checkHouseValidityMiddleware = require('./checkHouseValidity.middleware')
const findAllHouseMiddleware = require('./findAllHouse.middleware')
const isHousePresent = require('./isHousePresent.middleware')

module.exports = {
    checkHouseValidityMiddleware,
    findAllHouseMiddleware,
    isHousePresent
}