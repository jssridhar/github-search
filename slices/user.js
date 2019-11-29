import { createSlice } from '@reduxjs/toolkit';
import GithubAPI from '../api/github';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        followers: [],
        following: [],
        repos: [],
        loading: false,
        error: null
    },
    reducers: {
        getUserStart: (state) => {
            state.error = null;
            state.loading = true;
        },
        getUserSuccess: (state, { payload }) => {
            const [user, followers, following, repos] = payload;
            state.loading = false;
            state.user = user;
            state.followers = followers;
            state.following = following;
            state.repos = repos;
        },
        getUserFailure: (state, { payload }) => {
            const { error } = payload;
            state.error = error;
            state.loading = false;
        }
    }
});

const { actions, reducer } = userSlice;
const { getUserStart, getUserSuccess, getUserFailure } = actions;

export const getUser = ({ username }) => (dispatch) => {
    dispatch(getUserStart());
    return Promise.all([
        GithubAPI.user({ username }),
        GithubAPI.followers({ username }),
        GithubAPI.following({ username }),
        GithubAPI.repos({ username })
    ]).then(responseArray => {
        dispatch(getUserSuccess(responseArray.map(res => res.body)));
    })
    .catch(error => dispatch(getUserFailure(error)));
};

export default reducer;