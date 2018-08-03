import React, { Component } from 'react';

import axios from 'axios'
import { updateRole } from '../../ducks/userReducer'
import { connect } from 'react-redux'

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
        return (

            <div>
                <p>login, social media, company name</p>
                <div className='roleSelector'>
                    <button onClick={() => this.handleClick('employer')}>Sign up as Employer</button>
                    <button onClick={() => this.handleClick('employee')}>Sign up as Employee</button>
                </div>


            </div>
        );
    }
}


let mapStateToProps = state => state;

export default connect(mapStateToProps, { updateRole })(Home);
        // <button onClick={() => this.props.updateRole({ role, id })}>Submit</button>
        // <div className='quoteRequest'>
        //     <p>
        //         Your Name:
        //         <br />
        //         <span>
    //             <input type="text" value size='30' />
    //         </span>
    //     </p>
    //     <p>
    //         Phone:
    //         <br />
    //         <span>
    //             <input type="text" value size='30' />
    //         </span>
    //     </p>
    //     <p>
    //         Email Address:
    //         <br />
    //         <span>
    //             <input type="text" value size='30' />
    //         </span>
    //     </p>
    //     <p>
    //         Address:
    //         <br />
    //         <span>
    //             <input type="text" value size='30' />
    //         </span>
    //     </p>
    //     <p>
    //         Tell us about the project you are inquiring about:
    //         <br />
    //         <span>
    //             <input type="text" value size='30' />
    //         </span>
    //     </p>
    //     <p>
    //         <input type="submit" value="REQUEST A QUOTE" className="" />
    //     </p>
    // </div>
