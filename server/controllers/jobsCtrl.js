const getJobs = (req, res, next) => {
    const db = req.app.get('db')
    db.jobs.get_Jobs().then(jobs => {
        res.status(200).send(jobs)
    }).catch(err => { console.log(err) })
}

module.exports = {
    getJobs
}