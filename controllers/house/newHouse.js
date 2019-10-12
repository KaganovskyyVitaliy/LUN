module.exports = (req, res) => {
    let house = req.body;
    house.id = houses.length + 1;
    houses.push(house);
    res.render('main')
}