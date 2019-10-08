module.exports = (req, res) => {
    const fUser = users.find(users => +req.params.userID === users.id);
    fUser ? res.json(fUser) : res.end('User is not found')
}