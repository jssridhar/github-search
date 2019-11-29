import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import theme from '../theme';
const { fonts } = theme;

class GithubApp extends App {
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <>
                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <meta charSet='utf-8' />
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css' />
                    <script src='https://polyfill.io/v3/polyfill.min.js?features=Array.from,Promise,Symbol,Object.setPrototypeOf,Object.getOwnPropertySymbols'></script>
                </Head>
                <header className='page-header'>
                    <Link href='/'>
                        <img src='/images/Github-Mark-Light-32px.png' className='page-logo' />
                    </Link>
                    <h1 className='page-title'>Github user search</h1>
                </header>
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