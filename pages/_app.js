import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import theme from '../theme';
const { fonts } = theme;

class GithubApp extends App {
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
                <style jsx global>{`
                    body {
                        font-family: ${fonts[0]}, ${fonts.roboto};
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .page-header {
                        display: flex;
                        align-items: center;
                        background: ${theme.colors.header};
                        height: ${theme.heights[6]}px;
                        padding: 0 ${theme.space[2]}px;
                        margin-bottom: ${theme.space[3]}px;
                    }
                    .page-logo {
                        width: ${theme.heights[3]}px;
                        height: ${theme.heights[3]}px;
                        margin-right: ${theme.space[2]}px;
                    }
                    .page-title {
                        color: ${theme.colors.white};
                        font-size: ${theme.fontSizes[5]}px;
                    }
                `}</style> 
            </>
        );
    }
}

export default withRedux(initStore)(GithubApp); 