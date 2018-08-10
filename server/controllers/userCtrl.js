const passport = require('passport')

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect(process.env.REACT_APP_CLIENT + '/#/')
    })
}

const getUser = (req, res) => {
    if (!req.user) {
        res.status(401).send({ message: 'Not Logged In' })
    } else {
        res.status(200).send(req.user)
    }
}

const updateRole = (req, res, next) => {
    let { role, id } = req.body
    const db = req.app.get('db')
    db.users.update_role(role, id).then(results => {
        res.status(200).send(results)
    }).catch(err => { console.log(err) })
}

const login = passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_CLIENT + '/#/',
    failureRedirect: process.env.REACT_APP_CLIENT + '/#/login'
    // successRedirect: '/',
    // failureRedirect: '/login'
})

module.exports = {
    logout,
    login,
    getUser,
    updateRole
}
