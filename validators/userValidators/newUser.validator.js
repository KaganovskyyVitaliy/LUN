module.exports = userObject => {
    const { email, name, password } = userObject
        if (!email || !password || !name){
            throw new Error ('User is not valid')
        }
}