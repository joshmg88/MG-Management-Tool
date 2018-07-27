import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { editProfile } from '../../ducks/employeeReducer'
import { connect } from 'react-redux'
import axios from 'axios'


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
    }

    componentDidMount() {
        axios.get('/api/me').then(res => {
            // console.log(res)
            this.setState({ id: res.data.id })
        }).catch((err) => {
            if (err) {
                alert("Please Log In")
                this.props.history.push("/")
            }
            console.log(err)
        })
    }


    handleInputs = (val, state) => {
        // console.log(this.state);
        this.setState({
            [state]: val
        });
    }


    render() {
        // console.log(this.state.id)
        let { editAddress, editPhone, editImage, editEmail, id } = this.state
        return (
            <div>
                <h4 className="editImage">
                    image:
                    <input type="file" value={this.state.editImage} onChange={(e) => this.handleInputs(e.target.value, "editImage")} />
                </h4>
                <h4 className="editAddress">
                    Address:
                    <input type="text" value={this.state.editAddress} onChange={(e) => this.handleInputs(e.target.value, "editAddress")} />
                </h4>
                <h4 className="editPhone">
                    Phone:
                    <input type="text" value={this.state.editPhone} onChange={(e) => this.handleInputs(e.target.value, "editPhone")} />
                </h4>
                <h4>
                    Email:
                    <input type="text" value={this.state.editEmail} onChange={(e) => this.handleInputs(e.target.value, "editEmail")} />
                </h4>


                <Link to='/employeeprofile'><button onClick={() => this.props.editProfile({ editEmail, editAddress, editPhone, editImage, id })}>Submit</button></Link>

            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { editProfile })(EditProfile);