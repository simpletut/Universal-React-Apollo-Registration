import React, { Fragment } from 'react';
import { GET_ALL_USERS } from './../queries';
import { Query } from 'react-apollo';
import webConfig from './../../webConfig';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

class Users extends React.Component {

    head() {
        return (
            <Helmet bodyAttributes={{ class: "usersPage" }}>
                <title>Users - React Starter Kit</title>
            </Helmet>
        );
    }

    render() {

        return (
            <Fragment>
                {this.head()}
                <div className="grid pageHeaderSection">
                    <div className="column column_12_12">
                        <div className="content_wrap">
                            <h2>Users</h2>
                            <p className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="users_wrap clear_fix">
                    <Query query={GET_ALL_USERS}>

                        {({ data, loading, error }) => {

                            if (loading) return <div></div>
                            if (error) return <div>Error</div>

                            return (
                                <div className="users flexbox">
                                    {data.getAllUsers.length == 0 &&
                                        <div className="column column_12_12">
                                            <h3>Empty... check back soon!</h3>
                                        </div>
                                    }
                                    {data.getAllUsers.map((user, index) => (
                                        <div className="column column_6_12" key={index}>
                                            <NavLink to={`profile/${user.userName}`}>
                                                <div className="user">
                                                    <div className="wrap">
                                                        <div className="profile_image">
                                                            {!user.profileImage &&
                                                                <img src={`${webConfig.siteURL}/assets/graphics/abstract_patterns/texture.jpg`} />
                                                            }
                                                            {user.profileImage &&
                                                                <img src={`user-uploads/${user.profileImage}`} />
                                                            }
                                                        </div>
                                                        <div className="title">
                                                            <span>{user.firstName} {user.lastName}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            )
                        }}

                    </Query>
                </div>
            </Fragment>
        )
    }
}

export default Users;