
export const BbcNewsGroup = {
	image: 				'bbc.gif',
	title: 				'BBC',
	description:	'BBC RSS feeds',
	group: 				'bbc',
	category: 		'UK',
	path: 				'/news/bbc',
	country: 			'UK',
	website: 			'https://www.bbc.co.uk/',
	youtube: 			'https://www.youtube.com/bbcnews',
	facebook: 		'https://www.facebook.com/bbc/',
	twitter: 			'https://twitter.com/bbc',
	gplus:        'https://plus.google.com/+BBCNews',
	wikipedia: 		'https://en.wikipedia.org/wiki/BBC',
	rss: 					'https://www.bbc.com/news/10628494',
};

export const BbcNewsFeeds = [
	{
		title: 'Popular', // Popular BBC News Feeds
		feeds: [
			{
				label: 'Top stories',
				title: 'Top stories',
				path: '/news/bbc/top-stories',
				url: 'http://feeds.bbci.co.uk/news/rss.xml'
			},
			{
				label: 'World',
				title: 'World',
				path: '/news/bbc/world',
				url: 'http://feeds.bbci.co.uk/news/world/rss.xml'
			},
			{
				label: 'UK',
				title: 'BBC news UK',
				path: '/news/bbc/uk',
				url: 'http://feeds.bbci.co.uk/news/uk/rss.xml'
			},
			{
				label: 'Business',
				title: 'Business',
				path: '/news/bbc/business',
				url: 'http://feeds.bbci.co.uk/news/business/rss.xml'
			},
			{
				label: 'Politics',
				title: 'Politics',
				path: '/news/bbc/politics',
				url: 'http://feeds.bbci.co.uk/news/politics/rss.xml'
			},
			{
				label: 'Health',
				title: 'Health',
				path: '/news/bbc/health',
				url: 'http://feeds.bbci.co.uk/news/health/rss.xml'
			},
			{
				label: 'Education & Family',
				title: 'Education & Family',
				path: '/news/bbc/education-and-family',
				url: 'http://feeds.bbci.co.uk/news/education/rss.xml'
			},
			{
				label: 'Science & Environment',
				title: 'Science & Environment',
				path: '/news/bbc/science-and-enviroment',
				url: 'http://feeds.bbci.co.uk/news/science_and_environment/rss.xml'
			},
			{
				label: 'Technology',
				title: 'Technology',
				path: '/news/bbc/technology',
				url: 'http://feeds.bbci.co.uk/news/technology/rss.xml'
			},
			{
				label: 'Entertainment & Arts',
				title: 'Entertainment & Arts',
				path: '/news/bbc/entertainment-and-arts',
				url: 'http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml'
			}
		]
	},
	{
		title: 'Global and UK News',
		feeds: [
			{
				label: 'Africa',
				title: 'Africa',
				path: '/news/bbc/africa',
				url: 'http://feeds.bbci.co.uk/news/world/africa/rss.xml'
			},
			{
				label: 'Asia',
				title: 'Asia',
				path: '/news/bbc/asia',
				url: 'http://feeds.bbci.co.uk/news/world/asia/rss.xml'
			},
			{
				label: 'Europe',
				title: 'Europe',
				path: '/news/bbc/europe',
				url: 'http://feeds.bbci.co.uk/news/world/europe/rss.xml'
			},
			{
				label: 'Latin America',
				title: 'Latin America',
				path: '/news/bbc/latin-america',
				url: 'http://feeds.bbci.co.uk/news/world/latin_america/rss.xml'
			},
			{
				label: 'Middle East',
				title: 'Middle East',
				path: '/news/bbc/middle-east',
				url: 'http://feeds.bbci.co.uk/news/world/middle_east/rss.xml'
			},
			{
				label: 'US & Canada',
				title: 'US & Canada',
				path: '/news/bbc/us-and-canada',
				url: 'http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml'
			},
			{
				label: 'England',
				title: 'England',
				path: '/news/bbc/england',
				url: 'http://feeds.bbci.co.uk/news/england/rss.xml'
			},
			{
				label: 'Northern Ireland',
				title: 'Northern Ireland',
				path: '/news/bbc/england',
				url: 'http://feeds.bbci.co.uk/news/northern_ireland/rss.xml'
			},
			{
				label: 'Scotland',
				title: 'Scotland',
				path: '/news/bbc/scotland',
				url: 'http://feeds.bbci.co.uk/news/scotland/rss.xml'
			},
			{
				label: 'Wales',
				title: 'Wales',
				path: '/news/bbc/wales',
				url: 'http://feeds.bbci.co.uk/news/wales/rss.xml'
			},
		]
	}
];
