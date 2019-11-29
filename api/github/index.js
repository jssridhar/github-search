import agent from 'superagent';
const API_ENDPOINT = 'https://api.github.com';

//Replace username, personal accesstoken to have better api limits;

const setHeaders = (req) => {
    let reqWithHeader = req.set('Accept', 'application/vnd.github.v3+json');
    // reqWithHeader = reqWithHeader.auth('<username>', '<personal_access_token>');
    if (process.browser) {
        return reqWithHeader;
    }
    
    return reqWithHeader.set('User-Agent', 'Github-App');
}

const GithubAPI = {
    search: ({ q, page, per_page }) => {
        return setHeaders(agent.get(`${API_ENDPOINT}/search/users`).query({
            q,
            page,
            per_page
        }));
    },

    user: ({ username }) => {
        return setHeaders(agent.get(`${API_ENDPOINT}/users/${username}`));
    },

    followers: ({ username }) => {
        return setHeaders(agent.get(`${API_ENDPOINT}/users/${username}/followers`));
    },

    following: ({ username }) => {
        return setHeaders(agent.get(`${API_ENDPOINT}/users/${username}/following`));
    },

    repos: ({ username }) => {
        return setHeaders(agent.get(`${API_ENDPOINT}/users/${username}/repos`));
    }
};

export default GithubAPI;