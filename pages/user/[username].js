import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../layout';
import UsersList from '../../components/user-list';
import ReposList from '../../components/repos-list';
import Loader from '../../components/loader';
import {
    getUser
} from '../../slices/user';
import theme from '../../theme';

const UsersPayload = ({ user }) => (
    <>
        <div className='row'>
            <div className='col-xs-11'>
                <div className='user-payload-container'>
                    <h2>User payload:</h2>
                    <code className='user-payload'>{JSON.stringify(user, null, "\t")}</code>
                </div>
            </div>
        </div>
        <style jsx>{`
            .user-payload-container {
                padding: 0 ${theme.space[2]}px;
            }            
            .user-payload {
                white-space: pre-wrap;
                word-break: break-all;
                text-align: justify;
            }
        `}</style>
    </>
);

const UserSection = ({ title, Component, componentProps }) => (
    <div className='row'>
        <div className='col-xs-11 col-md-8 col-xl-6'>
            <h2>{title}</h2>
            <Component {...componentProps} />
        </div>
    </div>
);

const User = ({ userStore }) => {
    const { user, followers, following, repos, loading, error } = userStore;

    let content;
    if (loading) {
        content = (
            <Loader />
        );
    } else if (error) {
        content = (
            <>
                <div className='err-msg'>{error}</div>
                <style jsx>{`
                    .err-msg {
                        color: ${theme.colors.danger};
                        font-size: ${theme.fontSizes[2]}px;
                    }
                `}</style>
            </>
        );
    } else {
        content = (
            <>
                <UsersPayload user={user} />
                <UserSection
                    title={`Followers (${followers.length}):`}
                    Component={UsersList}
                    componentProps={{
                        users: followers
                    }}
                />
                <UserSection
                    title={`Following (${following.length}):`}
                    Component={UsersList}
                    componentProps={{
                        users: following
                    }}
                />
                <UserSection
                    title={`Repositories (${repos.length}):`}
                    Component={ReposList}
                    componentProps={{
                        repos
                    }}
                />
            </>
        );
    }

    return (
        <Layout title={user.login ? `github user - ${user.login}` : undefined}>
            <div className='container user-view'>
                {content}
            </div>
            <style jsx>{`
                .user-view {
                    margin-bottom: ${theme.space[4]}px;
                }
            `}</style>
        </Layout>
    );
}

User.getInitialProps = async ({ store, isServer, query }) => {
    const { username } = query;
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