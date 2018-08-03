const getJobs = (req, res, next) => {
    const db = req.app.get('db')
    db.jobs.get_Jobs().then(jobs => {
        res.status(200).send(jobs)
    }).catch(err => { console.log(err) })
}

const addJob = (req, res, next) => {
    let { customerName, customerAddress, jobDescription, estPrice, estHours } = req.body
    const db = req.app.get('db')
    db.jobs.add_Job([customerName, customerAddress, jobDescription, estPrice, estHours])
        .then(newJob => {
            res.status(200).send(newJob)
        }).catch(err => { console.log(err) })

}

const deleteJob = (req, res, next) => {
    console.log(req.params.id)
    const db = req.app.get('db')
    db.jobs.delete_job(req.params.id)
        .then(job => {
            res.status(200).send(job)
        }).catch(err => { console.log(err) })
}

module.exports = {
    getJobs,
    addJob,
    deleteJob
}