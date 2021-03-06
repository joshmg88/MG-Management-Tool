import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import './Quote.css'
import swal from 'sweetalert2'
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
        }).then(swal({
            title: "Thank you for your request, we will get back to you within 24 hours."
        }))
    }

    handleChange(val, state) {
        this.setState({
            [state]: val
        });
    }

    render() {
        return (
            <div className="quote">
                {
                    !this.props.user.user.id
                    &&
                    <form onSubmit={this.handleSubmit} method='post' className='quoteRequest'>
                        <h3>Quote Request Information</h3>
                        <label className="quote-labels">
                            Your Name: <sub>(first, last)</sub>
                            <br />
                            <span>
                                <input className="quote-input" type="text" value={this.state.name} onChange={(e) => this.handleChange(e.target.value, 'name')} />
                            </span>
                        </label>
                        <label className="quote-labels">
                            Phone:
                <br />
                            <div>
                                <input className="quote-input" type="text" value={this.state.phone} onChange={(e) => this.handleChange(e.target.value, 'phone')} />
                            </div>
                        </label>
                        <label className="quote-labels">
                            Contact Email:
                <br />
                            <div>
                                <input className="quote-input" type="text" value={this.state.email} onChange={(e) => this.handleChange(e.target.value, 'email')} />
                            </div>
                        </label>
                        <label className="quote-labels">
                            Address: <sub>(street, city, state, zipcode)</sub>
                            <br />
                            <div>
                                <input className="quote-input" type="text" value={this.state.address} onChange={(e) => this.handleChange(e.target.value, 'address')} />
                            </div>
                        </label>
                        <label className="quote-labels">
                            Tell us about your project:
                <br />
                            <div>
                                <input className="quote-input" type="text" value={this.state.details} onChange={(e) => this.handleChange(e.target.value, 'details')} />
                            </div>
                        </label>
                        <button className='btn'>Submit</button>
                    </form>
                }
            </div>
        );
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(Quote);