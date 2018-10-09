
export const NewYorkTimesNewsGroup = {
	image: 				'nytimes.gif',
	title: 				'New York Times',
	description:	'New York Times RSS feeds',
	group: 				'nytimes',
	category: 		'World',
	path: 				'/news/new-york-times',
	country:			'U.S.A',	
	website: 			'https://www.nytimes.com/',
	youtube: 			'https://www.youtube.com/user/TheNewYorkTimes',
	facebook: 		'https://www.facebook.com/nytimes/',
	twitter: 			'https://twitter.com/nytimes',
	wikipedia: 		'https://en.wikipedia.org/wiki/The_New_York_Times',
	rss: 					'http://www.nytimes.com/services/xml/rss/',
};

export const NewYorkTimesNewsFeeds = [
	{
		categoty: 'U.S.A',
		title: 'New York Times',
		feeds: [
			{
				label: 'Home Page (U.S.)',
				title: 'Home Page (U.S.), New York Time RSS feed',
				path: '/news/new-york-times/home-page-us',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
			},
		]
	},
	{
		title: 'NYT World',
		feeds: [
			{
				label: 'World',
				title: 'World, New York Time RSS feed',
				path: '/news/new-york-times/world',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/World.xml'
			},
			{
				label: 'World at war blog',
				title: 'World at war blog, New York Time RSS feed',
				path: '/news/new-york-times/world',
				url: 'http://atwar.blogs.nytimes.com/feed/'
			},
			{
				label: 'Africa',
				title: 'Africa, New York Time RSS feed',
				path: '/news/new-york-times/africa',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/Africa.xml'
			},
			{
				label: 'Americas',
				title: 'Americas, New York Time RSS feed',
				path: '/news/new-york-times/americas',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/Americas.xml'
			},
			{
				label: 'Asia Pacific',
				title: 'Asia Pacific, New York Time RSS feed',
				path: '/news/new-york-times/asia-pacific',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml'
			},
			{
				label: 'Asia Pacific',
				title: 'Asia Pacific, New York Time RSS feed',
				path: '/news/new-york-times/asia-pacific',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml'
			},
			{
				label: 'Europe',
				title: 'Europe, New York Time RSS feed',
				path: '/news/new-york-times/europe',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/Europe.xml'
			},
			{
				label: 'Middle East',
				title: 'Middle East, New York Time RSS feed',
				path: '/news/new-york-times/middle-east',
				url: 'https://www.nytimes.com/services/xml/rss/nyt/MiddleEast.xml'
			},
			// US Category has being skipped here
		]
	}
];
