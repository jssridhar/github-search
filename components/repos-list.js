import React from 'react';
import theme from '../theme';

const Repo = ({ repo }) => {
    return (
        <>
            <li className='repo-card'>
                <span className='repo-card--name'>{repo.name} (☆{repo.stargazers_count})</span>
            </li>
            <style jsx>{`
                .repo-card {
                    margin: ${theme.space[2]}px 0;
                    display: flex;
                    align-items: center;
                }
                .repo-card--name {
                    font-size: ${theme.fontSizes[2]}px;
                    color: ${theme.colors.text.dark};
                    cursor: pointer;
                    margin-left: ${theme.space[2]}px;
                }
            `}</style>
        </>
    );
};

const ReposList = ({ repos }) => {
    if (repos.length === 0) {
        return null;
    }

    return (
        <>
            <ul className='repos-list'>
                {repos.map(repo => {
                    return (
                        <Repo key={repo.id} repo={repo}/>
                    );
                })}
            </ul>
            <style jsx>{`
                .repos-list {
                    margin: 0;
                    padding: 0;
                    max-height: 400px;
                    overflow: auto;
                    list-style: none;
                    padding: 0 ${theme.space[2]}px;
                    border-radius: 3px;
                    border: 1px solid ${theme.colors.border.default};
                }
            `}</style>
        </>
    );
};

export default ReposList;


