const {provider} = require('../../dataBase');


module.exports = async (req, res, next) => {

    try {

        const { name, password } = req.body;

        const query = `SELECT * FROM user WHERE name = '${name}' AND password = '${password}'`;
        const [checkUserInfo] = await provider.promise().query(query);

        if (!checkUserInfo.length){
            throw new Error(`Wrong username or password`);
        }
        req.user = checkUserInfo;
        next();

    } catch (e) {

        res.status(400).json(e.message);

    }
};