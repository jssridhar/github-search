import { createSlice } from '@reduxjs/toolkit';
import GithubAPI from '../api/github';

// This can also be an input from ui
const ITEMS_PER_PAGE = 30;

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searching: false,
        isLastPage: true,
        isFirstPage: true,
        error: null,
        users: [],
        total: 0
    },
    reducers: {
        searchStart: (state) => {
            state.error = null;
            state.searching = true;
        },
        searchSuccess: (state, { payload }) => {
            const { page, data } = payload;
            const { items, total_count } = data;
            state.searching = false;
            state.isLastPage = items.length < ITEMS_PER_PAGE;
            state.isFirstPage = !page || (page == 1);
            state.users = items;
            state.total = total_count;
        },
        searchFailure: (state, { payload }) => {
            state.searching = false;
            state.users = [];
            state.total = 0;
            state.isLastPage = true;
            state.isFirstPage = true;
            state.error = payload;
        }
    }
});

const { actions, reducer } = searchSlice;
const { searchStart, searchSuccess, searchFailure } = actions;

export const search = ({ q, page }) => (dispatch) => {
    dispatch(searchStart());
    return GithubAPI.search({ q, page, per_page: ITEMS_PER_PAGE }).then(
        response => dispatch(searchSuccess({
            data: response.body,
            page
        })),
        error => {
            if (error.response && error.response.body && error.response.body.message) {
                dispatch(searchFailure(error.response.body.message));
            } else {
                dispatch(searchFailure('Something unexpected happened!'));
            }
        }
    );
};

export default reducer;