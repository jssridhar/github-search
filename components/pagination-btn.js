import React from 'react';
import theme from '../theme';

const PaginationButton = ({ className = '', ...rest}) => (
    <>
        <button className={`pagination-btn ${className} `} {...rest} />
        <style jsx>{`
            .m-r-sm {
                margin-right: ${theme.space[2]}px;
            }
            .pagination-btn {
                cursor: pointer;
                height: ${theme.heights[3]}px;
                border-radius: 3px;
                border: 1px solid ${theme.colors.primary};
                color: ${theme.colors.primary};
                padding: 0 ${theme.space[4]}px;
                font-size: ${theme.fontSizes[1]}px;
            }
            .pagination-btn:hover {
                opacity: 0.8;
            }
        `}</style>
    </>
);

export default PaginationButton;


