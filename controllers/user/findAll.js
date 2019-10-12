module.exports = (req, res) => {
    const users = req.user;

    res.json(users)
};