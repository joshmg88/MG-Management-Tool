import React, { Component } from 'react';
import axios from 'axios'

class EmployeeList extends Component {

    constructor() {
        super();

        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        axios.get('/api/employees').then(res => {
            this.setState({
                employees: res.data
            });
            console.log(res.data)
        })
    }


    render() {
        const { employees } = this.state
        let employeeList = employees.map((e, i) => {
            // return <li key={i}>{e.name} {e.address}</li>
            return <p key={i}>{e.name} </p>
        })
        return (
            <div>
                {employeeList}
            </div>
        );
    }
}

export default EmployeeList;