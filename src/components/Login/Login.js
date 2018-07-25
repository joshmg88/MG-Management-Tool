import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            isLoggedIn: true
        };
    }

    handleLoginClick = () => {
        this.setState({
            isLoggedIn: false
        });
    }

    handleLogoutClick = () => {
        this.setState({
            isLoggedIn: true
        });
    }


    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.isLoggedIn ?

                    <a href={process.env.REACT_APP_LOGIN}><div onClick={this.handleLoginClick}>Login</div></a> :
                    <a href={process.env.REACT_APP_LOGOUT}><button onClick={this.handleLogoutClick}>Logout</button></a>
                }
            </div>

        );
    }
}

export default Login;