
export const CnnNewsGroup = {
	image: 'cnn.gif',
	title: 'CNN',
	description: 'CNN.com RSS feeds',
	group: 'cnn',
	category: 'World',
	path: '/news/cnn',
	country: 'U.S.A',
	website: 'https://www.cnn.com',
	youtube: 'https://www.youtube.com/user/CNN',
	facebook: 'https://www.facebook.com/cnninternational',
	twitter: 'https://twitter.com/cnni',
	wikipedia: 'https://en.wikipedia.org/wiki/CNN',
	rss: 'http://edition.cnn.com/services/rss/',
};

export const CnnNewsFeeds = [
	{
		title: 'CNN news',
		feeds: [
			{
				label: 'Top stories',
				title: 'CNN top stories',
				path: '/news/cnn/cnn-top-stories',
				url: 'http://rss.cnn.com/rss/edition.rss'
			},
			{
				label: 'World',
				title: 'CNN World news',
				path: '/news/cnn/world',
				url: 'http://rss.cnn.com/rss/edition_world.rss'
			},
			{
				label: 'Africa',
				title: 'CNN Africa news',
				path: '/news/cnn/africa',
				url: 'http://rss.cnn.com/rss/edition_africa.rss'
			},
			{
				label: 'Americas',
				title: 'CNN Americas news',
				path: '/news/cnn/americas',
				url: 'http://rss.cnn.com/rss/edition_americas.rss'
			},
			{
				label: 'Asia',
				title: 'CNN Asia news',
				path: '/news/cnn/asia',
				url: 'http://rss.cnn.com/rss/edition_asia.rss'
			},
			{
				label: 'U.S',
				title: 'CNN U.S news',
				path: '/news/cnn/us',
				url: 'http://rss.cnn.com/rss/edition_us.rss'
			},
			{
				label: 'Money',
				title: 'CNN Money news',
				path: '/news/cnn/money',
				url: 'http://rss.cnn.com/rss/money_news_international.rss'
			},
			{
				label: 'Technology',
				title: 'CNN Technology news',
				path: '/news/cnn/technology',
				url: 'http://rss.cnn.com/rss/edition_technology.rss'
			},
			{
				label: 'Science and space',
				title: 'CNN Science and space news',
				path: '/news/cnn/science-and-space',
				url: 'http://rss.cnn.com/rss/edition_space.rss'
			},
		]
	
	}

];
