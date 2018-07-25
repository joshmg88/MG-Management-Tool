const passport = require('passport')

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('http://localhost:3000/#/login')
    })
}

const getUser = (req, res) => {
    if (!req.user) {
        res.status(500).send({ message: 'Not Logged In' })
    } else {
        res.status(200).send(req.user)
    }
}

const login = passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:3000/#/login'
})

module.exports = {
    logout,
    login,
    getUser
}