import React, { Fragment } from 'react';
import { PROFILE_PAGE } from './../queries';
import { Query } from 'react-apollo';
import webConfig from './../../webConfig';
import { Helmet } from 'react-helmet';

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const userName = this.props.match.params.URL_Param ? this.props.match.params.URL_Param : staticContext.URL_Param;

        return (
            <Fragment>

                <Query query={PROFILE_PAGE} variables={{ userName }}>

                    {({ data, loading, error }) => {

                        if (loading) return <div></div>
                        if (error) return <div>Error</div>

                        return (
                            <div className="grid userProfilePage">
                                <Helmet>
                                    <title>{`${data.profilePage.firstName} ${data.profilePage.lastName}\`s Profile - React Starter Kit`}</title>
                                </Helmet>
                                <div className="column column_4_12">
                                    <div className="profileImage">
                                        {!data.profilePage.profileImage &&
                                            <img src={`${webConfig.siteURL}/assets/graphics/abstract_patterns/texture.jpg`} />
                                        }
                                        {data.profilePage.profileImage &&
                                            <img src={`${webConfig.siteURL}/user-uploads/${data.profilePage.profileImage}`} />
                                        }
                                    </div>
                                    <div className="user">
                                        {data.profilePage.firstName} {data.profilePage.lastName}
                                    </div>
                                </div>
                                <div className="column column_8_12">
                                    <h2>About me:</h2>
                                    <div dangerouslySetInnerHTML={{__html: data.profilePage.bio}}></div>
                                </div>


                            </div>
                        )

                    }}

                </Query>
            </Fragment>
        )
    }
}

export default User;