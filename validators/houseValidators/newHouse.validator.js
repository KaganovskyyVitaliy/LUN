module.exports = houseObject => {
    const { city, street, area, price } = houseObject;
    if (!city || !street || !area || !price){
        throw new Error ('House meta is not present')
    }
}