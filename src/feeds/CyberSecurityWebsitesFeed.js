export const CyberSecurityWebsitesNewsGroup = {
	image: 				'cyber-security-websites.gif',
	title: 				'Cyber Security Websites',
	description:	'Latest infosec news',
	group: 				'websites',
	category: 		'Infosec',
	path: 				'/cyber-security/websites',
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

export const CyberSecurityWebsitesFeeds = [
	{
		title: 'Websites',
		feeds: [
			{
				label: 'We live Security',
				title: 'We live Security blog RSS feed',
				path: '/cyber-security/websites/we-live-security',
				website: 'https://www.welivesecurity.com/',
				url: 'http://feeds.feedburner.com/eset/blog?format=xml'
			},
			{
				label: 'McAfee Antivirus',
				title: 'McAfee Antivirus | Securing Tomorrow RSS Feed',
				path: '/cyber-security/websites/mcafee-antivirus',
				website: 'https://securingtomorrow.mcafee.com/',
				url: 'https://securingtomorrow.mcafee.com/feed'
			},
			{
				label: 'Krebs on Security',
				title: 'Krebs on Security RSS Feed',
				path: '/cyber-security/websites/krebs-security',
				website: 'http://www.krebsonsecurity.com/',
				url: 'http://krebsonsecurity.com/feed/'
			},
			
			/* {
				label: 'Hacker news',
				title: '',
				path: '/cyber-security/dzone/hacker-news',
				url: ''
			}, */
		]
	},
	{
		title: 'People',
		feeds: [
			{
				label: 'Schneier on Security',
				title: 'Schneier on Security RSS Feed',
				path: '/cyber-security/websites/schneier-security',
				website: 'https://nakedsecurity.sophos.com/',
				facebook: 'https://www.facebook.com/SophosSecurity',
				twitter: 'https://twitter.com/#!/NakedSecurity',
				linkedin: 'https://www.linkedin.com/company/5053/',
				url: 'https://nakedsecurity.sophos.com/feed/'
			},
			// Empty
			/* {
				label: '',
				title: '',
				path: '/cyber-security/dzone/',
				url: ''
			}, */
		]
	}
];
