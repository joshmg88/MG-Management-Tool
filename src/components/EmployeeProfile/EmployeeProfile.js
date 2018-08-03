import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getProfile } from '../../ducks/employeeReducer'
import { Link } from 'react-router-dom'
// import EditProfile from '../EditProfile/EditProfile'

class EmployeeProfile extends Component {


    constructor() {
        super()

        this.state = {
            // page: 'profile'
        };
    }

    componentDidMount() {
        this.props.getProfile()
    }

    render() {

        console.log(this.props);
        const { name, address, email } = this.props.employee.employees



        return (
            <div>
                <h2>Employee Profile</h2>

                <h3>{name}</h3>
                <h3>{address}</h3>
                <h3>{email}</h3>





                <Link to='/editprofile'><button>Edit Profile</button></Link>

            </div >
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getProfile })(EmployeeProfile);