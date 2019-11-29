import React from 'react';
import theme from '../theme';

const Button = ({ className = '', ...rest}) => (
    <>
        <button className={`btn ${className} `} {...rest} />
        <style jsx>{`
            .btn {
                cursor: pointer;
                height: ${theme.heights[5]}px;
                border-radius: 3px;
                border: 1px solid ${theme.colors.primary};
                background: ${theme.colors.primary};
                color: ${theme.colors.white};
                padding: 0 ${theme.space[4]}px;
                font-size: ${theme.fontSizes[2]}px;
                width: 85px;
            }
            .btn:hover {
                opacity: 0.8;
            }
        `}</style>
    </>
);

export default Button;


