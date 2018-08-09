const passport = require('passport')

const logout = (req, res) => {
    req.session.destroy(() => {
        if (process.env.LOCAL) {
            res.redirect('http://localhost:3000/#/')
        } else {
            res.redirect('/')
        }
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

const login = passport.authenticate('auth0', process.env.LOCAL ? {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:3000/#/login'
} : {
        successRedirect: '/',
        failureRedirect: '/login'
    })

module.exports = {
    logout,
    login,
    getUser,
    updateRole
}
