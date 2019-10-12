module.exports = (req, res) => {
    const fHouse = houses.find(houses => +req.params.houseID === houses.id);
    fHouse ? res.json(fHouse) : res.end('House is not found')
}