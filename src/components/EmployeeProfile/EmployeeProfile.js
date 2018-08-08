import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getProfile } from '../../ducks/employeeReducer'
import { assignedJobs } from '../../ducks/jobReducer'
import { Link } from 'react-router-dom'
// import EditProfile from '../EditProfile/EditProfile'

class EmployeeProfile extends Component {


    constructor() {
        super()

        this.state = {

        };
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.getProfile(this.props.match.params.user_id)
        this.props.assignedJobs(this.props.match.params.user_id)
    }

    render() {

        console.log(this.props);
        const { name, address, email } = this.props.employee.employees
        const { jobs } = this.props.job

        let assignedJob = jobs.map((e, i) => {
            return <div key={i}>
                {e.name} <br />
                {e.address} <br />
                {e.phone} <br />
                {e.details} <br />
                {e.est_hours} <br />
            </div>
        })


        return (
            <div>
                <h2>Employee Profile</h2>
                <div className="employeeProfile">
                    <h3>{name}</h3>
                    <h3>{address}</h3>
                    <h3>{email}</h3>
                </div>

                {assignedJob}

                <Link to='/editprofile'><button>Edit Profile</button></Link>

            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getProfile, assignedJobs })(EmployeeProfile);