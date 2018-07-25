import React, { Component } from 'react'

class Logout extends Component {
    render() {
        return (
            <div>
                <a href={process.env.REACT_APP_LOGOUT}><button>Logout</button></a>
            </div>
        );
    }
}

export default Logout;