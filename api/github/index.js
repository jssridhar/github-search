import agent from 'superagent';

const API_ENDPOINT = 'https://api.github.com';

const GithubAPI = {
    search: ({ q, page, per_page }) => {
        return agent.get(`${API_ENDPOINT}/search/users`).query({
                        q,
                        page,
                        per_page
                    }).set('Accept', 'application/vnd.github.v3+json')
                    .set('User-Agent', 'Github-App');
    },

    user: ({ username }) => {
        return agent.get(`${API_ENDPOINT}/users/${username}`).set('Accept', 'application/vnd.github.v3+json').set('User-Agent', 'Github-App');
    },

    followers: ({ username }) => {
        return agent.get(`${API_ENDPOINT}/users/${username}/followers`).set('Accept', 'application/vnd.github.v3+json').set('User-Agent', 'Github-App');
    },

    following: ({ username }) => {
        return agent.get(`${API_ENDPOINT}/users/${username}/following`).set('Accept', 'application/vnd.github.v3+json').set('User-Agent', 'Github-App');
    },

    repos: ({ username }) => {
        return agent.get(`${API_ENDPOINT}/users/${username}/repos`).set('Accept', 'application/vnd.github.v3+json').set('User-Agent', 'Github-App');
    }
};

export default GithubAPI;