# Github Search

## Libraries Used
* [Next.js](https://nextjs.org/) - React framework to build server-rendered applications.
    * Faster initial load
    * SEO friendly
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/) - Opinionated helper utilities for redux
* [Next Redux Wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
* [Superagent](https://github.com/visionmedia/superagent) - Library for ajax requests with a very good browser support.

Redux thunk middleware is used for async actions. Thunk is included as part of redux toolkit.


### Commands

* `npm run dev` Runs a development server, with hot reloading support

* `npm run prod` Creates a production bundle, runs a local server with the production bundle.


### Folders
* `api` - All API requests
* `components` - React components with self contained styling
* `pages` - Pages/Views corresponding to routes. Routes are auto mapped to pages based on folder structure
* `public` - Static assets (images etc)
* `reducers` - Root reducer (Any non slice reducers should be created here)
* `slices` - Module level reducers. Lesser boilerplate based on redux toolkit.
* `store` - Redux store creator
* `theme` - Theme folder with styling variables.


The application has two pages
* index - Search page with an input box to search for github users by login name. Results are shown below 
* user/[username] - User view with parsed json payload, followers, following and repositories

