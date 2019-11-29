import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Github Search' }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='Description' content={title}></meta>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta httpEquiv='content-language' content='en-US' />
            <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-touch-icon-57x57.png' />
            <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-touch-icon-60x60.png' />
            <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-touch-icon-72x72.png' />
            <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-touch-icon-76x76.png' />
            <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-touch-icon-114x114.png' />
            <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-touch-icon-120x120.png' />
            <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-touch-icon-144x144.png' />
            <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-touch-icon-152x152.png' />
            <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon-180x180.png' />
            <link rel='icon' type='image/png' href='/favicon/favicon-32x32.png' sizes='32x32' />
            <link rel='icon' type='image/png' href='/favicon/favicon-194x194.png' sizes='194x194' />
            <link rel='icon' type='image/png' href='/favicon/favicon-96x96.png' sizes='96x96' />
            <link rel='icon' type='image/png' href='/favicon/android-chrome-192x192.png' sizes='192x192' />
            <link rel='icon' type='image/png' href='/favicon/favicon-16x16.png' sizes='16x16' />
            <meta name='msapplication-TileColor' content='#fafafa' />
            <meta name='msapplication-TileImage' content='/mstile-144x144.png' />
            <meta name='theme-color' content='#ffffff' />
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css' />
            <script src='https://polyfill.io/v3/polyfill.min.js?features=Array.from,Promise,Symbol,Object.setPrototypeOf,Object.getOwnPropertySymbols'></script>
        </Head>
        <header className='page-header'>
            <Link href='/'>
                <img src='/images/logo_light.png' className='page-logo' />
            </Link>
            <h1 className='page-title'>Github user search</h1>
        </header>
        {children}
    </>
);

export default Layout;