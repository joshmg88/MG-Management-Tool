const passport = require('passport')

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('http://localhost:3000/#/login')
    })
}

const getUser = (req, res) => {
    console.log(req.user)
    if (!req.user) {
        res.status(401).send({ message: 'Not Logged In' })
    } else {
        res.status(200).send(req.user)
    }
}

const updateRole = (req, res, next) => {
    let { role, id } = req.body

    console.log("updateRole Fired", role, id)
    const db = req.app.get('db')
    db.users.update_role(role, id).then(results => {
        res.status(200).send(results)
    }).catch(err => { console.log(err) })
}

const login = passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:3000/#/login'
})

module.exports = {
    logout,
    login,
    getUser,
    updateRole
}
