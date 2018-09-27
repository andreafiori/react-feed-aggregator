export const GolangNewsGroup = {
  image:        'golang.gif',
	title:        'Go Language News',
	description:  'Latest Golang news from the most popular websites',
	group:        'backend',
	category:     'Backend',
	path:         '/software-development/golang/',
  country:      'World',
	website:      'https://golang.org/',
	youtube:      '',
	facebook:     '',
  twitter:      '',
  gplus:        '',
	wikipedia:    '',
	rss:          '',
};

export const GolangNewsFeeds = [
  {
		title: 'Websites',
		feeds: [
			{
				label: 'Learn Go Programming',
				title: 'Learn Go Programming RSS feed',
        path: '/software-development/golang/learn-go-programming',
        website: 'https://blog.learngoprogramming.com',
				url: 'https://blog.learngoprogramming.com/feed',
      },
			{
				label: 'Golang Reddit',
				title: 'The Go Programming Language RSS Feed',
        path: '/software-development/golang/the-go-programming-language-reddit',
        website: 'https://www.reddit.com/r/golang/',
        isAtom: true,
				url: 'https://www.reddit.com/r/golang/.rss?format=xml',
      },
			{
				label: 'GolangCode',
				title: 'GolangCode RSS Feed',
        path: '/software-development/golang/golang-code',
        website: 'https://golangcode.com/',
				url: 'https://golangcode.com/index.xml',
      },
			{
				label: 'Golangbot',
				title: 'Golangbot | Golang tutorial RSS Feed',
        path: '/software-development/golang/golangbot-tutorial',
        website: 'https://golangbot.com/',
				url: 'https://golangbot.com/feed',
      },
			{
				label: 'The GoLang Blog',
				title: 'The Go Programming Language Blog RSS Feed',
        path: '/software-development/golang/go-programming-language-blog',
        website: 'https://blog.golang.org/',
        isAtom: true,
				url: 'https://blog.golang.org/feed.atom?format=xml',
      },
			{
				label: 'Go Forum',
				title: 'Go Forum | Latest topics RSS Feed',
        path: '/software-development/golang/go-forum',
        website: 'https://forum.golangbridge.org/',
				url: 'https://forum.golangbridge.org/latest.rss',
      },
			{
				label: 'JetBrains Goland blog',
				title: 'JetBrains | Gogland Blog RSS Feed',
        path: '/software-development/golang/jetbrains-goland-blog',
        website: 'https://blog.jetbrains.com/',
				url: 'https://blog.jetbrains.com/go/feed',
      },
			{
				label: 'Changelog',
				title: 'Changelog | Go Time RSS Feed',
        path: '/software-development/golang/changelog-go',
        website: 'https://changelog.com/gotime',
				url: 'https://changelog.com/gotime/feed',
      },
			{
				label: 'Applied Go',
				title: 'Applied Go on RSS Feed',
        path: '/software-development/golang/applied-go',
        website: 'https://appliedgo.net/',
				url: 'https://appliedgo.net/index.xml',
      },
			{
				label: 'Golang.ch',
				title: 'Golang | News, Libraries, Apps & more RSS Feed',
        path: '/software-development/golang/',
        website: 'https://golang.ch/',
				url: 'https://golang.ch/feed',
      },
			{
				label: 'LinuxLabs',
				title: 'LinuxLabs | Golang RSS Feed',
        path: '/software-development/golang/linux-labs-golang',
        website: 'https://linxlabs.com/category/golang/feed',
				url: 'https://linxlabs.com/category/golang/',
      },
			{
				label: 'goz',
				title: 'goz | Go\'s News RSS Feed',
        path: '/software-development/golang/goz',
        website: 'http://goz.hexacosa.net/',
        isAtom: true,
				url: 'http://goz.hexacosa.net/feed',
      },
      // Gocoding RSS Feed https://www.youtube.com/user/gocoding/videos
      // SDET http://sdet.us/category/golang/
      // Trinhhieu668 | Golang RSS Feed https://trinhhieu668.wordpress.com/category/big-data/golang/
      // Empty
      /* {
				label: '',
				title: '',
        path: '/software-development/golang/',
        website: '',
				url: '',
      }, */
    ]
  },
  {
		title: 'People',
		feeds: [
      {
				label: 'Dave Cheney',
				title: 'Dave Cheney | Go RSS Feed',
        path: '/software-development/golang/dave-cheney-go',
        website: '',
				url: '',
      },
      // Johng | Golang RSS Feed http://johng.cn/category/programming/golang/
    ]
  }
];
