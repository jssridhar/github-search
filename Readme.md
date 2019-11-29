# Github Search
Node version: v8.11.3
Yarn version: 1.17.3

### Deployment

Deployed it using [now](https://github.com/zeit/now). Github repo is linked for auto deploy, whenever a new change is pushed to master.

Current production version can be accessed [here](https://github-search-kohl-one.now.sh/)


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

> Note: Github api has rate limits (60 api calls per hour). To increase this limit during development, please use your use your github user account, [personal access token](https://github.com/settings/tokens). Add these to `api/github/index.js`

### Requirements
* [x] There is a search bar to let the user search by username (login name)
* [x] While searching, the application shows an animated loading indicator made by CSS (using gif image is not allowed)
After the search is completed, the application shows the list of users along with their avatar and their username on the same page
* [x] If the results are not complete in one page, the pagination is shown on the screen
* [x] When a list item is clicked, the application is navigated to a new page that display the parsed JSON payload of that user
* [x] The new page also has to display the list of the user's repositories, followers and following
* [x] The application is built by React and Redux
* [x] Webpack is being used to build the application. ` Note: next.js uses webpack under the hood and webpack config is customizable if necessary.`
* [x] The application style is built by one of the CSS preprocessors or CSS-in-JS. `styled jsx`
* [x] The application has to be responsive and optimised for mobile
* [x] A documentation on how the application works and how to set up and build the project is * [] provided
* [x] The application is production ready (HINT: try Google’s PageSpeed or Lighthouse) 
    * [Pagespeed Results #1](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fgithubsearch.jssridhar.now.sh%2F&tab=mobile)
    * [Pagespeed Result #2]()
### Bonus points
* [ ] The application is deployed on AWS instead of Heroku or Now
* [ ] The application supports IE10 and/or Android native browser (Chrome 30.0) `Note: Consciously tried to have maximum browser support. Couldn't test on these browsers `
* [x] The pages are server-side rendered and are cached in the server
* [x] All pages' URL is reusable - meaning it can be copied and pasted on different browser and still shows the same result
* [x] All pages are SEO optimised `Note: SEO should be easier since all pages are server rendered if necessary`
* [x] The project supports code splitting for each pages
* [ ] The results list also asynchronous-ly shows the number of followers and following of each user without going the user page
* [ ] The search input does the searching as you type (See google search as an example)
* [ ] There is animated transition between pages
* [x] The application supports theming and can easily be switched between themes


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