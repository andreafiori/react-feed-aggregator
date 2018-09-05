/*
[
	// RDF format:
	// CIA 
	// CIA newsroom https://www.cia.gov/news-information/your-news/cia-newsroom/RSS.xml
	// CIA careers https://www.cia.gov/news-information/your-news/cia-careers/RSS.xml
	// CIA library https://www.cia.gov/news-information/your-news/cia-library/RSS.xml
];

*/

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
	wikipedia:    '',
	rss:          '',
};

export const GovernmentNewsFeeds = [
	{
		category: 'Goverment',
		feeds: [
			{
				label: 'NSA.gov',
				title: 'National Security Agency latest posts and news',
				path: '/news/wall-street-journal/wsj-top-stories',
				url: 'https://www.nsa.gov/rss.xml',
			},
			{
				label: 'SITE Intelgroup',
				title: 'SITE Intelgroup latest posts',
				path: '/news/wall-street-journal/wsj-top-stories',
				url: 'https://ent.siteintelgroup.com/feed/rss/',
			},
			{
				label: 'DNI.gov',
				title: 'DNI.govlatest posts',
				path: '/news/wall-street-journal/wsj-top-stories',
				url: 'https://www.dni.gov/index.php/newsroom?format=feed&type=rss',
			},
		]
	}
];

export const CiaNewsGroup = {
  image:        'cia.gif',
	title:        'Government',
	description:  'Government RSS feeds',
	group:        'government',
	category:     'World',
	path:         '/cyber-security/government',
	country:      'U.S.A',
	website:      'https://www.cia.gov/',
	youtube:      '',
	facebook:     '',
  twitter:      '',
  gplus:        '',
	wikipedia:    '',
	rss:          'https://www.cia.gov/news-information/your-news/cia-newsroom/RSS.xml',
};

export const CiaFeeds = [{

}];