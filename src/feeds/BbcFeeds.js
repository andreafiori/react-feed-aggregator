/**
 * BBC news feeds 
 */
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
		title: 'BBC',
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
	}
];
