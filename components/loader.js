import React from 'react';
import theme from '../theme';

const Loader = ({ className = '', ...rest}) => (
    <>
        <img src='/images/logo.png' className='css-loader'/>
        <style jsx>{`
            .css-loader {
                width: ${theme.heights[3]}px;
                height: ${theme.heights[3]}px;
                animation: rotation 1s infinite;
            }
            @keyframes rotation {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        `}</style>
    </>
);

export default Loader;
