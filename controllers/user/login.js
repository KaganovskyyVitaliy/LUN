module.exports = (req,res) => {
    const {name, password} = req.body;
    const checkUser = users.find(user =>{
        return user.name == name && user.password == password
    });
    checkUser ? res.json(checkUser) : res.json('User not found');

}