import React, {Fragment} from 'react';
import classNames from 'classnames';
import {Mutation} from 'react-apollo';
import { CHANGE_EMAIL, CHANGE_PASSWORD, GET_CURRENT_USER } from './../../queries';
import { withRouter } from 'react-router-dom';
import withAuth from './../../hoc/withAuth';
import * as Cookies from 'es-cookie';
import toastr from 'toastr';
import { Helmet } from 'react-helmet';

const initialState = {
    newEmail: '',
    password: '',
    passwordConfirm: '',
    error: '',
    passwordMatch: null
}

class UpdateAccount extends React.Component {

    constructor(props){
        super();
        this.state = {
            ...initialState
        }
    }

    componentDidMount(){
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
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

    confirmPW(){
        const { password, passwordConfirm } = this.state
        const isMatch = password !== passwordConfirm && password.length <= 7;
        this.setState({
            passwordMatch: isMatch
        });
    }

    validateEmail(){
        const { newEmail } = this.state
        this.state;
        const isInvalid = !newEmail;
        return isInvalid;
    }

    validatePassword() {
        const { password, passwordConfirm } = this.state
        this.state;
        const isInvalid = !password || password !== passwordConfirm || password.length <= 2;
        return isInvalid;
    }

    handleChangeEmail(event, changeEmail) {
        event.preventDefault();
        changeEmail().then(async ({data}) => {
            toastr.success('We have updated your email!', 'Saved!');
            this.clearState();
        }).catch(error => {
            this.setState({
                error: 'An error has occured.'
            })
        });
    }

    handleChangePassword(event, changePassword) {
        event.preventDefault();
        changePassword().then(async ({data}) => {
            toastr.success('We have updated your password!', 'Saved!');
            this.clearState();
        }).catch(error => {
            this.setState({
                error: 'An error has occured.'
            })
        });  
    }

    head() {
        return (
            <Helmet bodyAttributes={{class: "updateAccountPage"}}>
                <title>My Account - React Starter Kit</title>
            </Helmet>
        );
    }

    render(){

        const { newEmail, password, passwordConfirm } = this.state
        this.state;
        
        return (
            <Fragment>
            {this.head()}
            <div className="column column_12_12">
                <div className="signUp authForm">

                    <h1 className="dark_headline">
                        Update your email
                    </h1>
                    
                    <Mutation 
                        mutation={CHANGE_EMAIL}
                        variables={{ currentEmail: this.props.session.getCurrentUser.email, newEmail }}
                        refetchQueries={() => [
                            {query: GET_CURRENT_USER}
                        ]}>
                        
                        {(changeEmail, { data, loading, error }) => {

                            return (
                                <form onSubmit={event => this.handleChangeEmail(event, changeEmail)}>

                                    <div className="form_wrap updateAccountEmailForm">

                                        <div className="form_row">

                                            <div className="form_item">
                                                <p>Account holder: {this.props.session.getCurrentUser.firstName} {this.props.session.getCurrentUser.lastName}</p>
                                                <p>Username: {this.props.session.getCurrentUser.userName}</p>
                                                <p>Current email: {this.props.session.getCurrentUser.email}</p>
                                                <div className="form_input">
                                                    <input type="email" name="newEmail" placeholder="Email" value={newEmail} onChange={this.handleChange.bind(this)} />
                                                    <span className="bottom_border"></span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form_buttons">
                                            <button className="btn" type="submit"
                                            disabled={ loading || this.validateEmail() }>
                                            Update email</button>
                                        </div>

                                    </div>

                                </form>         
                            );
                            
                        }}
                        
                    </Mutation>

                </div>
            </div>

            <div className="column column_12_12">
                <div className="signUp authForm">

                    <h1 className="dark_headline">
                        Change your password
                    </h1>
                    
                    <Mutation 
                        mutation={CHANGE_PASSWORD}
                        variables={{ email: this.props.session.getCurrentUser.email, password: password }}
                        refetchQueries={() => [
                            {query: GET_CURRENT_USER}
                        ]}>
                        
                        {(changePassword, { data, loading, error }) => {

                            return (
                                <form onSubmit={event => this.handleChangePassword(event, changePassword)}>

                                    <div className="form_wrap updateAccountPasswordForm">

                                        <div className="form_row">

                                            <div className={classNames({'error-label' :true, 'passwordMatch' : !this.state.passwordMatch })}>
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

                                        <div className="form_buttons">
                                            <button className="btn" type="submit"
                                            disabled={ loading || this.validatePassword() }>
                                            Update Password</button>
                                        </div>

                                    </div>

                                </form>         
                            );
                            
                        }}
                        
                    </Mutation>

                </div>
            </div>
            </Fragment>
        )
    }
}

export default withAuth(session => session && session.getCurrentUser)(withRouter(UpdateAccount));