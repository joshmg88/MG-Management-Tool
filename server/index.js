require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const passport = require('passport')
const session = require('express-session')
const port = 3500;

const strategy = require('./strategy')
const { logout, login, getUser } = require('./controllers/userCtrl')
const emplCtrl = require('./controllers/employeeCtrl')
const jobsCtrl = require('./controllers/jobsCtrl')

const app = express();
app.use(bodyParser.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
});

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user, done) => {
    const db = app.get('db');
    db.users
        .get_user_by_authid(user.id)
        .then(response => {
            if (!response[0]) {
                db.users
                    .add_user_by_authid([user.displayName, user.id])
                    .then(res => done(null, res[0]))
                    .catch(err => done(err, null));
            } else {
                return done(null, response[0]);
            }
        })
        .catch(err => done(err, null));
});

passport.deserializeUser((user, done) => {
    done(null, user);
});


massive(process.env.CONNECTION_STRING)
    .then(db => app.set('db', db))
    .catch(err => console.log(err));


app.get('/api/employees', emplCtrl.getEmployees)
app.get('/api/jobs', jobsCtrl.getJobs)

app.get('/login', login);
app.get('/logout', logout);
app.get('/api/me', getUser);

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
