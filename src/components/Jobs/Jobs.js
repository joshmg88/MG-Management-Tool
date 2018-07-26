import React, { Component } from 'react';
import { getJobs, deleteJob } from '../../ducks/jobReducer'
import { connect } from 'react-redux'

class Jobs extends Component {

    componentDidMount() {
        this.props.getJobs()
    }

    handleDelete = (e) => {
        this.props.deleteJob(e)
    }

    render() {
        const { jobs } = this.props.job
        let jobsList = jobs.map((e, i) => {
            return <div key={i}>
                Customer Name: {e.customer_name} <br />
                Address: {e.customer_address} <br />
                Job Details: {e.job_details} <br />
                Price: {e.price} <br />
                <button onClick={() => this.handleDelete(e)}>Delete</button>
            </div>
        })
        return (
            <div>
                <h2>Assigned Jobs</h2>
                {jobsList}


            </div>
        );
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getJobs, deleteJob })(Jobs);