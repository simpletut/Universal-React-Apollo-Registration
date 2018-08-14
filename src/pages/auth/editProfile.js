import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER_PROFILE } from './../../queries';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import withAuth from './../../hoc/withAuth';
import EditProfileMutations from './../../components/auth/editProfile_mutations';

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
    }

    head() {
        return (
            <Helmet bodyAttributes={{ class: "editProfilePage" }}>
                <title>Edit Profile - React Starter Kit</title>
            </Helmet>
        );
    }

    render() {

        return (
            <div className="column column_12_12">
                {this.head()}
                <div className="signUp authForm fullWidth">

                    <h1 className="dark_headline">
                        Edit Profile
                    </h1>

                    <Query query={GET_USER_PROFILE}>

                        {({ data, loading, error }) => {

                            if (loading) return <div>Loading</div>
                            if (error) return <div>error</div>

                            return (
                                <EditProfileMutations profile={data.getUserProfile} refetch={this.props.refetch} session={this.props.session}  />
                            )
                        }}

                    </Query>

                </div>
            </div>
        )
    }
}

export default withAuth(session => session && session.getCurrentUser)(withRouter(EditProfile));