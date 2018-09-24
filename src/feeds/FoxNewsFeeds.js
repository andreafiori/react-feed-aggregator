export const FoxNewsGroup = {
  image: 				'fox-news.gif',
	title: 				'Fox News',
	description:	'Fox news',
	group: 				'foxnews',
	category: 		'TV',
	path: 				'/news/foxnews',
	country: 			'U.S.A',
	website: 			'http://www.foxnews.com/',
	youtube: 			'',
	facebook: 		'http://www.facebook.com/FoxNews',
	twitter: 			'http://twitter.com/foxnews',
	wikipedia: 		'',
  linkedin:			'',
  gplus:        'http://www.google.com/+FoxNews',
	rss:					'http://www.foxnews.com/about/rss/',
}

export const FoxNewsFeeds = [
	{
		title: 'Categories',
		feeds: [
      {
				label: 	'Latest Headlines',
				title:	'Latest Headlines RSS feed on FoxNews',
				path: 	'/news/foxnews/latest-headlines',
				url: 		'http://feeds.foxnews.com/foxnews/latest?format=xml'
			},
      {
				label: 	'Most popular',
				title:	'Most popular RSS feed on FoxNews',
				path: 	'/news/foxnews/most-popular',
				url: 		'http://feeds.foxnews.com/foxnews/most-popular?format=xml'
			},
      {
				label: 	'Entertainment',
				title:	'Entertainment RSS feeds on FoxNews',
				path: 	'/news/foxnews/entertainment',
				url: 		'http://feeds.foxnews.com/foxnews/entertainment?format=xml'
			},
      {
				label: 	'Health',
				title:	'Health RSS feeds on FoxNews',
				path: 	'/news/foxnews/health',
				url: 		'http://feeds.foxnews.com/foxnews/health?format=xml'
			},
      {
				label: 	'Lifestyle',
				title:	'Lifestyle RSS feeds on FoxNews',
				path: 	'/news/foxnews/lifestyle',
				url: 		'http://feeds.foxnews.com/foxnews/section/lifestyle?format=xml'
			},
      {
				label: 	'Opinion',
				title:	'Opinion RSS feeds on FoxNews',
				path: 	'/news/foxnews/opinion',
				url: 		'http://feeds.foxnews.com/foxnews/opinion?format=xml'
			},
      {
				label: 	'Politics',
				title:	'Politics RSS feeds on FoxNews',
				path: 	'/news/foxnews/politics',
				url: 		'http://feeds.foxnews.com/foxnews/politics?format=xml'
			},
      {
				label: 	'Science',
				title:	'Science RSS feeds on FoxNews',
				path: 	'/news/foxnews/science',
				url: 		'http://feeds.foxnews.com/foxnews/science?format=xml'
			},
      {
				label: 	'Sports',
				title:	'Sports RSS feeds on FoxNews',
				path: 	'/news/foxnews/sports',
				url: 		'http://feeds.foxnews.com/foxnews/sports?format=xml'
			},
      {
				label: 	'Tech',
				title:	'Tech RSS feeds on FoxNews',
				path: 	'/news/foxnews/tech',
				url: 		'http://feeds.foxnews.com/foxnews/tech?format=xml'
			},
      {
				label: 	'Travel',
				title:	'Travel RSS feeds on FoxNews',
				path: 	'/news/foxnews/travel',
				url: 		'http://feeds.foxnews.com/foxnews/internal/travel/mixed?format=xml'
			},
      {
				label: 	'Video',
				title:	'U.S RSS feeds on FoxNews',
				path: 	'/news/foxnews/united-states',
				url: 		'http://feeds.foxnews.com/foxnews/video?format=xml'
			},
      {
				label: 	'World',
				title:	'World RSS feeds on FoxNews',
				path: 	'/news/foxnews/world',
				url: 		'http://feeds.foxnews.com/foxnews/world?format=xml'
			},
    ]
  }
];
