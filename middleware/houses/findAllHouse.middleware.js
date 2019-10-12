const { provider } = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const query = `SELECT * FROM house`;

        const [AllHouse] = await provider.promise().query(query);

        if (!AllHouse.length) {
            return res.redirect('/main');
        }

        req.house = AllHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};