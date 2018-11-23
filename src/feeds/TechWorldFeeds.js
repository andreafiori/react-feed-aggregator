export const TechWorldNewsGroup = {
	image: 				'tech-world.gif',
	title: 				'Tech World',
	description:	'Latest news from TechWorld',
	group: 				'websites',
	category: 		'Infosec',
	path: 				'/cyber-security/tech-world',
	country: 			'World',
	website: 			'https://www.techworld.com/',
	youtube: 			'',
	facebook: 		'https://www.facebook.com/TechworldUK',
	twitter: 			'https://twitter.com/TechworldNews',
	wikipedia: 		'',
	linkedin:			'https://www.linkedin.com/company/techworld',
	rss:					'https://www.techworld.com/rss/',
};

export const TechWorldNewsFeeds = [
	{
		title: 'Websites',
		feeds: [
			{
				label: 'Latest',
				title: 'Tech World latest posts and news',
				path: '/cyber-security/tech-world/latest',
				url: 'https://www.techworld.com/rss'
			},
			{
				label: 'News',
				title: 'Tech World latest news',
				path: '/cyber-security/tech-world/news',
				url: 'https://www.techworld.com/news/rss'
			},
			{
				label: 'Features',
				title: 'Tech World latest features',
				path: '/cyber-security/tech-world/features',
				url: 'https://www.techworld.com/features/rss'
			},
			{
				label: 'Analysis',
				title: 'Tech World analysis feeds',
				path: '/cyber-security/tech-world/analysis',
				url: 'https://www.techworld.com/analysis/rss'
			},
			{
				label: 'Reviews',
				title: 'Tech World reviews RSS feed',
				path: '/cyber-security/tech-world/reviews',
				url: 'https://www.techworld.com/review/rss'
			},
			{
				label: 'Galleries',
				title: 'Tech World galleries',
				path: '/cyber-security/tech-world/galleries',
				url: 'https://www.techworld.com/picture-gallery/rss'
			},
			// Not working (see feature)
			/* {
				label: 'Blogs',
				title: 'Tech World Blogs RSS feeds',
				path: '/cyber-security/tech-world/blogs',
				url: 'https://www.techworld.com/blog/rss'
			}, */
		]
	}
];