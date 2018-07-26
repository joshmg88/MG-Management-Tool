import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import Login from '../Login/Login';


const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/employeeprofile'>Employee Profile</Link>
                <Link to='/employer'>Employer</Link>
                <Link to='/jobs'>Jobs</Link>
                <Link to='/employeelist'>Employee List</Link>
                <Login />

            </nav>
        </div>
    );
};

export default Header;