import { gql } from 'apollo-boost';

export const SIGNUP_USER = gql`
    mutation($firstName: String!, $lastName: String!, $email: String!, $userName: String!, $password: String!){
        signupUser(firstName: $firstName, lastName: $lastName, email: $email, userName: $userName, password: $password){ token }
    }
`;


export const GET_CURRENT_USER = gql`
    query {
        getCurrentUser {
            firstName
            lastName
            joinDate
            userName
            email
            profileImage
        }
    }
`;

export const EDIT_PROFILE = gql`
    mutation($email: String!, $bio: String!){
        editProfile(email: $email, bio: $bio){
            bio
        }
    }
`;

export const SET_PROFILE_IMAGE = gql`
    mutation($email: String!, $profileImage: String!){
        setProfileIMG(email: $email, profileImage: $profileImage){
            profileImage
        }
    }
`;

export const SIGNIN_USER = gql`
    mutation($email: String!, $password: String!){
        signinUser(email: $email, password: $password){ token }
    }
`;


export const CHANGE_EMAIL = gql`
    mutation($currentEmail: String!, $newEmail: String!){
        changeEmail(currentEmail: $currentEmail, newEmail: $newEmail){
            email
        }
    }
`;

export const CHANGE_PASSWORD = gql`
    mutation($email: String!, $password: String!){
        changePassword(email: $email, password: $password){
            email
        }
    }
`;

export const RESET_PASSWORD = gql`
    mutation($email: String!){
        passwordReset(email: $email){
            email
        }
    }
`;

export const GET_USER_PROFILE = gql`
    query {
        getUserProfile {
            bio
            profileImage
        }
    }
`;

export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            firstName
            lastName
            bio
            profileImage
            userName
        }
    }
`;

export const PROFILE_PAGE = gql`
    query($userName: String!) {
        profilePage(userName: $userName) {
            firstName
            lastName
            bio
            profileImage
        }
    }
`;