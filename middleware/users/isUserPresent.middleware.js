module.exports = (req, res, next) => {
    try {
        const { userID } = req.params;

        const isUserPresent = users.find(user => user.id === +userID);

        if (!isUserPresent) {
            throw new Error(`User with ${userID} is not present`)
            req.user = isUserPresent;
            next();
        }
    } catch (e) {
        res.status(400).json(e.message)
    }

}