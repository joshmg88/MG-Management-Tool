import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getEmployees } from '../../ducks/employeeReducer'

class Employer extends Component {

    componentDidMount() {
        this.props.getEmployees()
    }

    render() {
        const { getEmployees } = this.props.getEmployees

        let employeeList = getEmployees.map((employees, i) => {
            return <p key={i}>{employees.name}{employees.address}</p>
        })
        return (
            <div>
                <h2>Employer Profile</h2>
                {employeeList}

            </div>
        );
    };
}
const mapStateToProps = state => state
export default connect(mapStateToProps, { getEmployees })(Employer);