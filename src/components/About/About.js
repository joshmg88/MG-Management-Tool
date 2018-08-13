import React from 'react';
import { connect } from 'react-redux'
import './About.css'

const About = (props) => {
    if (props.user.user.role === null) {
        return (
            <div className="about">
                <h4 className='about-text'>If this is your first time logging in you will need to select a role, this will determine your permissions for the website.</h4>
            </div>
        )
    }
    if (props.user) {
        return (
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
        )
    }








    //     <h4 className='about-text'>As an employer you are able to move to the 'Employer' tab where you can see all of your employees and create jobs, to view them navgate to the 'Jobs' tab.</h4>

    //     <h4 className='about-text'>Now that you are on the 'Employer' tab you can view your employees and create jobs</h4>

    //     <h4 className='about-text'>on the 'Jobs' tab you can now see created jobs assign jobs to employees or delete the jobs.</h4>

    //     <h4 className='about-text'>As an employee you can only view your profile page</h4>

    //     <h4 className='about-text'>While on the 'Employee' profile page you will be able to see your profile information as well as update it.  You can also see the jobs that have been assigned to you.</h4>

};

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(About);