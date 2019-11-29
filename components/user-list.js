import React from 'react';
import Link from 'next/link';
import theme from '../theme';

const UserCard = ({ user }) => {
    return (
        <>
            <li className='user-card'>
                <img alt={user.login} src={user.avatar_url} className='user-card--avatar'/>
                <Link href={`/user/[username]`} as={`/user/${user.login}`}>
                    <span className='user-card--name'>{user.login}</span>
                </Link>
            </li>
            <style jsx>{`
                .user-card {
                    margin: ${theme.space[2]}px 0;
                    display: flex;
                    align-items: center;
                }
                .user-card--name {
                    font-size: ${theme.fontSizes[2]}px;
                    color: ${theme.colors.primary};
                    cursor: pointer;
                    margin-left: ${theme.space[2]}px;
                }
                .user-card--avatar {
                    height: ${theme.heights[2]}px;
                    width: ${theme.heights[2]}px;
                    border-radius: 50%;
                }
            `}</style>
        </>
    );
};

const UsersList = ({ users, className = '' }) => {
    if (users.length === 0) {
        return null;
    }

    return (
        <>
            <ul className={`users-list ${className}`}>
                {users.map(user => {
                    return (
                        <UserCard key={user.id} user={user}/>
                    );
                })}
            </ul>
            <style jsx>{`
                .users-list {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    padding: 0 ${theme.space[2]}px;
                    border-radius: 3px;
                    border: 1px solid ${theme.colors.border.default};
                }
                .users-list.scroll-view {
                    max-height: 65vh;
                    overflow: auto;
                }
            `}</style>
        </>
    );
};

export default UsersList;


