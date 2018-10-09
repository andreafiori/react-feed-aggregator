export const SansNewsGroup = {
	image:        'sans.gif',
	title:        'SANS',
	description:  'SANS news feeds',
	group:        'sans',
	category:     'U.S.A',
	path:         '/cyber-security/sans',
	country:      'U.S.A',
	website:      'https://www.sans.org/',
	youtube:      '',
	facebook:     'https://www.facebook.com/sansemea',
  twitter:      'https://twitter.com/SANSEMEA',
	wikipedia:    '',
	linkedin:			'https://www.linkedin.com/company/sans-institute',
	rss:          'https://www.sans.org/rss',
};

export const SansNewsFeeds = [
	{
		title: 'Upcoming Training',
		feeds: [
			{
				label: 'ALL Training Events',
				title: 'ALL Training Events',
				path: '/cyber-security/sans/all-training-events',
				url: 'https://www.sans.org/find-training/rss/6541365'
			},
			{
				label: 'International Training Events',
				title: 'International Training Events',
				path: '/cyber-security/sans/all-training-events',
				url: 'http://www.sans.org/find-training/rss/6541465'
			},
			{
				label: '@Home Training Events',
				title: '@Home Training Events',
				path: '/cyber-security/sans/at-home-training-events',
				url: 'https://www.sans.org/find-training/rss/6541495'
			},
			{
				label: 'Community Training Events',
				title: 'Community Training Events',
				path: '/cyber-security/sans/community-training-events',
				url: 'https://www.sans.org/find-training/rss/6541505'
			},
			{
				label: 'Mentor Training Events',
				title: 'Mentor Training Events',
				path: '/cyber-security/sans/mentor-training-events',
				url: 'https://www.sans.org/find-training/rss/6541570'
			},
			// Course is a link, not an RSS
		]
	},
	{
		title: 'Resources',
		feeds: [
			// Free Upcoming Webcasts Feed contains an error!
			{
				label: 'SANS Newsbites',
				title: 'SANS Newsbites',
				path: '/cyber-security/sans/sans-newsbites',
				url: 'https://www.sans.org/newsletters/newsbites/rss/'
			},
			{
				label: 'Security Awareness Tip of the Day',
				title: 'Security Awareness Tip of the Day',
				path: '/cyber-security/sans/security-awareness-tip-of-the-day',
				url: 'http://feeds2.feedburner.com/security-awareness-tip-of-the-day' // https://www.sans.org/tip-of-the-day/rss
			},
			{
				label: 'SANS AppSec Street Fighter',
				title: 'AppSec Street Fighter - SANS Institute RSS Feed',
				path: '/cyber-security/websites/sans-appsec-street-fighter',
				website: 'http://software-security.sans.org/blog',
				facebook: 'https://www.facebook.com/pages/SANS-Institute/173623382673767',
				twitter: 'http://twitter.com/sansappsec',
				url: 'https://ics.sans.org/blog/feed//'
				// url: 'http://software-security.sans.org/blog/feed/'
			},
			// Other feeds are not working
			{
				label: 'Free Upcoming Webcasts Feed',
				title: 'Free Upcoming Webcasts Feed',
				path: '/cyber-security/sans/free-upcoming-webcastas-feed',
				url: 'https://www.sans.org/webcasts/rss/'
			},
			{
				label: 'SANS Newsbites',
				title: 'SANS Newsbites',
				path: '/cyber-security/sans/sans-newsbites',
				url: 'https://www.sans.org/newsletters/newsbites/rss/'
			},
			{
				label: 'All the latest happening with SANS',
				title: 'All the latest happening with SANS',
				path: '/cyber-security/sans/all-the-latest-happening-with-sans',
				url: ''
			},
			{
				label: 'Security Awareness Tip of the Day RSS Feed',
				title: 'Security Awareness Tip of the Day RSS Feed',
				path: '/cyber-security/sans/security-awareness-tip-of-the-day-rss-feed',
				url: 'http://feeds2.feedburner.com/security-awareness-tip-of-the-day'
			},
			{
				label: 'Press Room Announcements',
				title: 'Press Room Announcements',
				path: '/cyber-security/sans/press-room-announcements',
				url: 'http://feeds.feedburner.com/SansInstitutePress'
			},
			{
				label: 'Last 25 Papers added to Reading Room',
				title: 'Last 25 Papers added to Reading Room',
				path: '/cyber-security/sans/last-papers-added-reading-room',
				url: 'https://www.sans.org/reading-room/rss/'
			},
			/* {
				label: 'Security Awareness',
				title: 'Security Awareness',
				path: '/cyber-security/sans/security-awareness',
				url: 'https://securingthehuman.sans.org/blog/feed/'
			}, */
		]
	},

];
