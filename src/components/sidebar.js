import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import webConfig from './../../webConfig';
import withSession from './../hoc/withSession';
import classNames from 'classnames';

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileNavState: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            if(window.outerWidth >= 1024){
                this.setState({
                    mobileNavState: false
                });
            }
        });
    }

    mobile_nav_button() {
        const vWidth = window.outerWidth;
        if(vWidth <= 1024){
            this.setState({
                mobileNavState: !this.state.mobileNavState
            });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="logo_wrapper">
                    <NavLink to="/" onClick={() => this.mobile_nav_button()}>
                        <img src={`${webConfig.siteURL}/assets/graphics/logo.png`} />
                    </NavLink>
                </div>

                <nav className="signbar_nav">

                    <div className={classNames({ 'headline': true, 'mobile_nav_button': true, 'active': this.state.mobileNavState })} onClick={() => this.mobile_nav_button()}>
                        Main navigation
                    </div>

                    <div className={classNames({ 'mobile_nav_toggle': true, 'active': this.state.mobileNavState })}>

                        {this.props.session.getCurrentUser === null &&
                            <ul>
                                <li>
                                    <NavLink to="/users" onClick={() => this.mobile_nav_button()}>
                                        <i className="fas fa-users"></i>
                                        Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signin" onClick={() => this.mobile_nav_button()}>
                                        <i className="fas fa-user"></i>
                                        LogIn</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup" onClick={() => this.mobile_nav_button()}>
                                        <i className="fas fa-pen-fancy"></i>
                                        Join now</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/account-recovery" onClick={() => this.mobile_nav_button()}>
                                        <i className="fas fa-key"></i>
                                        Account recovery</NavLink>
                                </li>
                            </ul>
                        }

                        {this.props.session.getCurrentUser != null &&
                            <ul>
                                <li>
                                    <NavLink to="/users" onClick={() => this.mobile_nav_button()}>
                                        <i className="fas fa-users"></i>
                                        Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard" onClick={() => this.mobile_nav_button()}>
                                        <i className="fas fa-tachometer-alt"></i>
                                        Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/profile/${this.props.session.getCurrentUser.userName}`} onClick={() => this.mobile_nav_button()}>
                                        <i className="fas fa-user-circle"></i>
                                        View my Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/edit-profile" onClick={() => this.mobile_nav_button()}>
                                        <i className="fas fa-user-cog"></i>
                                        Edit Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/account" onClick={() => this.mobile_nav_button()}>
                                        <i className="fas fa-user-circle"></i>
                                        Update Account</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signout" onClick={() => this.mobile_nav_button()}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        LogOut</NavLink>
                                </li>
                            </ul>
                        }

                        <div className="headline">
                            Important
                        </div>

                        <ul>
                            <li>
                                <NavLink to="/cookie-policy" onClick={() => this.mobile_nav_button()}>
                                    <i className="fas fa-cookie-bite"></i>
                                    Cookie Policy</NavLink>
                            </li>
                            <li>
                                <NavLink to="/privacy-policy" onClick={() => this.mobile_nav_button()}>
                                    <i className="fas fa-user-secret"></i>
                                    Privacy Policy</NavLink>
                            </li>
                            <li>
                                <NavLink to="/terms" onClick={() => this.mobile_nav_button()}>
                                    <i className="fas fa-handshake"></i>
                                    T&amp;C's</NavLink>
                            </li>
                        </ul>

                    </div>

                </nav>

            </Fragment>
        );
    }
}

export default withSession(SideBar);