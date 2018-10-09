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
			{
				label: 		'IT Governance Blog',
				title: 		'IT Governance Blog | Cyber Security RSS Feed',
				path: 		'/cyber-security/government/it-governance-blog',
				website:	'https://www.itgovernance.co.uk/blog/category/cyber-security/',
				facebook: 'https://www.facebook.com/ITGovernanceLtd',
				twitter: 	'https://twitter.com/ITGovernance',
				youtube: 	'http://www.youtube.com/itgovernanceltd',
				linkedin:	'https://www.linkedin.com/company/it-governance',
				url: 			'https://www.itgovernance.co.uk/blog/feed/',
			},
			// NIST (goverment) https://www.nist.gov/ | https://www.nist.gov/pao/nist-rss-feeds
			{
				label: 		'National Cybersecurity Institute',
				title: 		'National Cybersecurity Institute RSS Feed',
				path: 		'/cyber-security/government/national-cybersecurity-institute',
				website:	'http://www.nationalcybersecurityinstitute.org/',
				facebook: 'https://www.facebook.com/pages/National-Cybersecurity-Institute/1422466254632382',
				twitter: 	'https://twitter.com/nci_excelsior',
				linkedin:	'https://www.linkedin.com/company/national-cybersecurity-institute?trk=company_name',
				url: 			'http://www.nationalcybersecurityinstitute.org/feed',
			},
			{
				label: 		'U.S Coast Guard',
				title: 		'U.S Coast Guard RSS Feed',
				path: 		'/cyber-security/government/us-coast-guard',
				website:	'https://www.uscg.mil/',
				url: 			'http://allhands.coastguard.dodlive.mil/feed/',
			},
		]
	},
	{
		title: 				'CIA',
		website:      'https://www.cia.gov/',
		youtube:      'http://www.youtube.com/user/ciagov',
		facebook:     'https://www.facebook.com/Central.Intelligence.Agency',
		twitter:      'https://twitter.com/CIA',
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
	},
	{
		title: 'U.S. Department of Defense',
		website: 'https://dod.defense.gov',
		facebook: 'https://www.facebook.com/DeptofDefense',
		linkedin: 'https://www.linkedin.com/company/united-states-department-of-defense',
		twitter: 'https://twitter.com/DeptofDefense',
		rss: 'https://dod.defense.gov/News/RSS/',
		feeds: [
			{
				label: 'News Articles',
				title: 'DoD News Articles RSS Feed',
				path: '/cyber-security/government/dod-news-articles',
				url: 'https://dod.defense.gov/DesktopModules/ArticleCS/RSS.ashx?max=10&ContentType=1&Site=727',
			},
			{
				label: 'Lead Photos',
				title: 'DoD Lead Photos RSS Feed',
				path: '/cyber-security/government/dod-lead-photos',
				url: 'https://dod.defense.gov/desktopmodules/imagegallery/dgovfeeds/leadphotos.ashx?SMPI=694&ModuleId=488&TabId=132',
			},
			{
				label: 'Photo Essays',
				title: 'DoD Photo Essays RSS Feed',
				path: '/cyber-security/government/dod-photo-essays',
				url: 'https://dod.defense.gov/DesktopModules/MediaCollectionList/RSS.ashx?PortalId=1&ModuleId=1155',
			},
			{
				label: 'Week in Photos',
				title: 'DoD Week in Photos RSS Feed',
				path: '/cyber-security/government/dod-week-in-photos',
				url: 'https://dod.defense.gov/DesktopModules/MediaCollectionList/RSS.ashx?PortalId=1&ModuleId=1165',
			},
			{
				label: 'Press Advisories',
				title: 'DoD Press Advisories RSS Feed',
				path: '/cyber-security/government/dod-press-advisories',
				url: 'https://dod.defense.gov/DesktopModules/ArticleCS/RSS.ashx?max=10&ContentType=2&Site=727',
			},
			{
				label: 'News Releases',
				title: 'DoD News Releases RSS Feed',
				path: '/cyber-security/government/dod-press-advisories',
				url: 'https://dod.defense.gov/DesktopModules/ArticleCS/RSS.ashx?max=10&ContentType=9&Site=727',
			},
			{
				label: 'Contract Announcements',
				title: 'DoD Contract Announcements RSS Feed',
				path: '/cyber-security/government/dod-contract-announcements',
				url: 'https://dod.defense.gov/DesktopModules/ArticleCS/RSS.ashx?max=10&ContentType=400&Site=727',
			},
			{
				label: 'Transcripts',
				title: 'DoD Transcripts RSS Feed',
				path: '/cyber-security/government/dod-transcripts',
				url: 'https://dod.defense.gov/DesktopModules/ArticleCS/RSS.ashx?max=10&ContentType=13&Site=727',
			},
			{
				label: 'Speeches',
				title: '',
				path: '/cyber-security/government/dod-speeches',
				url: 'https://dod.defense.gov/DesktopModules/ArticleCS/RSS.ashx?max=10&ContentType=11&Site=727',
			},
			{
				label: 'Secretary of Defense Speeches',
				title: 'DoD Secretary of Defense Speeches RSS Feed',
				path: '/cyber-security/government/dod-secretary-of-defense-speeches',
				url: 'https://dod.defense.gov/DesktopModules/ArticleCS/RSS.ashx?max=10&ContentType=11&Site=727&Customspeechwho=16001',
			},
		]
	},
	{
		title: 'Marine Corps',
		website: 'https://www.marines.mil/',
		rss: 'https://www.marines.mil/News/Feeds.aspx',
		feeds: [
			{
				label: 'MarinesTV Video',
				title: 'MarinesTV Video RSS Feed',
				path: '/cyber-security/government/marine-tv-video',
				url: 'http://www.dvidshub.net/rss/unit/637#',
			},
			{
				label: 'Marine Corps News',
				title: 'Marine Corps News RSS Feed',
				facebook: 'http://www.facebook.com/marines',
				twitter: 'https://twitter.com/usmc',
				youtube: 'http://www.youtube.com/Marines',
				path: '/cyber-security/government/marine-tv-video',
				url: 'https://www.marines.mil/DesktopModules/ArticleCS/RSS.ashx?max=10&ContentType=1&Site=481',
			},
			{
				label: 'Press Releases',
				title: 'Press Releases RSS Feed',
				path: '/cyber-security/government/marine-press-releases',
				url: 'https://www.marines.mil/DesktopModules/ArticleCS/RSS.ashx?max=10&ContentType=2&Site=481',
			},
			{
				label: 'ALMARS',
				title: 'ALMARS The Official United States Marine Corps Public Website Messages RSS Feed',
				path: '/cyber-security/government/marine-almars',
				url: 'https://www.marines.mil/DesktopModules/ArticleCS/RSS.ashx?ContentType=6&Site=481&max=10&category=14335',
			},
			{
				label: 'MARADMINS',
				title: 'MARADMINS RSS Feed',
				path: '/cyber-security/government/marine-maradmins',
				url: 'https://www.marines.mil/DesktopModules/ArticleCS/RSS.ashx?ContentType=6&Site=481&max=10&category=14336',
			},
			{
				label: 'Orders & Directives',
				title: 'Marine Orders & Directives RSS Feed',
				path: '/cyber-security/government/marine-orders-directives',
				url: 'https://www.marines.mil/DesktopModules/ArticleCS/RSS.ashx?ContentType=5&Site=481&max=10',
			},
		]
	},
	{
		title: 'Navy',
		website: 'https://www.navy.mil/',
		facebook: 'https://www.facebook.com/USNavy',
		twitter: 'https://twitter.com/USNavy',
		youtube: 'https://www.youtube.com/user/usnavy',
		rss: 'https://www.navy.mil/remoteMedia.asp',
		feeds: [
			{
				label: 'Top Stories',
				title: 'Top Stories RSS Feed',
				path: '/cyber-security/government/navy-top-stories',
				url: 'https://www.navy.mil/xml/topStories.asp',
			},
			{
				label: 'All Hands Online',
				title: 'All Hands Online RSS Feed',
				path: '/cyber-security/government/navy-all-hands-online',
				url: 'https://www.navy.mil/xml/ahoCurrentStories.asp',
			},
			{
				label: 'Top Photos',
				title: 'Top Photos RSS Feed',
				path: '/cyber-security/government/navy-top-photos',
				url: 'https://www.navy.mil/xml/IOTDrss.xml',
			},
			{
				label: 'Video Gallery',
				title: 'Video Gallery RSS Feed',
				path: '/cyber-security/government/navy-video-gallery',
				url: 'https://www.navy.mil/xml/feeds/rssVideo.asp',
			},
			{
				label: 'All Hands Update',
				title: 'All Hands Update RSS Feed',
				path: '/cyber-security/government/navy-all-hands-update',
				url: 'https://www.navy.mil/xml/feeds/rssAHU.asp',
			},
			{
				label: 'POD Notes',
				title: 'POD Notes RSS Feed',
				path: '/cyber-security/government/navy-pod-notes',
				url: 'https://www.navy.mil/xml/feeds/podNotes.asp',
			},
			{
				label: 'Feature Stories',
				title: 'Feature Stories RSS Feed',
				path: '/cyber-security/government/navy-feature-stories',
				url: 'https://www.navy.mil/xml/rssFeatureStories.asp',
			},
			{
				label: 'Local Stories',
				title: 'Local Stories RSS Feed',
				path: '/cyber-security/government/navy-local-stories',
				url: 'https://www.navy.mil/xml/rssLocalStories.asp',
			},
			{
				label: 'This Day in Naval History',
				title: ' RSS Feed',
				path: '/cyber-security/government/navy-this-day-naval-history',
				url: 'https://www.navy.mil/xml/feeds/navHist.asp',
			},
			// Emoty \ no news
			/* {
				label: 'Navy Leader Planning Guide',
				title: 'Navy Leader Planning Guide RSS Feed',
				path: '/cyber-security/government/navy-navy-leader-planning-guide',
				url: 'https://www.navy.mil/xml/feeds/nlpgItems.asp',
			}, */
			// Not working, enclosure url tag?!
			/* {
				label: 'All Hands Radio (iTunes)',
				title: 'All Hands Radio (iTunes) RSS Feed',
				path: '/cyber-security/government/navy-all-hands-radio-itunes',
				url: 'https://www.navy.mil/podcast/NMCNradio/NMCNradio.xml',
			}, */
		]
	},
];
