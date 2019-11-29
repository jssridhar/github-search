import React, { Component, createRef } from 'react';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from './layout';
import Input from '../components/search-input';
import Button from '../components/button';
import PaginationButton from '../components/pagination-btn';
import UsersList from '../components/user-list';
import Loader from '../components/loader';
import theme from '../theme';

import { search } from '../slices/search';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.onSearchClick = this.onSearchClick.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.inputRef = createRef();
    }

    componentDidUpdate(prevProps) {
        const { search, router } = this.props;
        const { query } = router;
        const { page, q } = query;

        if ((q !== prevProps.router.query.q) || (page !== prevProps.router.query.page)) {
            search({
                q,
                page
            });
        }
    }

    onSearchClick() {
        if (this.inputRef && this.inputRef.current && this.inputRef.current.value) {
            const { router } = this.props;
            const { pathname } = router;
            const routeObject = {
                pathname,
                query: {
                    q: this.inputRef.current.value,
                    page: 1
                }
            };
            Router.push(routeObject, routeObject, { shallow: true });
        }
    }

    nextPage() {
        const { router } = this.props;
        const { pathname, query } = router;
        const routeObject = {
            pathname,
            query: {
                ...query,
                page: Number(query.page || 1) + 1
            }
        };
        Router.push(routeObject, routeObject, { shallow: true });
    }

    prevPage() {
        const { router } = this.props;
        const { pathname, query } = router;
        if (query.page && Number(query.page) > 1) {
            const routeObject = {
                pathname,
                query: {
                    ...query,
                    page: Number(query.page) - 1
                }
            };
            Router.push(routeObject, routeObject, { shallow: true });
        }
    }

    render() {
        const { searchStore, searchText = '' } = this.props;
        const { searching, users, isLastPage, isFirstPage, error } = searchStore;

        return (
            <Layout>
                <div className='container search-view'>
                    <div className='row search-view--input-container'>
                        <div className='col-xs-11 col-md-8 col-xl-6'>
                            <Input
                                type='text'
                                defaultValue={searchText}
                                className='m-r-sm'
                                placeholder='Search github users' 
                                ref={this.inputRef}
                            />
                            <Button onClick={this.onSearchClick}>Search</Button>
                        </div>
                    </div>
                    <div className='row search-view--userlist-container'>
                        <div className='col-xs-11 col-md-8 col-xl-6'>
                            {searching ? <Loader/> : <UsersList users={users} className='scroll-view'/>}
                        </div>
                    </div>
                    {error ? (
                        <div className='err-msg'>{error}</div>
                    ): null}
                    {!searching ? (
                        <div className='row search-view--pagination'>
                            <div className='col-xs-11 col-md-8 col-xl-6'>
                                {!isFirstPage ? <PaginationButton className='m-r-sm' onClick={this.prevPage}>{`< Prev`}</PaginationButton> : null}
                                {!isLastPage ? <PaginationButton onClick={this.nextPage}>{`Next >`}</PaginationButton> : null}
                            </div>
                        </div>
                    ) : null}
                </div>
                <style jsx>{`
                    .search-view--userlist-container {
                        margin-top: ${theme.space[3]}px;
                    }
                    .err-msg {
                        color: ${theme.colors.danger};
                        font-size: ${theme.fontSizes[2]}px;
                    }
                    .search-view--pagination {
                        text-align: center;
                        margin-top: ${theme.space[2]}px;
                    }
                `}</style>
            </Layout>
        );
    }
}

SearchPage.getInitialProps = async ({ store, isServer, query }) => {
    const { q, page } = query;
    if (q) {
        await store.dispatch(search({ q, page }));
    }
    return {
        searchText: q
    };
};

SearchPage.propTypes = {
    search: PropTypes.func
};

const mapStateToProps = (state) => ({
    searchStore: state.search
});
const mapDispatchToActions = (dispatch) => bindActionCreators({
    search
}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToActions
)(SearchPage));