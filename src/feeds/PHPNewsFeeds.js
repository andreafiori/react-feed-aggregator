export const PHPNewsGroup = {
	image: 				'php-news.gif',
	title: 				'PHP news',
	description:	'Latest PHP news, language and frameworks',
	group: 				'php-news',
	category: 		'Web',
	path: 				'/software-development/php-news',
	country: 			'World',
	website: 			'',
	youtube: 			'',
	facebook: 		'',
	twitter: 			'',
	wikipedia: 		'',
	gplus:				'',
	linkedin:			'',
	rss:					'',
};

// List https://blog.feedspot.com/php_rss_feeds/
export const PHPNewsFeeds = [
	{
		title: 'Websites',
		feeds: [
			{
				label: 'PHP round table',
				title: 'PHP round table',
				path: '/software-development/php-news/php-round-table',
				url: 'http://feeds.feedburner.com/PhpRoundtable?format=xml'
			},
			{
				label: 'Symfony',
				title: 'Latest Symfony web components and framework news',
				path: '/software-development/php-news/symfony',
				url: 'https://feeds.feedburner.com/symfony/blog'
			},
			{
				label: 'Zend Blog',
				title: 'Latest news from the Zend Blog',
				path: '/software-development/php-news/zend-blog',
				url: 'https://blog.zend.com/feed/'
			},
			{
				label: 'Zend Security',
				title: 'Latest news from Zend Security',
				path: '/software-development/php-news/zend-security',
				url: 'https://framework.zend.com/security/feed'
			},
			{
				label: 'Laracasts',
				title: 'Latest news from Zend Security',
				path: '/software-development/php-news/zend-security',
				url: ''
			},
			{
				label: 'Sitepoint PHP',
				title: 'Latest news from Sitepoint',
				path: '/software-development/php-news/sitepoint-php',
				url: 'https://www.sitepoint.com/php/feed/'
			},
			// Not working?
			/* {
				label: 'Reddit PHP',
				title: 'Latest news from Reddit',
				path: '/software-development/php-news/reddit-php',
				url: 'https://www.reddit.com/r/PHP/.rss'
			}, */
			{
				label: 'Reddit PHP',
				title: 'Latest news from Reddit',
				path: '/software-development/php-news/php-classes',
				url: 'http://feeds.feedburner.com/phpclassesblog-xml?format=xml'
			},
			{
				label: 'PHP pot',
				title: 'Latest news from PHP pot',
				path: '/software-development/php-news/php-pot',
				url: 'https://phppot.com/feed/'
			},
			{
				label: 'PHP flow',
				title: 'Latest news from PHP flow',
				path: '/software-development/php-news/php-flow',
				url: 'http://feeds.feedburner.com/PhpFlow?format=xml'
			},
			{
				label: 'Voices of the elePHPant',
				title: 'Latest news from Voices of the elePHPant',
				path: '/software-development/php-news/voices-of-the-elephpant',
				url: 'https://voicesoftheelephpant.com/feed/'
			},
		]
	},
];
