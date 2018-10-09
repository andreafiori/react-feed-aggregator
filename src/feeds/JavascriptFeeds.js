export const JavascriptNewsGroup = {
  image:        'javascript-rss.gif',
	title:        'Javascript News',
	description:  'Latest Javascript news from the most popular websites',
	group:        'javascript',
	category:     'Frontend',
	path:         '/software-development/javascript',
  country:      'World',
  hideDescription: true,
	website:      '',
	youtube:      '',
	facebook:     '',
  twitter:      '',
	wikipedia:    '',
	rss:          '',
};

export const JavascriptNewsFeeds = [
	{
		title: 'Websites',
		feeds: [
			/* {
				label: 'Reddit Javascript',
				title: 'Reddit Javascript',
				path: '/software-development/javascript/reddit-js',
				url: 'https://www.reddit.com/r/javascript/.rss?format=xml',
      }, */
			{
				label: 'Sitepoint',
				title: 'Sitepoint Javascript',
        path: '/software-development/javascript/sitepoint-javascript',
        website: 'https://www.sitepoint.com/',
				url: 'https://www.sitepoint.com/javascript/feed',
      },
			{
				label: 'JSFeeds.com',
				title: 'JSFeeds.com from Sitepoint Javascript',
        path: '/software-development/javascript/sitepoint-javascript',
        website: 'http://www.jsfeeds.com/',
				url: 'http://jsfeeds.com/feed',
      },
			{
				label: 'EchoJS.com',
        title: 'EchoJS.com',
        hideDescription: true,
        path: '/software-development/javascript/echojs-com',
        website: 'https://echojs.com/',
				url: 'https://echojs.com/rss',
      },
			{
				label: 'David Walsh Blog',
				title: 'Latest article from David Walsh Blog',
        path: '/software-development/javascript/david-walsh',
        website: 'https://www.davidwalsh.name',
				url: 'https://davidwalsh.name/feed',
      },
      {
				label: 'ReactJS',
				title: 'Latest article from ReactJS website',
        path: '/software-development/javascript/react-js',
        website: 'https://www.reactjs.org/',
        github: 'https://github.com/facebook/react/',
				url: 'https://reactjs.org/feed.xml',
      },
      {
				label: 'React Native',
				title: 'Latest article from the React Native website',
        path: '/software-development/javascript/react-native',
        website: 'https://facebook.github.io/react-native/',
        github: 'https://github.com/facebook/react-native',
        isAtom: true,
        url: 'https://facebook.github.io/react-native/blog/atom.xml',
      },
      // Google News? https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&q=javascript&output=rss
      // Angular: https://angular.io/ Vue: https://vuejs.org/The Progressive JavaScript Framework
      {
				label: 'Meteor Blog',
				title: 'Latest article from Meteor Blog',
        path: '/software-development/javascript/meteor',
        website: 'https://www.emberjs.com/',
				url: 'https://blog.meteor.com/feed',
      },
      {
				label: 'Ember Blog',
				title: 'Latest article from Ember Blog',
        path: '/software-development/javascript/ember',
        website: 'https://www.emberjs.com/',
        isAtom: true,
				url: 'https://www.emberjs.com/blog/feed.xml?format=xml',
      },
      {
				label: '2ality JS and more',
				title: 'Latest article from 2ality',
        path: '/software-development/javascript/2ality',
        website: 'http://2ality.com/',
				url: 'http://feeds.feedburner.com/2ality',
      },
      {
				label: 'The JavaScript Playground',
				title: 'Latest article from the Javascript Playground',
        path: '/software-development/javascript/javascript-playground',
        website: 'https://javascriptplayground.com/',
				url: 'http://feeds.feedburner.com/TheJavascriptPlayground/?x=1&format=xml',
      },
      /* {
				label: 'JS Diaries',
				title: 'Latest article from JS Diaries',
        path: '/software-development/javascript/js-diaries',
        website: 'http://jsdiaries.com/',
        twitter: 'https://twitter.com/jsdiaries',
				url: 'http://jsdiaries.com/feed',
      }, */
    ]
  },
  // List https://blog.feedspot.com/jquery_rss_feeds/
  {
    title: 'JQuery',
    feeds: [
      {
				label: 'Reddit - jQuery',
				title: 'Reddit - jQuery RSS Feed',
        path: '/software-development/javascript/reddit-jquery',
        website: 'https://www.reddit.com/r/jquery/',
        isAtom: true,
				url: 'https://www.reddit.com/r/jquery/.rss?format=xml',
      },
      {
				label: 'jQuery Script Blog',
				title: 'jQuery Script Blog RSS Feed',
        path: '/software-development/javascript/jquery-script-blog',
        website: 'http://www.jqueryscript.net/blog/',
				url: 'http://feeds.feedburner.com/jquery-script?format=xml',
      },
      {
				label: 'jQuery By Example',
				title: 'jQuery By Example RSS Feed',
        path: '/software-development/javascript/jquery-by-example',
        website: 'http://www.jquerybyexample.net/',
				url: 'http://www.jquerybyexample.net/feeds/posts/default',
      },
      /* {
				label: 'jQuery Blog',
				title: 'jQuery Blog RSS Feed',
        path: '/software-development/javascript/jquery-blog-rss',
        website: 'http://blog.jquery.com/',
				url: 'http://feeds.feedburner.com/OneQlikAtATime?format=xml',
      }, */
      {
				label: '',
				title: '',
        path: '/software-development/javascript/',
        website: '',
				url: '',
      },
    ]
  },
  {
    title: 'People',
    feeds: [
      {
				label: 'Todd Motto',
				title: 'Latest article from Todd Motto\'s blog ',
        path: '/software-development/javascript/todd-motto',
        website: 'https://toddmotto.com/',
				url: 'https://toddmotto.com/feed.xml',
      },
      {
				label: 'Ben Nadel',
				title: 'Latest article from Ben Nadel\'s blog',
        path: '/software-development/javascript/ben-nadel',
        website: 'https://www.bennadel.com/',
				url: 'https://www.bennadel.com/index.cfm?event=blog.rss',
      },
      {
				label: 'Joe Zim',
				title: 'Latest article from Joe Zim\'s blog',
        path: '/software-development/javascript/joe-zim',
        website: 'https://www.joezimjs.com/',
				url: 'https://www.joezimjs.com/feed',
      },
      {
				label: 'Zsolt Nagy – Development of Maintainable Web Applications',
				title: 'Latest article from Zsolt Nagy\'s blog',
        path: '/software-development/javascript/zsolt-nagy',
        website: 'http://www.zsoltnagy.eu/feed/?x=2&format=xml',
				url: 'http://www.zsoltnagy.eu/',
      },
    ]
  }
];
