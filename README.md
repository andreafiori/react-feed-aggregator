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
- [Packagist API documentation](https://packagist.org/apidoc)
- [Javascript standard](https://standardjs.com/)
- [Bootrap Template](http://getbootstrap.com/docs/4.1/examples/blog/)
- [Bootrap Navbar](http://getbootstrap.com/docs/4.1/examples/navbars/)
- XMLHttpRequest https://www.xml.com/pub/a/2006/09/13/rss-and-ajax-a-simple-news-reader.html
- XMLHttpRequest HTML5Rocks https://www.html5rocks.com/en/tutorials/cors/
- CORS https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
- https://www.robinwieruch.de/react-fetching-data/
- https://github.com/abdmob/x2js
- https://www.hongkiat.com/blog/rss-reader-in-javascript/
- https://www.npmjs.com/package/xml-js
- https://github.com/hongkiat/js-rss-reader/blob/master/rss.js OK DOMPARSER
- RSS format fields https://feedforall.com/rss-fields.htm
- DOMParser Query selector https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
- Code Splitting Dynamic Import https://tylermcginnis.com/react-router-code-splitting/
- React Loadable https://github.com/jamiebuilds/react-loadable
- Code Splitting https://reactjs.org/docs/code-splitting.html

## Additional dependencies

- [Reactstrap](https://reactstrap.github.io/)
- [Font Awesome](https://fontawesome.com/)
- [Axios HTTP client](https://github.com/axios/axios)
- [ESLint](https://eslint.org/)

## TODO

- Move feeds files into the related folder with git mv and delete the feeds dir at the end
- Routing https://www.turtle-techies.com/post/react-navbar-with-bootstrap-4/
- Navbar https://github.com/asafg6/react-bootstrap-navbar-example
- https://stackoverflow.com/questions/651563/getting-the-last-element-of-a-split-string-array/651646
- Dotenv API enviroment prod and dev
- Testing
- Linting
- New Favicon\s
- Meta tags?
- Github deploy
- Travis check
- Deploy and demo on shared hosting
