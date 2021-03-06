import React, { Component } from 'react';
import { getJobs, deleteJob, selectEmployee } from '../../ducks/jobReducer';
import { getEmployees } from '../../ducks/employeeReducer';
import { connect } from 'react-redux';
import './Jobs.css';

class Jobs extends Component {
  constructor() {
    super();

    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getJobs();
    this.props.getEmployees();
  }

  async handleDelete(e) {
    await this.props.deleteJob(e);

    await this.props.getJobs();
  }

  render() {
    const { jobs } = this.props.job;
    const { employees } = this.props.employee;

    let jobsList = jobs.map((papaE, papaI) => {
      return (
        <div className="customerList" key={papaI}>
          <h3 className="customerTitle">Customer Name:</h3>
          <h4 className="customerName">{papaE.name}</h4> <br />
          <h4 className="customerTitle">Address:</h4>
          {papaE.address} <br />
          <h4 className="customerTitle">Job Details:</h4>
          {papaE.details} <br />
          <h4 className="customerTitle">Price:</h4>${papaE.price} <br />
          <h4 className="customerTitle">Est Hours:</h4>
          {papaE.est_hours} <br />
          <button className="btn" onClick={() => this.handleDelete(papaE)}>
            Delete
          </button>
          <select
            onChange={e =>
              this.props.selectEmployee(e.target.value, papaE.job_id)
            }
          >
            <option value="0" selected disabled>
              Employees:
            </option>{' '}
            {employees.map((e, i) => {
              return (
                <option key={i} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>{' '}
          <br />
        </div>
      );
    });

    return (
      <div>
        <h2>Current Jobs</h2>
        <div className="allJobs">{jobsList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getJobs, deleteJob, getEmployees, selectEmployee }
)(Jobs);
