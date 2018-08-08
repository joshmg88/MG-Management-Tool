import React, { Component } from 'react';
import { addJob } from '../../ducks/jobReducer'
import { connect } from 'react-redux'
import './jobform.css'

class JobForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: '',
            customerAddress: '',
            jobDescription: '',
            customerPhone: '',
            estPrice: 0,
            estHours: 0
        };
    }

    handleInputs = (val, state) => {
        this.setState({
            [state]: val
        });
    }

    render() {
        // console.log(this.props);
        let { customerName, customerAddress, customerPhone, jobDescription, estPrice, estHours } = this.state;
        return (
            <div className="jobform">
                <form >
                    <label>
                        Customer Name:
                    <br />
                        <input className="job-input" type="text" value={this.state.customerName} onChange={(e) => this.handleInputs(e.target.value, "customerName")} />
                    </label>
                    <br />
                    <label>
                        Customer Address:
                    <br />
                        <input className="job-input" value={this.state.customerAddress} onChange={(e) => this.handleInputs(e.target.value, "customerAddress")} />
                    </label>
                    <br />
                    <label>
                        Customer Phone Number:
                    <br />
                        <input className="job-input" value={this.state.customerPhone} onChange={(e) => this.handleInputs(e.target.value, "customerPhone")} />
                    </label>
                    <br />
                    <label>
                        Job Description:
                    <br />
                        <textarea value={this.state.jobDescription} onChange={(e) => this.handleInputs(e.target.value, "jobDescription")}></textarea>
                    </label>
                    <br />
                    <label>
                        Price:
                    <br />
                        <input className="job-input" type="number" value={this.state.estPrice} onChange={(e) => this.handleInputs(e.target.value, "estPrice")} />
                    </label>
                    <br />
                    <label>
                        Hours:
                    <br />
                        <input className="job-input" type="number" value={this.state.estHours} onChange={(e) => this.handleInputs(e.target.value, "estHours")} />
                    </label>
                    <br />
                    <button onClick={() => this.props.addJob({ customerName, customerAddress, customerPhone, jobDescription, estPrice, estHours })}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addJob })(JobForm);