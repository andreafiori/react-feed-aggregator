export const PHPNewsGroup = {
	image: 				'php-news.gif',
	title: 				'PHP News',
	description:	'Latest PHP news, language and frameworks',
	group: 				'php-news',
	category: 		'Backend',
	path: 				'/software-development/php-news',
	country: 			'World',
	website: 			'http://php.net/',
	youtube: 			'',
	facebook: 		'',
	twitter: 			'',
	wikipedia: 		'',
	linkedin:			'',
	rss:					'http://php.net/releases/feed.php',
};

// List https://blog.feedspot.com/php_rss_feeds/
export const PHPNewsFeeds = [
	{
		title: 'Websites',
		feeds: [
			{
				label: 'PHP.net releases',
				title: 'PHP.net releases',
				path: '/software-development/php-news/php-net-releases',
				isAtom: true,
				url: 'http://php.net/releases/feed.php'
			},
			{
				label: 'PHP round table',
				title: 'PHP round table',
				path: '/software-development/php-news/php-round-table',
				url: 'http://feeds.feedburner.com/PhpRoundtable?format=xml'
			},
			{
				label: 'Sitepoint PHP',
				title: 'Latest news from Sitepoint',
				path: '/software-development/php-news/sitepoint-php',
				url: 'https://www.sitepoint.com/php/feed/'
			},
			{
				label: 'Reddit PHP',
				title: 'Latest news from Reddit',
				path: '/software-development/php-news/reddit-php',
				isAtom: true,
				url: 'https://www.reddit.com/r/PHP/.rss' // http://feeds.feedburner.com/phpclassesblog-xml?format=xml
			},
			{
				label: 'PHP UK conference',
				title: 'PHP UK conference RSS feed',
				path: '/software-development/php-news/php-uk-conference',
				isAtom: true,
				url: 'https://www.youtube.com/feeds/videos.xml?user=phpukconference'
			},
			
			{
				label: 'PHP Classes',
				title: 'Latest news from PHP Classes',
				path: '/software-development/php-news/php-classes',
				url: 'http://feeds.feedburner.com/phpclassesblog-xml?format=xml'
			},
			{
				label: 'PHP Storm Blog',
				title: 'Latest news from PHP Storm Blog',
				path: '/software-development/php-news/php-storm-blog',
				url: 'https://blog.jetbrains.com/phpstorm/feed/'
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
				title: 'Latest news from Voices of the elePHPant podcasts',
				path: '/software-development/php-news/voices-of-the-elephpant',
				url: 'https://voicesoftheelephpant.com/feed/'
			},
			{
				label: 'KillerPHP.com',
				title: 'Latest articles from KillerPHP.com',
				path: '/software-development/php-news/killer-php-com',
				url: 'https://www.killerphp.com/feed/'
			},
			{
				label: 'Murze.be Blog',
				title: 'Latest articles from Murze.be, a blog on Laravel & PHP',
				path: '/software-development/php-news/killer-php-com',
				url: ''
			},
			{
				label: 'PHP Gurukul',
				title: 'Latest articles from PHP gurukul',
				path: '/software-development/php-news/php-gurukul',
				url: 'https://phpgurukul.com/feed'
			},
			{
				label: 'PHPDeveloper.org',
				title: 'Latest articles from PHP gurukul',
				path: '/software-development/php-news/php-developer-org',
				url: 'http://phpdeveloper.org/feed'
			},
			// Generic software dev, not PHP specific...
			/* {
				label: 'Code Diesel',
				title: 'Latest articles from Code Diesel',
				path: '/software-development/php-news/code-diesel',
				url: 'https://www.codediesel.com/feed/'
			}, */
		]
	},
	{
		title: 'Frameworks',
		feeds: [
			{
				label: 'Yii 2',
				title: 'Latest Yii 2 framework news',
				path: '/software-development/php-news/yii2-framework',
				facebook: 'https://www.facebook.com/groups/yiitalk/',
				github: 'https://github.com/yiisoft',
				twitter: 'https://twitter.com/yiiframework',
				url: 'https://www.yiiframework.com/rss.xml'
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
				label: 'Laravel News',
				title: 'Latest news from Laravel News',
				path: '/software-development/php-news/laravel-news',
				url: 'https://feed.laravel-news.com/'
			},
			{
				label: 'Laravel Daily',
				title: 'Latest news from Laravel Daily',
				path: '/software-development/php-news/laravel-daily',
				url: 'https://laraveldaily.com/feed/'
			},
			{
				label: 'Laracasts',
				title: 'Latest news from Laracasts, Jeffrey Way',
				path: '/software-development/php-news/laracasts',
				isAtom: true,
				url: 'https://laracasts.com/feed',
			},
		]
	},
	{
		title: 'People',
		feeds: [
			{
				label: 'Rob Allen',
				title: 'Rob Allen Akrabat blog feed',
				path: '/software-development/php-news/rob-allen',
				website: 'https://www.akrabat.com/',
				url: 'https://akrabat.com/feed/'
			},
			{
				label: 'Fabien Potencier',
				title: 'Fabien Potencier blog feed',
				path: '/software-development/php-news/fabien-potencier',
				url: 'http://feeds.fabien.potencier.org/aidedecamp?format=xml'
			},
			{
				label: 'Sebastian Bergmann',
				title: 'Sebastian Bergmann blog feed',
				path: '/software-development/php-news/sebastian-bergmann',
				url: 'https://sebastian-bergmann.de/atom.xml?format=xml'
			},
			{
				label: 'Adam Wathan',
				title: 'Adam Wathan blog feed',
				path: '/software-development/php-news/adma-wathan',
				url: 'https://adamwathan.me/rss/'
			},
		]
	}
];
