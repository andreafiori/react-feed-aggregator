export const IsacaNewsGroup = {
  image:        'isaca.gif',
	title:        'ISACA news feeds',
	description:  'ISACA RSS feeds',
	group:        'cyber-security',
	category:     'Certificatins',
	path:         '/cyber-security/isaca',
	country:      'World',
	website:      'https://www.isaca.org/',
	youtube:      '',
	facebook:     '',
  twitter:      '',
	wikipedia:    '',
	rss:          'https://www.isaca.org/pages/rss-feed.aspx',
};

export const IsacaNewsFeeds = [
	{
		title: 'Categories',
		feeds: [
			{
				label: 'ISACA new blog',
				title: 'ISACA new blog RSS feed',
				path: '/cyber-security/isaca/isaca-new-blog',
				hideDescription: true,
				url: 'https://www.isaca.org/Knowledge-Center/Blog/_layouts/listfeed.aspx?List=%7bEF7CBC6D-9997-4B62-96A4-A36FB7E171AF%7d',
      },
			{
				label: 'Press Releases',
				title: 'Press Releases RSS feed',
				path: '/cyber-security/isaca/press-releases',
				hideDescription: true,
				url: 'https://www.isaca.org/_layouts/feed.aspx?xsl=1&web=/About-ISACA/Press-room&page=fab9db35-cd16-49c9-81dc-85d1a9a134cc&wp=967472e7-3cb0-4836-8cc1-a5852b94ca4e',
			},
			{
				label: 'Journal Author Blog Posts',
				title: 'Journal Author Blog Posts RSS feed',
				path: '/cyber-security/isaca/journal-author-blog-posts',
				hideDescription: true,
				url: 'https://www.isaca.org/Journal/Blog/_layouts/listfeed.aspx?List=%7b48C836C2-E659-4325-8553-6B5381F1FCD0%7d',
      },
		]
	},
];