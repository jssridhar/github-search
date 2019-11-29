import React from 'react';
import theme from '../theme';

const SearchInput = React.forwardRef(({ className = '', ...rest}, ref) => (
    <>
        <input ref={ref} className={`search-input ${className}`} {...rest} />
        <style jsx>{`
            .m-r-sm {
                margin-right: ${theme.space[2]}px;
            }
            .search-input {
                height: ${theme.heights[5]}px;
                padding: 0px ${theme.space[2]}px;
                border-radius: 3px;
                border: 1px solid ${theme.colors.border.input};
                width: calc(100% - ${theme.space[2]}px - 85px);
            }
            .search-input:hover {
                border-color: ${theme.colors.border.hover};
            }
            .search-input:focus {
                outline:none;
            }
        `}</style>
    </>
));

export default SearchInput;


