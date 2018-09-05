
export const WallStreetJournalNewsGroup = {
  image:        'wall-street-journal.gif',
	title:        'Wall Street Journal',
	description:  'Wall Street Journal RSS feeds',
	group:        'wall-street-journal',
	category:     'U.S.A',
	path:         '/news/wall-street-journal',
	country:      'U.S.A',
	website:      'https://www.wsj.com/',
	youtube:      'http://www.youtube.com/user/WSJDigitalNetwork',
	facebook:     'http://www.facebook.com/wsj',
  twitter:      'http://twitter.com/WSJ',
  gplus:        'https://plus.google.com/117720626238470886461/posts',
	wikipedia:    'https://en.wikipedia.org/wiki/The_Wall_Street_Journal',
	rss:          'http://www.wsj.com/public/page/rss_news_and_feeds.html',
};

export const WallStreetJournalNewsFeeds = [
	{
		title: 'News & Commentary',
		feeds: [
			{
				label: 'Opinion',
				path: '/news/wall-street-journal/opinion',
				url: 'http://www.wsj.com/xml/rss/3_7041.xml'
			},
			{
				label: 'World News',
				path: '/news/wall-street-journal/world-news',
				url: 'http://www.wsj.com/xml/rss/3_7085.xml'
			},
			{
				label: 'U.S. Business',
				path: '/news/wall-street-journal/us-business',
				url: 'http://www.wsj.com/xml/rss/3_7014.xml'
			},
			{
				label: 'Markets News',
				path: '/news/wall-street-journal/market-news',
				url: 'http://www.wsj.com/xml/rss/3_7031.xml'
			},
			{
				label: 'Technology',
				path: '/news/wall-street-journal/technology',
				url: 'http://www.wsj.com/xml/rss/3_7455.xml'
			},
			{
				label: 'Lifestyle',
				path: '/news/wall-street-journal/lifestyle',
				url: 'http://www.wsj.com/xml/rss/3_7201.xml'
			},
		]
	},
	{
		title: 'Blog',
		feeds: [
			{
				label: '',
				title: '',
				path: '/news/wall-street-journal/opinion',
				url: ''
			},
			
		]
	},
];