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

// List 1: https://blog.feedspot.com/cyber_security_rss_feeds/
// List 2: https://blog.feedspot.com/cyber_security_news_rss_feeds/
// Blogs list https://digitalguardian.com/blog/top-50-infosec-blogs-you-should-be-reading
export const CyberSecurityWebsitesFeeds = [
	{
		title: 'Websites',
		feeds: [
			{
				label: 'The Hacker News ',
				title: 'The Hacker News | Cyber Security,Hacking News RSS Feed',
				path: '/cyber-security/websites/the-hacker-news',
				website: 'https://thehackernews.com/',
				url: 'http://feeds.feedburner.com/TheHackersNews/?format=xml'
			},
			{
				label: 'Krebs on Security',
				title: 'Krebs on Security RSS Feed',
				path: '/cyber-security/websites/krebs-security',
				website: 'http://www.krebsonsecurity.com/',
				url: 'http://krebsonsecurity.com/feed/'
			},
			{
				label: 'Naked Security',
				title: 'Naked Security RSS Feed',
				path: '/cyber-security/websites/naked-security',
				website: 'https://nakedsecurity.sophos.com/',
				facebook: 'https://www.facebook.com/SophosSecurity',
				twitter: 'https://twitter.com/#!/NakedSecurity',
				linkedin: 'https://www.linkedin.com/company/5053/',
				url: 'https://nakedsecurity.sophos.com/feed/'
			},
			// Not working, check format
			/* {
				label: 'Google Online Security Blog',
				title: 'Google Online Security Blog RSS Feed',
				path: '/cyber-security/websites/google-online',
				website: 'https://security.googleblog.com/',
				url: 'http://feeds.feedburner.com/GoogleOnlineSecurityBlog/?format=xml'
			}, */
			{
				label: 'Infosecurity Magazine',
				title: ' Infosecurity Magazine - Information Security & IT Security RSS Feed',
				path: '/cyber-security/websites/infosecurity-magazine',
				website: 'https://www.infosecurity-magazine.com/',
				facebook: 'https://www.facebook.com/pages/Infosecurity-Magazine/210560332330063',
				twitter: 'https://twitter.com/InfosecurityMag',
				linkedin: 'http://www.linkedin.com/groups?gid=2035794&trk=myg_ugrp_ovr',
				gplus: 'https://plus.google.com/+InfosecurityMagazine/posts',
				url: 'http://www.infosecurity-magazine.com/rss/news/'
			}, 
			{
				label: 'CSO Online',
				title: 'CSO Online RSS Feed',
				path: '/cyber-security/websites/cso-online',
				website: 'https://www.csoonline.com/',
				facebook: 'https://www.facebook.com/CSOonline',
				twitter: 'https://twitter.com/csoonline',
				linkedin: 'http://www.linkedin.com/company/csoonline',
				gplus: 'https://plus.google.com/107528455727304200419/posts',
				url: 'http://www.csoonline.com/index.rss'
			},
			{
				label: 'CSO Security News',
				title: 'CSO | Security News',
				path: '/cyber-security/websites/cso-online',
				website: 'https://www.csoonline.com/',
				url: 'https://www.csoonline.com/news/index.rss'
			},
			{
				label: 'Security Affairs',
				title: 'Security Affairs RSS Feed',
				path: '/cyber-security/websites/security-affairs',
				website: 'http://securityaffairs.co/',
				url: 'http://securityaffairs.co/wordpress/feed'
			},
			{
				label: 'CIO Security',
				title: 'CIO Security RSS Feed',
				path: '/cyber-security/websites/cio-security',
				website: 'http://www.cio.com/category/security/cio-security',
				url: 'https://www.cio.com/category/security/index.rss'
			},
			{
				label: 'E Hacking News',
				title: 'E Hacking News | Latest Hacker News and IT Security News RSS Feed',
				path: '/cyber-security/websites/ehacker-news',
				website: 'http://www.ehackingnews.com/',
				url: 'http://www.ehackingnews.com/feeds/posts/default?alt=rss'
			},
			{
				label: 'SecurityWeek',
				title: 'SecurityWeek | Information Security News, IT Security News & Expert Insights RSS Feed',
				path: '/cyber-security/websites/security-week',
				website: 'http://www.securityweek.com/',
				url: 'http://feeds.feedburner.com/Securityweek'
			},
			{
				label: 'Help Net Security',
				title: 'Help Net Security RSS Feed',
				path: '/cyber-security/websites/help-net-security',
				website: 'https://www.helpnetsecurity.com/',
				url: 'https://www.helpnetsecurity.com/feed'
			},
			{
				label: 'HackRead',
				title: 'HackRead | Latest Cyber Crime - InfoSec- Tech - Hacking News RSS Feed',
				path: '/cyber-security/websites/',
				website: 'https://www.hackread.com/',
				url: 'https://www.hackread.com/feed'
			},
			{
				label: 'SearchSecurity',
				title: 'SearchSecurity RSS Feed',
				path: '/cyber-security/websites/search-security',
				website: 'https://searchsecurity.techtarget.com/',
				url: 'http://searchsecurity.techtarget.com/rss/Security-Wire-Daily-News.xml'
			},
			{
				label: 'Comodo News',
				title: 'Comodo News | Internet Security Information RSS Feed',
				path: '/cyber-security/websites/comodo-news',
				website: 'https://blog.comodo.com/feed',
				url: 'https://blog.comodo.com/'
			},
			{
				label: 'TechWorm',
				title: 'TechWorm RSS Feed',
				path: '/cyber-security/websites/techworm',
				website: 'https://www.techworm.net/',
				url: 'https://www.techworm.net/feed'
			},
			{
				label: 'Security Gladiators',
				title: 'Security Gladiators - Internet Security News RSS Feed',
				path: '/cyber-security/websites/',
				website: 'https://securitygladiators.com/internet-security-news/',
				url: 'https://securitygladiators.com/internet-security-news/feed'
			},
			{
				label: 'GBHackers On Security',
				title: 'GBHackers On Security RSS Feed',
				path: '/cyber-security/websites/gb-hackers',
				website: 'https://www.gbhackers.com/',
				url: 'https://gbhackers.com/feed'
			},
			{
				label: 'BankInfoSecurity.com',
				title: 'BankInfoSecurity.com RSS Feed',
				path: '/cyber-security/websites/bank-info-security',
				website: 'http://www.bankinfosecurity.com/news',
				url: 'http://feeds.feedburner.com/bankinfosecurity/com'
			},
			// Microsoft Blog category
			/* {
				label: 'Microsoft Security',
				title: 'Cybersecurity – Microsoft Secure Blog RSS Feed,
				path: '/cyber-security/websites/microsoft-cybersecurity-blog',
				website: 'http://www.cio.com/',
				url: 'https://blogs.microsoft.com/microsoftsecure/category/cybersecurity/'
			}, */
			// The Guardinan https://www.theguardian.com/technology/data-computer-security/rss | https://www.theguardian.com/technology/data-computer-security
			// Forbes https://www.forbes.com/security/feed/ | 
			{
				label: 'Cisco Blog',
				title: 'Cisco Blog - Security RSS Feed',
				path: '/cyber-security/websites/cisco-blog',
				website: 'https://blogs.cisco.com/security',
				facebook: 'https://www.facebook.com/ciscosecurity?ref=nf',
				twitter: 'https://twitter.com/ciscosecurity',
				linkedin: 'http://www.linkedin.com/company/cisco',
				youtube: 'https://www.youtube.com/user/Cisco/playlists?shelf_id=5&sort=dd&view=50',
				url: 'http://blogs.cisco.com/category/security/feed/'
			},
			{
				label: 'Zero Day | ZDNet',
				title: 'Zero Day | ZDNet RSS Feed',
				path: '/cyber-security/websites/zero-day-zdnetw',
				website: 'https://www.zdnet.com',
				facebook: 'https://www.facebook.com/pages/ZDNet/5953112932',
				twitter: 'http://twitter.com/zdnet',
				linkedin: 'https://www.linkedin.com/company/zdnet-com',
				youtube: 'https://www.youtube.com/channel/UCr9QWb5RKLfaunjKHJZAdQQ',
				url: 'https://www.zdnet.com/blog/security/rss.xml'
			},
			// TechRepublic https://www.techrepublic.com/topic/security/ | http://www.techrepublic.com/rssfeeds/topic/security/?feedType=rssfeeds
			// NIST NSTIC NOTES RSS Feed https://www.nist.gov/blogs/i-think-therefore-iam | https://www.nist.gov/blogs/i-think,-therefore-iam/rss.xml
			{
				label: 'TRUSTe Blog',
				title: 'TRUSTe Blog RSS Feed',
				path: '/cyber-security/websites/truste-blog',
				website: 'https://www.trustarc.com/blog/',
				facebook: 'https://www.facebook.com/TrustArc/',
				twitter: 'https://twitter.com/trustarc',
				linkedin: 'https://www.linkedin.com/company/21121',
				gplus: 'https://plus.google.com/+TrustArc',
				url: 'http://www.trustarc.com/blog/feed/'
			},
			{
				label: 'Webroot Threat Blog',
				title: 'Webroot Threat Blog RSS Feed',
				path: '/cyber-security/websites/webroot-threat-blog',
				website: 'https://www.webroot.com/blog/',
				facebook: 'https://www.facebook.com/Webroot',
				youtube: 'https://www.youtube.com/user/WebrootSoftware?sub_confirmation=1',
				twitter: 'https://twitter.com/Webroot',
				linkedin: 'https://www.linkedin.com/company/7434',
				gplus: 'https://plus.google.com/101998920516021024298/posts',
				url: 'https://www.webroot.com/blog/feed'
			},
			{
				label: 'ZoneAlarm Blog',
				title: 'ZoneAlarm Blog RSS Feed',
				path: '/cyber-security/websites/zone-alarm',
				website: 'https://www.zonealarm.com/',
				facebook: 'https://www.facebook.com/ZoneAlarm/',
				twitter: 'https://twitter.com/zonealarm',
				gplus: 'https://plus.google.com/110257440616937271858/posts',
				youtube: 'https://www.youtube.com/zonealarmsecurity',
				url: 'https://www.zonealarm.com/blog/feed/'
			},
			{
				label: 'Threat Insight Blog',
				title: 'Threat Insight Blog - Cybersecurity Intelligence | Proofpoint',
				path: '/cyber-security/websites/threat-insight',
				website: 'https://www.proofpoint.com/',
				facebook: 'http://www.facebook.com/proofpoint',
				twitter: 'http://www.twitter.com/proofpoint',
				linkedin: 'https://www.linkedin.com/company/proofpoint',
				gplus: 'https://plus.google.com/+proofpoint/posts',
				youtube: 'https://www.youtube.com/channel/UCIvtJgsrUzFo90NKeiVozhQ',
				url: 'https://www.proofpoint.com/us/rss.xml'
			},
			// Veracode http://www.veracode.com/blog/feed
			// Tripwire https://www.tripwire.com/state-of-security/
			{
				label: 'SensorsTechForum',
				title: 'SensorsTechForum RSS Feed',
				path: '/cyber-security/websites/sensor-tech-forum',
				website: 'https://sensorstechforum.com/',
				url: 'https://sensorstechforum.com/feed'
			},
			{
				label: 'Heimdal Security',
				title: 'Heimdal Security Blog RSS Feed',
				path: '/cyber-security/websites/heimdall-security',
				website: 'https://heimdalsecurity.com/blog/',
				url: 'https://heimdalsecurity.com/blog/feed'
			}, 
			{
				label: 		'Seqrite Blog',
				title: 		'Seqrite Blog RSS Feed',
				path: 		'/cyber-security/websites/seqrite-blog',
				website:	'https://blogs.seqrite.com/',
				facebook: 'https://www.facebook.com/seqrite',
				twitter: 	'https://twitter.com/Seqrite',
				youtube: 	'https://www.youtube.com/channel/UCPgS-p40ag_l8i3mhMWW7Gg',
				gplus: 		'https://plus.google.com/114969253508422817802/posts',
				linkedin:	'https://www.linkedin.com/company/seqrite',
				url: 			'https://blogs.seqrite.com/feed/',
			},
			{
				label: 		'DataSunrise',
				title: 		'DataSunrise RSS Feed',
				path: 		'/cyber-security/websites/data-sunrise',
				website:	'https://www.datasunrise.com/blog/',
				facebook: 'https://www.facebook.com/datasunrise',
				twitter: 	'https://twitter.com/datasunrise',
				gplus: 		'https://plus.google.com/+Datasunrise-Database-Security-Suite/posts',
				linkedin:	'https://www.linkedin.com/company/datasunrise-inc',
				url: 			'https://www.datasunrise.com/feed',
			},
			{
				label: 		'IT Security Central',
				title: 		'IT Security Central RSS Feed',
				path: 		'/cyber-security/websites/it-security-central',
				website:	'https://itsecuritycentral.teramind.co/',
				facebook: 'https://www.facebook.com/pages/Teramind/1523438361205247',
				twitter: 	'https://twitter.com/teramindco',
				youtube: 	'https://www.youtube.com/channel/UCSkRq9qTqFJyyjQdovb0-Lg',
				gplus: 		'https://plus.google.com/+TeramindCo',
				linkedin:	'https://www.linkedin.com/company/5090184?trk=tyah&trkInfo=tarId%3A1408638847886%2Ctas%3Ateramind%2Cidx%3A1-1-1',
				url: 			'https://itsecuritycentral.teramind.co/feed',
			},
			{
				label: 		'Lastline Cyber Security Blog',
				title: 		'Lastline Cyber Security Blog | Malware Research & Analysis RSS Feed',
				path: 		'/cyber-security/websites/last-line-blog',
				website:	'https://www.lastline.com/blog/',
				url: 			'https://www.lastline.com/category/blog/feed/',
			},
			{
				label: 		'Cloudbric Blog',
				title: 		'Cloudbric Blog | Website Protection RSS Feed',
				path: 		'/cyber-security/websites/cloudbric',
				website:	'https://www.cloudbric.com/blog/',
				url: 			'https://www.cloudbric.com/feed',
			},
			{
				label: 		'Hacking vision',
				title: 		'Hacking Vision RSS Feed',
				path: 		'/cyber-security/websites/hack-vision',
				website:	'https://hackingvision.com/',
				url: 			'https://hackingvision.com/feed',
			},
			{
				label: 		'Hacker Combat',
				title: 		'Hacker Combat | Cyber Security and Hacking News RSS Feed',
				path: 		'/cyber-security/websites/hacker-combat',
				website:	'https://www.hackercombat.com/',
				url: 			'https://hackercombat.com/feed',
			},
			{
				label: 		'Application and Cybersecurity Blog',
				title: 		'Application and Cybersecurity Blog | Security Innovation RSS Feed',
				path: 		'/cyber-security/websites/application-and-cybersecurity-blog',
				website:	'https://blog.securityinnovation.com/',
				url: 			'https://blog.securityinnovation.com/rss.xml',
			},
			{
				label: 		'CloudMask Blog',
				title: 		'CloudMask Blog RSS Feed',
				path: 		'/cyber-security/websites/cloudmask-blog',
				website:	'https://www.cloudmask.com/',
				url: 			'https://www.cloudmask.com/blog/rss.xml',
			},
			{
				label: 		'MyTopPosts | Cyber Security',
				title: 		'MyTopPosts | Cyber Security RSS Feed',
				path: 		'/cyber-security/websites/my-top-posts',
				website:	'http://www.mytopposts.com/category/cyber-security',
				url: 			'http://www.mytopposts.com/category/cyber-security/feed',
			},
			// Security weekly http://securityweekly.com/podcast/psw.xml | http://securityweekly.com/podcast/psw.xml
			// Empty
			/* {
				label: 		'',
				title: 		'',
				path: 		'/cyber-security/websites/',
				website:	'',
				facebook: '',
				twitter: 	'',
				youtube: 	'',
				gplus: 		'',
				linkedin:	'',
				url: 			'',
			}, */
		]
	},
	{
		title: 'Antivirus',
		feeds: [
			{
				label: 'McAfee Antivirus',
				title: 'McAfee Antivirus | Securing Tomorrow RSS Feed',
				path: '/cyber-security/websites/mcafee-antivirus',
				website: 'https://securingtomorrow.mcafee.com/',
				url: 'https://securingtomorrow.mcafee.com/feed'
			},
			{
				label: 'Symantec Connect',
				title: 'Symantec Connect - Security Response RSS Feed',
				path: '/cyber-security/websites/symantec',
				website: 'https://www.symantec.com/connect/symantec-blogs/sr',
				facebook: '',
				twitter: '',
				linkedin: '',
				gplus: '',
				url: 'https://www.symantec.com/connect/item-feeds/all/all/feed/all/all/all'
			},
			// Quick Heal Antivirus https://blogs.quickheal.com/feed/
			// TrendMicro https://blog.trendmicro.com/ | http://feeds.trendmicro.com/TrendMicroSimplySecurity
		]
	},
	{
		title: 'People',
		feeds: [
			{
				label: 'Bruce Schneier',
				title: 'Schneier on Security RSS Feed',
				path: '/cyber-security/websites/bruce-schneier',
				website: 'https://www.schneier.com/',
				facebook: 'https://www.facebook.com/bruce.schneier',
				twitter: 'https://twitter.com/schneierblog/',
				url: 'https://www.schneier.com/blog/atom.xml'
			},
			{
				label: 'Graham Cluley',
				title: 'Graham Cluley RSS Feed',
				path: '/cyber-security/websites/graham-cluley',
				website: 'https://www.grahamcluley.com/',
				twitter: 'https://twitter.com/gcluley',
				youtube: 'https://www.youtube.com/subscription_center?add_user=GrahamCluleyCom',
				gplus: 'https://plus.google.com/+GrahamCluleyCom',
				linkedin: 'http://uk.linkedin.com/in/grahamcluley',
				url: 'https://www.grahamcluley.com/feed'
			},
			{
				label: 'Adam Levin',
				title: 'Adam Levin - Identity, Security, and Personal Finance RSS Feed',
				path: '/cyber-security/websites/adam-levin',
				website: 'https://www.adamlevin.com/',
				url: 'https://adamlevin.com/feed/'
			},
			{
				label: 'Troy Hunt',
				title: 'Troy Hunt RSS Feed',
				path: '/cyber-security/websites/troy-hunt',
				website: 'https://www.troyhunt.com/',
				facebook: 'https://www.facebook.com/troyahunt',
				twitter: 'https://twitter.com/troyhunt',
				youtube: 'https://www.youtube.com/user/troyhuntdotcom',
				gplus: 'https://plus.google.com/+TroyHunt',
				linkedin: 'https://www.linkedin.com/in/troyhunt',
				url: 'https://feeds.feedburner.com/TroyHunt'
			},
			{
				label: 'Marco Ramilli',
				title: 'Marco Ramilli\'s Blog RSS Feed',
				path: '/cyber-security/websites/marco-ramilli',
				website: 'https://marcoramilli.blogspot.com',
				url: 'http://marcoramilli.blogspot.com/feeds/posts/default?alt=rss'
			},

			// Kevin Mitnick No feeds https://blogs.quickheal.com/feed/
			// Dan Lohrmann http://www.govtech.com/blogs/lohrmann-on-cybersecurity/
			// Empty
			/* {
				label: '',
				title: '',
				path: '/cyber-security/websites/',
				url: ''
			}, */
		]
	}
];
