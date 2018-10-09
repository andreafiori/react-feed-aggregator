# News Feed Aggregator

## UNDER CONSTRUCTION!

News Feed Reader with ReactJS. Actually the project is under construction.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Installation

Install NodeJS and the dependencies with NPM:

	npm install

## Run the project

Run:

	npm start

Disable CORS if you want to run successful REST calls to all feed URLs: on Visual Studio Code you can launch a Chrome instance with the configured debugger (.vscode/launch.json).

## Run the tests

	npm test

## Build project

Builds static files to deploy on server:

	npm run build

## Code Linter

Launch ESLint from the local installation:

### Windows:

All JS files:

	node_modules\.bin\eslint src\components\*.js

Single file:

	node_modules\.bin\eslint src\components\<filename.js>

### Linux:

All JS files:

	./node_modules/.bin/eslint src/components/*.js

Single file:

	./node_modules/.bin/eslint src/components/<filename.js>

## Browsers

- Chrome
- Firefox
- Opera
- IE 11

## Resources

- [ReactJS](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [Javascript standard](https://standardjs.com/)
- [DOMParser usages](https://github.com/hongkiat/js-rss-reader/blob/master/rss.js)
- [DOMParser Query selector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
- Routing https://www.turtle-techies.com/post/react-navbar-with-bootstrap-4/
- Compare JS objects http://xahlee.info/js/js_comparison_equality_test_objects.html
### Code Splitting

- React Loadable
- [Code Splitting Dynamic Import](https://tylermcginnis.com/react-router-code-splitting/)
- [Code Splitting](https://reactjs.org/docs/code-splitting.html)

### HTTP requests

- XMLHttpRequest https://www.xml.com/pub/a/2006/09/13/rss-and-ajax-a-simple-news-reader.html
- XMLHttpRequest HTML5Rocks https://www.html5rocks.com/en/tutorials/cors/
- [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [Axios Cheat Sheet](https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index)
- [HTTP requests in JS](https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa)

### RSS formats

- [RSS format fields](https://feedforall.com/rss-fields.htm)

## Additional dependencies

- [React Loadable](https://github.com/jamiebuilds/react-loadable)
- [Reactstrap](https://reactstrap.github.io/)
- [Font Awesome](https://fontawesome.com/)
- [Axios HTTP client](https://github.com/axios/axios)
- [ESLint](https://eslint.org/)

## TODO

- Generalize Atom \ Classsic feed parser
- Optimize feed list fetch in case of error...
- Scroll to top \ Back to top links
- New Favicon\s
- Meta tags?!
- Testing
- Linting
- Github deploy "homepage": "https://www.andreafiori.net/projects/feed-aggregator",
- Travis
- Deploy and demo on shared hosting
