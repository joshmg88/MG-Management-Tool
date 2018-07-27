import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const SecretRoute = (props) => {
    let { component: Component, user } = props;

    return (
        <Route path={props.path} render={props => {
            if (user.user.id) {
                return <Component {...props} />
            } else {
                return <Redirect to="/" />
            }
        }} />
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(SecretRoute)