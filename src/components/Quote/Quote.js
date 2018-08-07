import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
class Quote extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            email: '',
            address: '',
            details: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        let { name, phone, email, address, details } = this.state
        event.preventDefault()
        axios.post('/api/mailer', {
            name,
            phone,
            email,
            address,
            details
        })
    }

    handleChange(val, state) {
        this.setState({
            [state]: val
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {
                    !this.props.user.user.id
                    &&
                    <form onSubmit={this.handleSubmit} method='post' className='quoteRequest'>
                        <label>
                            Your Name:
                <br />
                            <span>
                                <input type="text" value={this.state.name} size='30' onChange={(e) => this.handleChange(e.target.value, 'name')} />
                            </span>
                        </label>
                        <label>
                            Phone:
                <br />
                            <span>
                                <input type="text" value={this.state.phone} size='30' onChange={(e) => this.handleChange(e.target.value, 'phone')} />
                            </span>
                        </label>
                        <label>
                            Email:
                <br />
                            <span>
                                <input type="text" value={this.state.email} size='30' onChange={(e) => this.handleChange(e.target.value, 'email')} />
                            </span>
                        </label>
                        <label>
                            Address:
                <br />
                            <span>
                                <input type="text" value={this.state.address} size='30' onChange={(e) => this.handleChange(e.target.value, 'address')} />
                            </span>
                        </label>
                        <label>
                            Tell us about the project you are inquiring about:
                <br />
                            <span>
                                <input type="text" value={this.state.details} size='30' onChange={(e) => this.handleChange(e.target.value, 'details')} />
                            </span>
                        </label>
                        <button>Request Quote</button>
                    </form>


                }
            </div>
        );
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(Quote);