import React, { Component } from 'react';
import { getJobs, deleteJob, selectEmployee } from '../../ducks/jobReducer'
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
        console.log(this.props)
        const { jobs } = this.props.job
        const { employees } = this.props.employee



        let jobsList = jobs.map((papaE, papaI) => {

            return <div key={papaI}>
                Customer Name: {papaE.name} <br />
                Address: {papaE.address} <br />
                Job Details: {papaE.details} <br />
                Price: {papaE.price} <br />
                Estimate Hours: {papaE.est_hours} <br />
                <button onClick={() => this.handleDelete(papaE)}>Delete</button>


                <select onChange={(e) => this.props.selectEmployee(e.target.value, papaE.job_id)}> {
                    employees.map((e, i) => {
                        return <option key={i} value={e.id}>

                            {e.name}

                        </option>


                    })}</select> <br />
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

export default connect(mapStateToProps, { getJobs, deleteJob, getEmployees, selectEmployee })(Jobs);