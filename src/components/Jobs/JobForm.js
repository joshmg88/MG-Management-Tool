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
            estPrice: 0
        };
    }

    handleInputs = (val, state) => {
        this.setState({
            [state]: val
        });
    }

    render() {
        // console.log(this.props);
        let { customerName, customerAddress, jobDescription, estPrice } = this.state;
        return (
            <form>
                <label>
                    Customer Name:
                    <br />
                    <input type="text" value={this.state.customerName} onChange={(e) => this.handleInputs(e.target.value, "customerName")} />
                </label>
                <br />
                <label>
                    Customer Address:
                    <br />
                    <input value={this.state.customerAddress} onChange={(e) => this.handleInputs(e.target.value, "customerAddress")} />
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
                    <input type="number" value={this.state.estPrice} onChange={(e) => this.handleInputs(e.target.value, "estPrice")} />
                </label>
                <br />
                <button onClick={() => this.props.addJob({ customerName, customerAddress, jobDescription, estPrice })}>Submit</button>


            </form>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addJob })(JobForm);