import React from 'react';
import classNames from 'classnames';
import { Mutation } from 'react-apollo';
import { SIGNIN_USER } from './../../queries';
import { withRouter } from 'react-router-dom';
import * as Cookies from 'es-cookie';
import { Helmet } from 'react-helmet';
import {NavLink} from 'react-router-dom';

const initialState = {
    email: '',
    password: '',
    error: ''
}

class Signin extends React.Component {

    constructor(props){
        super();
        this.state = {
            ...initialState
        }
    }

    clearState() {
        this.setState({...initialState})
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event, signinUser) {
        event.preventDefault();
        signinUser().then(async ({data}) => {
            Cookies.set('token', data.signinUser.token);
            await this.props.refetch();
            this.clearState();
            this.props.history.push('/dashboard');

        }).catch(error => {
            this.setState({
                error: error.graphQLErrors.map(x => x.message)
            })
            console.error("ERR =>", error.graphQLErrors.map(x => x.message));
        });
    }

    validateForm() {
        const { email, password } = this.state
        this.state;
        const isInvalid = !email || !password;
        return isInvalid;
    }

    head() {
        return (
            <Helmet bodyAttributes={{class: "logInPage"}}>
                <title>LogIn - React Starter Kit</title>
            </Helmet>
        );
    }

    render(){

        const { email, password } = this.state
        this.state;
        
        return (
            <div className="column column_12_12">
                {this.head()}
                <div className="signUp authForm">

                    <h1 className="dark_headline">
                        LogIn
                    </h1>

                    <Mutation mutation={SIGNIN_USER} variables={{ email, password }}>

                        {(signinUser, { data, loading, error }) => {

                            return (

                                <form className="form" onSubmit={event => this.handleSubmit(event, signinUser)}>

                                    <div className="form_wrap">

                                        <div className={classNames({'error-label' : this.state.error != ''})}>
                                            {this.state.error}
                                        </div>

                                        <div className="form_row">

                                            <div className="form_item">
                                                <div className="form_input">
                                                    <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange.bind(this)} />
                                                    <span className="bottom_border"></span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form_row">

                                            <div className="form_item">
                                                <div className="form_input">
                                                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange.bind(this)} />
                                                    <span className="bottom_border"></span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="formBottomLinks">
                                            <p>
                                                Don't have an account? <NavLink to="/signup">Join now!</NavLink>
                                            </p>
                                            <p>
                                                Forgot your password? <NavLink to="/account-recovery">Reset here</NavLink>
                                            </p>
                                        </div>
                                    
                                        <div className="form_buttons">
                                            <button type="submit" className="btn"
                                            disabled={ loading || this.validateForm() }>
                                            LogIn</button>
                                        </div>
                                    
                                    </div>

                                </form> 

                            );
                        }}
                        
                    </Mutation>

                </div>
            </div>
        )
    }
}

export default withRouter(Signin);
