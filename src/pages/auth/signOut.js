import React from 'react';
import { withRouter } from 'react-router-dom';
import * as Cookies from 'es-cookie';
import { ApolloConsumer } from 'react-apollo';
import { Helmet } from 'react-helmet';

const handleSignout = (client,history) => {
    Cookies.remove('token');
    client.resetStore();
    history.push('/signin');
}

const head = () => {
    return (
        <Helmet bodyAttributes={{class: "signOutPage"}}>
            <title>LogOut - React Starter Kit</title>
        </Helmet>
    );
}

const Signout = ({history}) => (
    <div className="column column_12_12">
        {head()}
        <div className="signUp authForm">

            <h1 className="dark_headline">
                Sign out
            </h1>

            <ApolloConsumer>
                {client => {

                    return (
                        <div className="form_wrap">

                            <div>
                                <p>
                                    Are you sure that you want to sign-out?
                                </p>
                            </div>

                            <div className="form_buttons">
                                <button onClick={() => handleSignout(client, history)} className="btn">
                                    Yes, please sign me out
                                </button>
                            </div>            
                        
                        </div>
                    );
                }}
            </ApolloConsumer>
        
        </div>
    </div>
);

export default withRouter(Signout);