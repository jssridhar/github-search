import agent from 'superagent';
const API_ENDPOINT = 'https://api.github.com';

const setAcceptHeader = req => req.set('Accept', 'application/vnd.github.v3+json');
const setUserAgent = (req) => {
    if (process.browser) {
        return req;
    }

    return req.set('User-Agent', 'Github-App');
}

const GithubAPI = {
    search: ({ q, page, per_page }) => {
        return setUserAgent(setAcceptHeader(agent.get(`${API_ENDPOINT}/search/users`).query({
            q,
            page,
            per_page
        })));
    },

    user: ({ username }) => {
        return setUserAgent(setAcceptHeader(agent.get(`${API_ENDPOINT}/users/${username}`)));
    },

    followers: ({ username }) => {
        return setUserAgent(setAcceptHeader(agent.get(`${API_ENDPOINT}/users/${username}/followers`)));
    },

    following: ({ username }) => {
        return setUserAgent(setAcceptHeader(agent.get(`${API_ENDPOINT}/users/${username}/following`)));
    },

    repos: ({ username }) => {
        return setUserAgent(setAcceptHeader(agent.get(`${API_ENDPOINT}/users/${username}/repos`)));
    }
};

export default GithubAPI;