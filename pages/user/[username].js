import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router';
import UsersList from '../../components/user-list';
import ReposList from '../../components/repos-list';
import {
    getUser
} from '../../slices/user';
import theme from '../../theme';

const User = ({ userStore }) => {
    const router = useRouter();
    const { user, followers, following, repos } = userStore;

    return (
        <>
            <div className='container user-view'>
                <div className='row'>
                    <div className='col-xs-11 col-md-8 col-xl-6'>
                        <h2>User payload:</h2>
                        <pre>{JSON.stringify(user, null, "\t")}</pre>
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
                .user-view {
                    margin-bottom: ${theme.space[4]}px;
                }
            `}</style>
        </>
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