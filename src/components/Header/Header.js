import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import Login from '../Login/Login';
import { connect } from 'react-redux'

// import About from '../About/About'


const Header = (props) => {
    console.log(props)
    return (
        <div className="header">

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
            <div className="about">
                <h1 className="welcome">Welcome to Expert Media Solutions</h1>

                <h4 className='about-text'>We offer a wide range of products and services from single room automation to full home and or business automation including cameras, speakers, TVs, Lighting, projectors and projection screens. We use a variety of products to ensure you get the top of line enjoyment from our services.</h4>

            </div>

        </div>
    );
};

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, null)(Header);
        // <Link to='/employeelist'>Employee List</Link>