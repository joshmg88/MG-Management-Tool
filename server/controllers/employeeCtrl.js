const getEmployees = (req, res, next) => {
    const db = req.app.get('db')
    db.employees.get_employees().then(employees => {
        res.status(200).send(employees)
    }).catch(err => { console.log(err) })
}

const getProfile = (req, res, next) => {

    const db = req.app.get('db')
    db.employees.get_profile(req.params.id).then(results => {
        // console.log("current profile", results[0])
        res.status(200).send(results[0])
    }).catch(err => { console.log(err) })
}

const editProfile = (req, res, next) => {
    // console.log(req.body)
    let { editEmail, editAddress, editPhone, editImage, id } = req.body
    const db = req.app.get('db')
    db.employees.update_profile(editEmail, editAddress, editPhone, editImage, id).then(profile => {
        res.status(200).send(profile)
    }).catch(err => { console.log(err) })
}

module.exports = {
    getEmployees,
    editProfile,
    getProfile
}