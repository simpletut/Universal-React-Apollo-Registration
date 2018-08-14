import React from 'react';
import webConfig from './../../webConfig';
import { NavLink } from 'react-router-dom';

import withSession from './../hoc/withSession';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <header>

                <div className="header_links">
                    <NavLink to="/faq">FAQ</NavLink>
                </div>

                {this.props.session.getCurrentUser != null &&

                    <div className="your_account">
                        <NavLink to={`/profile/${this.props.session.getCurrentUser.userName}`}>
                            <div className="wrap">
                                <div className="profile_img">
                                    {!this.props.session.getCurrentUser.profileImage &&
                                        <img src={`${webConfig.siteURL}/assets/graphics/abstract_patterns/texture.jpg`} />
                                    }
                                    {this.props.session.getCurrentUser.profileImage &&
                                        <img src={`${webConfig.siteURL}/user-uploads/${this.props.session.getCurrentUser.profileImage}`} />
                                    }
                                </div>
                                <div className="caption">
                                    {this.props.session.getCurrentUser != null &&
                                        <span>
                                            {this.props.session.getCurrentUser.firstName} {this.props.session.getCurrentUser.lastName}
                                        </span>
                                    }
                                </div>
                            </div>
                        </NavLink>
                        
                    </div>

                }


            </header>
        );
    }
}


export default withSession(Header);