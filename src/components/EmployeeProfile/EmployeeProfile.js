import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getProfile } from '../../ducks/employeeReducer'
import { assignedJobs } from '../../ducks/jobReducer'
import { Link } from 'react-router-dom'

import './EmployeeProfile.css'
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
        const { name, address, email, phone } = this.props.employee.employees
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
                    <h4 className="title">Name:</h4>
                    <p> {name}</p>
                    <h4 className="title">Address:</h4>
                    <p>{address}</p>
                    <h4 className="title">Email:</h4>
                    <p>{email}</p>
                    <h4 className="title">Phone:</h4>
                    <p>{phone}</p>
                    <Link to='/editprofile'><button>Edit Profile</button></Link>
                </div>

                {assignedJob}


            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getProfile, assignedJobs })(EmployeeProfile);