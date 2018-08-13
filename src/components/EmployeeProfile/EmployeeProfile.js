import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getProfile } from '../../ducks/employeeReducer'
import { assignedJobs } from '../../ducks/jobReducer'
import { Link } from 'react-router-dom'

import './EmployeeProfile.css'

class EmployeeProfile extends Component {


    constructor() {
        super()

        this.state = {

        };
    }

    componentDidMount() {
        this.props.getProfile(this.props.match.params.user_id)
        this.props.assignedJobs(this.props.match.params.user_id)
    }

    render() {
        const { name, address, email, phone } = this.props.employee.employees
        const { jobs } = this.props.job

        let assignedJob = jobs.map((e, i) => {
            return <div className="listItem" key={i}>
                <h4 className="customer">
                    Customer: <br />
                </h4>
                {e.name}
                <h4 className="customer">
                    Address: <br />
                </h4>
                {e.address}
                <h4 className="customer">
                    Phone:<br />
                </h4>
                {e.phone}
                <h4 className="customer">
                    Job Details: <br />
                </h4>
                {e.details}
                <h4 className="customer">
                    Estimate Hours: <br />
                </h4>
                {e.est_hours}

            </div>
        })


        return (
            <div>
                <h2>Employee Profile</h2>
                <div className="employeeProfile">
                    <h4 className="title">Name:</h4>
                    <p> {name}</p>
                    <h4 className="title">Address:</h4>
                    <p>{address}</p>
                    <h4 className="title">Email:</h4>
                    <p>{email}</p>
                    <h4 className="title">Phone:</h4>
                    <p>{phone}</p>
                    <Link to='/editprofile'><button className='btn' >Edit Profile</button></Link>
                </div>

                <h2>Assigned Jobs:</h2>

                <div className="jobs">
                    {assignedJob}
                </div>


            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getProfile, assignedJobs })(EmployeeProfile);