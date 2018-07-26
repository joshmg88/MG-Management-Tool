import React, { Component } from 'react';

class Login extends Component {


    render() {
        console.log(this.state);
        return (
            <div>
                <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
                <a href={process.env.REACT_APP_LOGOUT}><button>Logout</button></a>
            </div>

        );
    }
}

export default Login;