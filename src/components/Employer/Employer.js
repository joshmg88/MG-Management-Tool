import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getEmployees } from '../../ducks/employeeReducer'
import JobForm from '../Jobs/JobForm'

import './Employer.css'

class Employer extends Component {

    componentDidMount() {
        this.props.getEmployees()

    }

    render() {
        console.log(this.props);
        const { employees } = this.props.employee



        let employeeList = employees.map((employees, i) => {
            return <div className='employeeList' key={i}>
                <h4 className="employeeInfo">Name:</h4>{employees.name} <br />
                <h4 className="employeeInfo">Address:</h4>{employees.address} <br />
                <h4 className="employeeInfo">Phone:</h4> {employees.phone}
            </div>

        })
        return (
            <div>
                <h3>Employees:</h3>
                <div className="employees">
                    {employeeList}
                </div>

                <JobForm />

            </div>
        );
    };
}
const mapStateToProps = state => state
export default connect(mapStateToProps, { getEmployees })(Employer);