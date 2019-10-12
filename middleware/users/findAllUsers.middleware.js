const { provider } = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const query = `select * from user`;

        const [AllUsers] = await provider.promise().query(query);

        if (!AllUsers.length) {
            return res.redirect('/regist');
        }

        req.user = AllUsers;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};