import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getEmployees } from '../../ducks/employeeReducer'
import JobForm from '../Jobs/JobForm'

class Employer extends Component {

    componentDidMount() {
        this.props.getEmployees()

    }

    render() {
        console.log(this.props);
        const { employees } = this.props.employee



        let employeeList = employees.map((employees, i) => {
            return <p key={i}>{employees.name} <br /> {employees.address}</p>
        })
        return (
            <div>
                <h2>Employer Profile</h2>
                {employeeList}

                <JobForm />

            </div>
        );
    };
}
const mapStateToProps = state => state
export default connect(mapStateToProps, { getEmployees })(Employer);