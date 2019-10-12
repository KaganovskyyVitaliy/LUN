const {provider} = require('../../dataBase');

module.exports = async (req,res) => {

    const {city,street,area,price} = req.body;

    const query = `INSERT INTO house (city,street,area,price) VALUES(?,?,?,?)`;

    await provider.promise().query(query,[city,street,area,price]);

    res.render('main');

};