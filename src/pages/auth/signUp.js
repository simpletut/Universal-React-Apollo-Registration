import React from 'react';
import classNames from 'classnames';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from './../../queries';
import { withRouter } from 'react-router-dom';
import * as Cookies from 'es-cookie';
import { Helmet } from 'react-helmet';
import {NavLink} from 'react-router-dom';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    passwordConfirm: '',
    error: '',
    passwordMatch: null
}

class Signup extends React.Component {

    constructor(props) {
        super();
        this.state = {
            ...initialState
        }

    }

    clearState() {
        this.setState({ ...initialState })
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    confirmPW() {
        const { password, passwordConfirm } = this.state
        const isMatch = password !== passwordConfirm && password.length <= 7;
        this.setState({
            passwordMatch: isMatch
        });
    }

    handleSubmit(event, signupUser) {
        event.preventDefault();
        signupUser().then(async ({ data }) => {
            Cookies.set('token', data.signupUser.token);
            await this.props.refetch();
            this.clearState();
            this.props.history.push('/dashboard');
        }).catch(error => {
            this.setState({
                error: 'Either your email or username is already taken. Please adjust and try again.'
            })
        });

    }

    validateForm() {
        const { firstName, lastName, email, userName, password, passwordConfirm } = this.state
        this.state;
        const isInvalid = !firstName || !lastName || !email || !userName || !password || password !== passwordConfirm || password.length <= 7;
        return isInvalid;
    }

    head() {
        return (
            <Helmet bodyAttributes={{ class: "signUpPage" }}>
                <title>Join now! - React Starter Kit</title>
            </Helmet>
        );
    }

    render() {

        const { firstName, lastName, email, userName, password, passwordConfirm } = this.state
        this.state;

        return (
            <div className="column column_12_12">
                {this.head()}
                <div className="signUp authForm">

                    <h1 className="dark_headline">
                        Join now
                    </h1>

                    <Mutation mutation={SIGNUP_USER} variables={{ firstName, lastName, email, userName, password }}>

                        {(signupUser, { data, loading, error }) => {

                            return (
                                <form onSubmit={event => this.handleSubmit(event, signupUser)}>

                                    <div className="form_wrap">

                                        <div className={classNames({ 'error-label': this.state.error != '' })}>
                                            {this.state.error}
                                        </div>

                                        <div className="form_row">

                                            <div className="form_item">
                                                <div className="form_input">
                                                    <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange.bind(this)} />
                                                    <span className="bottom_border"></span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form_row">

                                            <div className="form_item">
                                                <div className="form_input">
                                                    <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange.bind(this)} />
                                                    <span className="bottom_border"></span>
                                                </div>
                                            </div>

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
                                                    <input type="text" name="userName" placeholder="Username" value={userName} onChange={this.handleChange.bind(this)} />
                                                    <span className="bottom_border"></span>
                                                </div>
                                                <div className="helperText">
                                                    Please note that you will not be able to change this after your registration.
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form_row">

                                            <div className={classNames({ 'error-label': true, 'passwordMatch': !this.state.passwordMatch })}>
                                                Please check that your passwords match and are at least 8 characters.
                                            </div>

                                            <div className="form_item">

                                                <div className="form_input">
                                                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange.bind(this)} />
                                                    <span className="bottom_border"></span>
                                                </div>

                                                <div className="helperText">
                                                    Password must be a minium of 8 characters in length.
                                                </div>

                                            </div>

                                        </div>

                                        <div className="form_row">

                                            <div className="form_item">

                                                <div className="form_input">
                                                    <input type="password" name="passwordConfirm" placeholder="Password confirm" value={passwordConfirm} onChange={this.handleChange.bind(this)} onBlur={this.confirmPW.bind(this)} />
                                                    <span className="bottom_border"></span>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="formBottomLinks">
                                            <p>
                                                Already have an account? <NavLink to="/signin">Sign-in</NavLink>
                                            </p>
                                        </div>

                                        <div className="form_buttons">
                                            <button className="btn" type="submit"
                                                disabled={loading || this.validateForm()}>
                                                Register</button>
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

export default withRouter(Signup);