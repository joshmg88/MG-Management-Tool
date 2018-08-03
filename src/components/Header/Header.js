import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import Login from '../Login/Login';
import { connect } from 'react-redux'


const Header = (props) => {
    console.log(props)
    return (
        <div>
            <nav className="navbar">
                <Link to='/'>Home</Link>
                {props.user.role === 'employee'
                    && <Link to='/employeeprofile'>Employee Profile</Link>}
                {props.user.role === 'employer' &&
                    <Link to='/employer'>Employer</Link>}
                {props.user.role === 'employer'
                    && <Link to='/jobs'>Jobs</Link>
                }

                <Login />

            </nav>
        </div>
    );
};

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, null)(Header);
        // <Link to='/employeelist'>Employee List</Link>