import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import Login from '../Login/Login';
import { connect } from 'react-redux'



const Header = (props) => {
    return (
        <div className="header">
            <div className="background-opac"></div>

            <nav className="navbar">

                <Link to='/' className="links">Home</Link>
                {props.user.role === 'employee'
                    && <Link to={`/employeeprofile/${props.user.id}`} className="links">Employee Profile</Link>}
                {props.user.role === 'employer' &&
                    <Link to='/employer' className="links">Employer</Link>}
                {props.user.role === 'employer'
                    && <Link to='/jobs' className="links">Jobs</Link>
                }

                <Login />
            </nav>
            <div className="about" >
                <h1 className="welcome">Welcome to MG Management Tool</h1>
                <h4 className='about-text'>The objective of this project is to give employers the abiity to manage their employees and show off their productss in one App. A few main features include: <br />
                    <ul>
                        <li>Clients are able to send an email to the employer</li>
                        <li>Employers are able to create Jobs and assign them to employees</li>
                        <li>Employees are able to log into their profile and see the jobs that have been assigned to them.</li>
                    </ul>
                </h4>
            </div>
        </div>
    );
};

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, null)(Header);