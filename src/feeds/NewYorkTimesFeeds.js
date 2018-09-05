
export const NewYorkTimesNewsGroup = {
	image: 				'nytimes.gif',
	title: 				'New York Times',
	description:	'New York Times RSS feeds',
	group: 				'nytimes',
	category: 		'World',
	path: 				'/news/new-york-times',
	website: 			'https://www.nytimes.com/',
	youtube: 			'https://www.youtube.com/user/TheNewYorkTimes',
	facebook: 		'https://www.facebook.com/nytimes/',
	twitter: 			'https://twitter.com/nytimes',
	wikipedia: 		'https://en.wikipedia.org/wiki/The_New_York_Times',
	gplus:				'',
	rss: 					'https://archive.nytimes.com/www.nytimes.com/services/xml/rss/index.html?8dpc',
};


export const NewYorkTimesNewsFeeds = [
	// Category and related feeds
	{
		categoty: 'U.S.A',
		title: 'New York Times',
		feeds: [
			{
				label: 'Home Page (U.S.)',
				title: 'NYTimes.com Home Page (U.S.)',
				path: '/news/new-york-times/home-page-us',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
			},
		]
	},
	{
		categoty: 'NYT World',
		title: 'World',
		feeds: [
			{
				label: 'World',
				title: 'NY Times World',
				path: '/news/new-york-times/world',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/World.xml'
			},
			{
				label: 'World at war blog',
				title: 'World at war blog',
				path: '/news/new-york-times/world',
				url: 'http://atwar.blogs.nytimes.com/feed/'
			},
			{
				label: 'Africa',
				title: 'Africa',
				path: '/news/new-york-times/africa',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/Africa.xml'
			},
			{
				label: 'Americas',
				title: 'Americas',
				path: '/news/new-york-times/americas',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/Americas.xml'
			},
			{
				label: 'Asia Pacific',
				title: 'Asia Pacific',
				path: '/news/new-york-times/asia-pacific',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml'
			},
			{
				label: 'Asia Pacific',
				title: 'Asia Pacific',
				path: '/news/new-york-times/asia-pacific',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml'
			},
			{
				label: 'Europe',
				title: 'Europe',
				path: '/news/new-york-times/europe',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/Europe.xml'
			},
			{
				label: 'Middle East',
				title: 'Middle East',
				path: '/news/new-york-times/middle-east',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/MiddleEast.xml'
			},
			// US Category has being skipped here
		]
	}
];
