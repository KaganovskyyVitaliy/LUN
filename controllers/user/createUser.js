module.exports = (req, res) => {
    let user = req.body;
    user.id = users.length +1;
    users.push(user);
    res.render('login')
}