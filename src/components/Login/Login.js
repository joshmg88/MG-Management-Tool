import React, { Component } from 'react';

import { getUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'

import './Login.css'


class Login extends Component {

    componentDidMount() {
        this.props.getUser()
    }

    render() {
        // console.log(this.props);
        const { auth_id } = this.props.user.user
        return (
            <div className="login">
                <div >
                    {!auth_id ? (
                        <div>
                            <a href={process.env.REACT_APP_LOGIN}>
                                <button className="login-btn">Login</button>
                            </a>
                        </div>
                    ) : (
                            <div>

                                <a href={process.env.REACT_APP_LOGOUT}>
                                    <button className="login-btn">Logout</button>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { getUser })(Login);