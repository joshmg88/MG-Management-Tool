import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class EditProfile extends Component {

    constructor() {
        super()

        this.state = {
            editName: '',
            editAddress: '',
            editPhone: '',
            editImage: '',
            editEmail: ''
        };
    }

    handleInputs = (val, state) => {
        console.log(this.state);
        this.setState({
            [state]: val
        });
    }


    render() {
        return (
            <div>
                <h4 className="editImage">
                    image:
                    <input type="file" onChange={(e) => this.handleInputs(e.target.value, "editImage")} />
                </h4>
                <h4 className="editName">
                    Name:
                    <input type="text" onChange={(e) => this.handleInputs(e.target.value, "editName")} />
                </h4>
                <h4 className="editAddres">
                    Address:
                    <input type="text" onChange={(e) => this.handleInputs(e.target.value, "editAddress")} />
                </h4>
                <h4 className="editPhone">
                    Phone:
                    <input type="text" onChange={(e) => this.handleInputs(e.target.value, "editPhone")} />
                </h4>
                <h4>
                    Email:
                    <input type="text" onChange={(e) => this.handleInputs(e.target.value, "editEmail")} />
                </h4>


                <Link to='/employeeprofile'><button>Submit</button></Link>

            </div>
        );
    }
}

export default EditProfile;