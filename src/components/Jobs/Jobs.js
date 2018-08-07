import React, { Component } from 'react';
import { getJobs, deleteJob } from '../../ducks/jobReducer'
import { getEmployees } from '../../ducks/employeeReducer'
import { connect } from 'react-redux'

class Jobs extends Component {

    constructor() {
        super()

        this.state = {

        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.getJobs()
        this.props.getEmployees()
    }

    async handleDelete(e) {
        await this.props.deleteJob(e)

        await this.props.getJobs()
    }

    render() {
        const { jobs } = this.props.job
        const { employees } = this.props.employee


        let myEmployees = employees.map((employees, i) => {
            console.log(employees)
            return <div key={i}>
                <a >{employees.name}</a>
            </div>
        })

        let jobsList = jobs.map((e, i) => {
            return <div key={i}>
                Customer Name: {e.name} <br />
                Address: {e.address} <br />
                Job Details: {e.details} <br />
                Price: {e.price} <br />
                Estimate Hours: {e.est_hours} <br />
                <button onClick={() => this.handleDelete(e)}>Delete</button>
                {myEmployees} <br />
            </div>
        })

        return (
            <div>
                <h2>Assigned Jobs</h2>
                {jobsList}


            </div>
        );
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getJobs, deleteJob, getEmployees })(Jobs);