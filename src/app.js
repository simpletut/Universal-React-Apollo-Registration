import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import withSession from './hoc/withSession';

import MainLayout from './layouts/mainLayout';

import Signup from './pages/auth/signUp';
import Signin from './pages/auth/signIn';
import ForgotPassword from './pages/auth/forgotPassword';
import Signout from './pages/auth/signOut';
import Deshboard from './pages/dashboard';
import EditProfile from './pages/auth/editProfile';
import UpdateAccount from './pages/auth/updateAccount';
import CookiePolicy from './pages/policiesAndConditions/cookiePolicy';
import PrivacyPolicy from './pages/policiesAndConditions/privacyPolicy';
import Terms from './pages/policiesAndConditions/terms';
import FAQ from './pages/policiesAndConditions/faq';
import Users from './pages/users';
import User from './pages/user';
import NotFound from './pages/404';

const Root = ({ refetch, session }) =>
    <Switch>
        <Route path="/signin" render={props => (
            <MainLayout>
                <Signin {...props} refetch={refetch} />
            </MainLayout>
        )} />
        <Route path="/account-recovery" render={props => (
            <MainLayout>
                <ForgotPassword {...props} refetch={refetch} />
            </MainLayout>
        )} />
        <Route path="/signup" render={props => (
            <MainLayout>
                <Signup {...props} refetch={refetch} />
            </MainLayout>
        )} />
        <Route path="/edit-profile" render={props => (
            <MainLayout>
                <EditProfile {...props} refetch={refetch} session={session} />
            </MainLayout>
        )} />
        <Route path="/account" render={props => (
            <MainLayout>
                <UpdateAccount {...props} session={session} refetch={refetch} />
            </MainLayout>
        )} />
        <Route path="/signout" render={props => (
            <MainLayout>
                <Signout {...props} />
            </MainLayout>
        )} />
        <Route path="/dashboard" render={props => (
            <MainLayout>
                <Deshboard {...props} session={session} />
            </MainLayout>
        )} />
        <Route path="/users" render={props => (
            <MainLayout>
                <Users {...props} />
            </MainLayout>
        )} />
        <Route path="/profile/:URL_Param" render={props => (
            <MainLayout>
                <User {...props} session={session} />
            </MainLayout>
        )} />
        <Route path="/cookie-policy" render={props => (
            <MainLayout>
                <CookiePolicy {...props} />
            </MainLayout>
        )} />
        <Route path="/privacy-policy" render={props => (
            <MainLayout>
                <PrivacyPolicy {...props} />
            </MainLayout>
        )} />
        <Route path="/terms" render={props => (
            <MainLayout>
                <Terms {...props} />
            </MainLayout>
        )} />
        <Route path="/faq" render={props => (
            <MainLayout>
                <FAQ {...props} />
            </MainLayout>
        )} />
        <Route path="/" exact render={props => (
            <MainLayout>
                <Signin {...props} refetch={refetch} />
            </MainLayout>
        )} />
        <Route path="/" render={props => (
            <MainLayout>
                <NotFound {...props} />
            </MainLayout>
        )} />
    </Switch>
;

const AppComponent = withSession(Root);

export default AppComponent;