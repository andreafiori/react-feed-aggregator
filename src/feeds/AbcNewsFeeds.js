export const AbcNewsGroup = {
  image:        'abc-news.gif',
	title:        'ABC news',
	description:  'ABCNews.com RSS feeds',
	group:        'news',
	category:     'U.S.A',
	path:         '/news/abc-news',
	country:      'U.S.A',
	website:      'https://abcnews.go.com/',
	youtube:      '',
	facebook:     'https://www.facebook.com/abcnews',
  twitter:      'https://twitter.com/abc',
	flickr:				'',
	wikipedia:    'https://en.wikipedia.org/wiki/ABC_News',
	rss:          'http://abcnews.go.com/Site/page/rss--3520115',
};

export const AbcNewsFeeds = [
  {
		title: 'News',
		feeds: [
      {
        label: 		'Top Stories',
        title: 		'Top Storiesc ABCNews.com RSS feed',
        path: 		'/news/abc-news/top-stories',
        url: 			'http://feeds.abcnews.com/abcnews/topstories',
      },
      {
        label: 		'World Headlines',
        title: 		'World Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/world-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/internationalheadlines',
      },
      {
        label: 		'US Headlines',
        title: 		'US Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/us-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/usheadlines',
      },
      {
        label: 		'Politics Headlines',
        title: 		'Politics Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/politics-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/politicsheadlines',
      },
      {
        label: 		'The Blotter from Brian Ross',
        title: 		'The Blotter from Brian Ross ABCNews.com RSS feed',
        path: 		'/news/abc-news/the-blotter-from-brian-ross',
        url: 			'http://feeds.abcnews.com/abcnews/blotterheadlines',
      },
      {
        label: 		'Cuomo on the Case',
        title: 		'Cuomo on the Case ABCNews.com RSS feed',
        path: 		'/news/abc-news/cuomo-on-the-case',
        url: 			'http://feeds.abcnews.com/abcnews/thelawheadlines',
      },
      {
        label: 		'Money Headlines',
        title: 		'Money Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/money-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/moneyheadlines',
      },
      {
        label: 		'Technology Headlines',
        title: 		'Technology Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/technology-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/technologyheadlines',
      },
      {
        label: 		'Health Headlines',
        title: 		'Health Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/health-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/healthheadlines',
      },
      {
        label: 		'Entertainment Headlines',
        title: 		'Entertainment Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/entertainment-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/entertainmentheadlines',
      },
      {
        label: 		'Travel Headlines',
        title: 		'Travel Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/travel-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/travelheadlines',
      },
      {
        label: 		'ESPN Sports',
        title: 		'ESPN Sports ABCNews.com RSS feed',
        path: 		'/news/abc-news/espn-sports',
        url: 			'http://feeds.abcnews.com/abcnews/sportsheadlines',
      },
      {
        label: 		'World News Headlines',
        title: 		'World News Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/world-news-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/worldnewsheadlines',
      },
      {
        label: 		'20/20 Headlines',
        title: 		'20/20 Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/2020-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/2020headlines',
      },
      {
        label: 		'Primetime Headlines',
        title: 		'Primetime Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/primitive-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/primetimeheadlines',
      },
      {
        label: 		'Nightline Headlines',
        title: 		'Nightline Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/nightline-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/nightlineheadlines',
      },
      {
        label: 		'Good Morning America Headlines',
        title: 		'Good Morning America Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/good-morning-america-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/gmaheadlines',
      },
      {
        label: 		'This Week Headlines',
        title: 		'This Week Headlines ABCNews.com RSS feed',
        path: 		'/news/abc-news/this-week-headlines',
        url: 			'http://feeds.abcnews.com/abcnews/thisweekheadlines',
      },
    ]
  },
  {
		title: 'Most Popular',
		feeds: [
      {
        label: 		'Most Read Stories',
        title: 		'',
        path: 		'/news/abc-news/most-read-stories',
        url: 			'http://feeds.abcnews.com/abcnews/mostreadstories',
      },
      {
        label: 		'Most Viewed Videos',
        title: 		'',
        path: 		'/news/abc-news/most-viewed-videos',
        url: 			'http://feeds.abcnews.com/abcnews/mostviewedvideos',
      },
      {
        label: 		'Most Viewed Slideshows',
        title: 		'',
        path: 		'/news/abc-news/most-viewed-slideshows',
        url: 			'http://feeds.abcnews.com/abcnews/mostviewedslideshows',
      },
    ]
  },
  // Not working feeds...
  /* {
		title: 'Blog',
		feeds: [
      {
        label: 		'Headlines Blog',
        title: 		'',
        path: 		'/news/abc-news/headline-blog',
        url: 			'',
      },
      {
        label: 		'Politics Blog',
        title: 		'',
        path: 		'/news/abc-news/politics-blog',
        url: 			'',
      },
      {
        label: 		'Business Blog',
        title: 		'',
        path: 		'/news/abc-news/business-blog',
        url: 			'',
      },
      {
        label: 		'Technology Blog',
        title: 		'',
        path: 		'/news/abc-news/technology-blog',
        url: 			'',
      },
      {
        label: 		'Entertainment Blog',
        title: 		'',
        path: 		'/news/abc-news/entertainment-blog',
        url: 			'',
      },
      {
        label: 		'Lifestyle Blog',
        title: 		'',
        path: 		'/news/abc-news/lifestyle-blog',
        url: 			'',
      },
      {
        label: 		'Health Blog',
        title: 		'',
        path: 		'/news/abc-news/health-blog',
        url: 			'http://feeds.abcnews.com/healthblog',
      },
    ]
  }, */
];
