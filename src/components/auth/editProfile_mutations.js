import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Mutation } from 'react-apollo';
import { EDIT_PROFILE, GET_ALL_USERS, GET_USER_PROFILE, GET_CURRENT_USER, SET_PROFILE_IMAGE, PROFILE_PAGE } from './../../queries';
import { withRouter } from 'react-router-dom';
import CKEditor from 'react-ckeditor-wrapper';
import axios from 'axios';
import toastr from 'toastr';
import webConfig from './../../../webConfig';

const initialState = {
    bio: '',
    selectedFile: {},
    newFile: '',
    error: ''
}

class EditProfileMutations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
    }

    componentDidMount() {
        if (this.props.profile) {
            this.setState({
                bio: this.props.profile.bio
            });
        }
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

    handleEditorChange(bio) {
        this.setState({
            bio
        });
    }

    handleSaveBio(event, editProfile) {
        event.preventDefault();
        editProfile().then(async ({ data }) => {
            toastr.success('We have updated your profile!', 'Saved!');
        }).catch(error => {
            this.setState({
                error: error.graphQLErrors.map(x => x.message)
            })
            console.error("ERR =>", error.graphQLErrors.map(x => x.message));
        });
    }

    selectedFile(e) {
        e.preventDefault();
        let selectedFile = e.target.files[0]
        this.setState({
            selectedFile
        });
    }

    fileUPload(e, selectedFile) {

        e.preventDefault();
        const data = new FormData();
        const file = this.state.selectedFile;
        data.append('selectedFile', file);

        axios.post('/upload', data).then(({ data: { newFileName } }) => {

            this.setState({
                newFile: newFileName
            })

            selectedFile(newFileName).then(async ({ data }) => {

                this.props.history.push('/edit-profile');
                toastr.success('We have updated your profile image!', 'Saved!');

            }).catch(err => console.log(err));

        }).catch(err => {

            console.log(err)

        });;


    }

    render() {

        const { bio, newFile } = this.state
        const userName = this.props.session.getCurrentUser.userName;
        this.state;

        return (
            <Fragment>
                <Mutation mutation={SET_PROFILE_IMAGE}
                    variables={{ email: this.props.session.getCurrentUser.email, profileImage: newFile }}
                    refetchQueries={() => [
                        { query: GET_CURRENT_USER },
                        { query: GET_ALL_USERS },
                        { query: PROFILE_PAGE, variables: { userName } }
                    ]}
                    update={(cache, { data: { setProfileIMG } }) => {

                        const { getCurrentUser } = cache.readQuery({
                            query: GET_CURRENT_USER
                        });

                        cache.writeQuery({
                            query: GET_CURRENT_USER,
                            data: {
                                getCurrentUser: { ...getCurrentUser, profileImage: setProfileIMG.profileImage }
                            }
                        });

                    }}>

                    {(setProfileIMG, { data, loading, error }) => {

                        return (
                            <div className="setProfileImage">
                                <form onSubmit={event => this.fileUPload(event, setProfileIMG)}>

                                    <div className="grid">

                                        <div className="column column_6_12 image">
                                            {!this.props.session.getCurrentUser.profileImage &&
                                                <img src={`${webConfig.siteURL}/assets/graphics/abstract_patterns/texture.jpg`} />
                                            }
                                            {this.props.session.getCurrentUser.profileImage &&
                                                <img src={`${webConfig.siteURL}/user-uploads/${this.props.session.getCurrentUser.profileImage}`} />
                                            }
                                        </div>

                                        <div className="column column_6_12">
                                            <h3>Profile image: </h3>
                                            <div className="file_input">

                                                <input type="file" accept=".jpg, .png" name="profilePic" onChange={e => this.selectedFile(e)} />

                                            </div>

                                            <div className="form_buttons">
                                                <button type="submit" className="btn">
                                                    Upload</button>
                                            </div>

                                        </div>

                                    </div>

                                </form>
                            </div>
                        )

                    }}

                </Mutation>

                <Mutation
                    mutation={EDIT_PROFILE}
                    variables={{ email: this.props.session.getCurrentUser.email, bio }}
                    refetchQueries={() => [
                        { query: GET_USER_PROFILE },
                        { query: PROFILE_PAGE, variables: { userName } }
                    ]}>

                    {(editProfile, { data, loading, error }) => {

                        return (

                            <form className="form" onSubmit={event => this.handleSaveBio(event, editProfile)}>

                                <div className="form_wrap editBioForm">

                                    <div className={classNames({ 'error-label': this.state.error != '' })}>
                                        {this.state.error}
                                    </div>

                                    <div className="form_row">

                                        <CKEditor
                                            value={bio}
                                            onChange={this.handleEditorChange.bind(this)}
                                            config={{ extraAllowedContent: 'div(*); p(*); strong(*);' }}
                                        />

                                    </div>

                                    <div className="form_buttons">
                                        <button type="submit" className="btn"
                                            disabled={loading}>
                                            Save changes</button>
                                    </div>

                                </div>

                            </form>

                        );
                    }}

                </Mutation>
            </Fragment>
        )
    }
}

export default withRouter(EditProfileMutations);