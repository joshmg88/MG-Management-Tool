import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { editProfile, getProfile } from '../../ducks/employeeReducer'
import { connect } from 'react-redux'
import axios from 'axios'

import './EditProfile.css'


class EditProfile extends Component {

    constructor() {
        super()

        this.state = {
            editAddress: '',
            editPhone: '',
            editImage: '',
            editEmail: '',
            id: 0
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/me').then(res => {
            this.setState({ id: res.data.id })
        }).catch((err) => {
            if (err) {
                alert("Please Log In")
                this.props.history.push("/")
            }
            console.log(err)
        })
    }

    async handleEdit() {
        let { editAddress, editPhone, editImage, editEmail, id } = this.state
        await this.props.editProfile({ editEmail, editAddress, editPhone, editImage, id })
        await this.props.getProfile()
    }


    handleInputs = (val, state) => {
        this.setState({
            [state]: val
        });
    }


    render() {
        return (

            <div className="editProfile">
                <h2>Edit Profile:</h2>
                <h4 className="title">
                    Address: <br />
                    <input className="profileInput" type="text" value={this.state.editAddress} onChange={(e) => this.handleInputs(e.target.value, "editAddress")} />
                </h4>
                <h4 className="title">
                    Phone: <br />
                    <input className="profileInput" type="text" value={this.state.editPhone} onChange={(e) => this.handleInputs(e.target.value, "editPhone")} />
                </h4>
                <h4 className="title">
                    Email: <br />
                    <input className="profileInput" type="text" value={this.state.editEmail} onChange={(e) => this.handleInputs(e.target.value, "editEmail")} />
                </h4>


                <Link to='/employeeprofile'><button onClick={this.handleEdit}>Submit</button></Link>

            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { editProfile, getProfile })(EditProfile);