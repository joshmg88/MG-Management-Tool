import React, { Component } from 'react';

import { Link } from 'react-router-dom'
// import EditProfile from '../EditProfile/EditProfile'

class EmployeeProfile extends Component {


    constructor() {
        super()

        this.state = {
            // page: 'profile'
        };
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <h2>Employee Profile</h2>
                <Link to='/editprofile'><button>Edit Profile</button></Link>

            </div>
        );
    }
}

export default EmployeeProfile;