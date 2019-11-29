import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsersList from '../../components/user-list';
import ReposList from '../../components/repos-list';
import Loader from '../../components/loader';
import {
    getUser
} from '../../slices/user';
import theme from '../../theme';

const User = ({ userStore }) => {
    const { user, followers, following, repos, loading, error } = userStore;

    if (loading) {
        return (
            <div className='container'>
                <Loader />
            </div>
        );
    } else if (error) {
        return (
            <div className='container'>
                <div className='err-msg'>{error}</div>
                <style jsx>{`
                    .err-msg {
                        color: ${theme.colors.danger};
                        font-size: ${theme.fontSizes[2]}px;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <>
            <div className='container user-view'>
                <div className='row'>
                    <div className='col-xs-11 col-md-8 col-xl-6'>
                        <h2>User payload:</h2>
                        <code className='user-payload'>{JSON.stringify(user, null, "\t")}</code>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-11 col-md-8 col-xl-6'>
                        <h2>Followers: ({followers.length})</h2>
                        <UsersList users={followers} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-11 col-md-8 col-xl-6'>
                        <h2>Following: ({following.length})</h2>
                        <UsersList users={following} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-11 col-md-8 col-xl-6'>
                        <h2>Repositories: ({repos.length})</h2>
                        <ReposList repos={repos} />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .user-payload {
                    white-space: pre-wrap;
                    word-wrap: break-wrod;
                    text-align: justify;
                }
                .user-view {
                    margin-bottom: ${theme.space[4]}px;
                }
            `}</style>
        </>
    );
}

User.getInitialProps = async ({ store, isServer, query }) => {
    const { username } = query;
    console.log('Is Server', isServer);
    if (username) {
        await store.dispatch(getUser({ username }));
    }
    return {};
};


User.propTypes = {
    userStore: PropTypes.object
};

const mapStateToProps = (state) => ({
    userStore: state.user
});
const mapDispatchToActions = (dispatch) => bindActionCreators({
    getUser
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(User);