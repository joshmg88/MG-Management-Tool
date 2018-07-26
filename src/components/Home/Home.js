import React, { Component } from 'react';

// import { getUser } from '../../ducks/userReducer'
// import { connect } from 'react-redux'

class Home extends Component {
    render() {
        // const { auth_id } = this.props.getUser
        return (
            <div>
                <p>login, social media, company name</p>
            </div>
        );
    }
}

// const mapStateToProps = state => state;

export default Home;
// <div>
//     {!auth_id ? (
//         <div>
//             <a className="link" href={process.env.REACT_APP_LOGIN}>
//                 <h1 className="link">Login</h1>
//             </a>
//         </div>
//     ) : (
//             <div className='header_render_logout'>
//                 <a className="link" href={process.env.REACT_APP_LOGOUT}>
//                     <h1 className="link">Logout</h1>
//                 </a>
//             </div>
//         )}
// </div>