import React, { Component } from 'react';

import axios from 'axios'
import { updateRole } from '../../ducks/userReducer'
import { connect } from 'react-redux'

import Quote from '../../components/Quote/Quote'

class Home extends Component {

    constructor() {
        super();

        this.state = {
            role: '',
            id: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get('/api/me').then(res => {
            this.setState({
                id: res.data.id
            });
        })
    }



    async handleClick(val) {
        let { id } = this.state
        await this.setState({
            role: val
        })
        await this.props.updateRole(this.state.role, id)
    }


    render() {
        // console.log(this.state)
        console.log(this.props)
        // let { role, id } = this.state
        if (this.props.user.didErr || this.props.user.user.role) {
            return (
                <div>
                    <Quote />

                </div>
            )
        } else {
            return (
                <div className='roleSelector'>
                    <button onClick={() => this.handleClick('employer')}>Sign up as Employer</button>
                    <button onClick={() => this.handleClick('employee')}>Sign up as Employee</button>
                    <Quote />
                </div>
            )
        }


    }
}


let mapStateToProps = state => state;

export default connect(mapStateToProps, { updateRole })(Home);
// <button onClick={() => this.props.updateRole({ role, id })}>Submit</button>
