export const GovernmentNewsGroup = {
  image:        'government.gif',
	title:        'Government',
	description:  'Government RSS feeds',
	group:        'government',
	category:     'World',
	path:         '/cyber-security/government',
	country:      'World',
	website:      '',
	youtube:      '',
	facebook:     '',
  twitter:      '',
	gplus:        '',
	flickr:				'',
	wikipedia:    '',
	rss:          '',
};

export const GovernmentNewsFeeds = [
	{
		title: 'Goverment',
		feeds: [
			{
				label: 		'NSA.gov',
				website: 	'https://www.nsa.gov/',
				twitter: 	'http://www.twitter.com/nsagov',
				youtube: 	'https://www.youtube.com/channel/UCXfnaN5jl0RPR1dirFTOZ3A',
				title: 		'National Security Agency latest posts and news',
				path: 		'/cyber-security/government/nsa',
				url: 			'https://www.nsa.gov/rss.xml',
			},
			{
				label:		'SITE Intelgroup',
				website:	'https://www.siteintelgroup.com/',
				twitter: 	'https://twitter.com/siteintelgroup',
				title: 		'SITE Intelgroup latest posts',
				path: 		'/cyber-security/government/site-intelgroup',
				url: 			'https://ent.siteintelgroup.com/feed/rss/',
			},
			{
				label: 		'DNI.gov',
				title: 		'DNI.gov latest posts',
				path: 		'/cyber-security/government/dni-gov',
				url: 			'https://www.dni.gov/index.php/newsroom?format=feed&type=rss',
			},
		]
	},
	{
		title: 				'CIA',
		website:      'https://www.cia.gov/',
		youtube:      'http://www.youtube.com/user/ciagov',
		facebook:     'https://www.facebook.com/Central.Intelligence.Agency',
		twitter:      'https://twitter.com/CIA',
		gplus:        '',
		flickr:				'http://www.flickr.com/photos/ciagov',
		wikipedia:    'https://en.wikipedia.org/wiki/Central_Intelligence_Agency',
		rss:          'https://www.cia.gov/news-information/your-news',
		feeds: [
			{
				label: 'Newsroom',
				title: 'Official press releases and statements, messages to the CIA workforce, speech transcripts from Agency leadership and Featured Stories about current events at the CIA',
				path: '/cyber-security/government/newsroom',
				url: 'https://www.cia.gov/news-information/your-news/cia-newsroom/RSS.xml',
			},
			{
				label: 'Careers',
				title: 'New job postings, updates to current positions and information about Agency careers opportunities and employees.',
				path: '/cyber-security/government/careers',
				url: 'https://www.cia.gov/news-information/your-news/cia-careers/RSS.xml',
			},
			{
				label: 'Library',
				title: 'Updates to The World Factbook, World Leaders, Studies in Intelligence, Historical Collection Division, CIA Maps and Featured Stories about CIA history and publication.',
				path: '/cyber-security/government/library',
				url: 'https://www.cia.gov/news-information/your-news/cia-library/RSS.xml',
			},
		]
	}
];

// NIST (goverment) https://www.nist.gov/pao/nist-rss-feeds