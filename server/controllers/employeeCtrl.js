const getEmployees = (req, res, next) => {
    const db = req.app.get('db')
    db.employees.get_employees().then(employees => {
        res.status(200).send(employees)
    }).catch(err => { console.log(err) })
}

module.exports = {
    getEmployees
}