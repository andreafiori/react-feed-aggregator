export const PythonNewsGroup = {
  image:        'python.gif',
	title:        'Python News',
	description:  'Latest news about Python',
	group:        'python',
	category:     'Backend',
	path:         '/software-development/python',
	country:      'World',
	website:      '',
	youtube:      '',
	facebook:     '',
  twitter:      '',
  gplus:        '',
	wikipedia:    '',
	rss:          '',
};

// List: https://blog.feedspot.com/python_rss_feeds/
export const PythonNewsFeeds = [
	{
		title: 'Websites',
		feeds: [
			{
				label: 'Reddit Python',
				title: 'Reddit Python',
				path: '/software-development/python/reddit-python',
				website: 'https://www.reddit.com/r/Python/',
				isAtom: true,
				url: 'https://www.reddit.com/r/Python/.rss',
			},
			{
				label: 'Python Software Foundation',
				title: 'Python Software Foundation News RSS Feed',
				path: '/software-development/python/python-software-foundation',
				website: 'http://pyfound.blogspot.com/',
				isAtom: true,
				url: 'http://feeds.feedburner.com/PythonSoftwareFoundationNews?format=xml',
      },
			{
				label: 'Planet Python',
				title: 'Planet Python RSS Feed',
				path: '/software-development/python/planet-python',
				website: 'http://planetpython.org/',
				url: 'https://planetpython.org/rss20.xml',
      },
			{
				label: 'Import Python Weekly',
				title: 'PImport Python Weekly Blog RSS Feed',
				path: '/software-development/python/import-python-weekly',
				website: 'https://importpython.com/blog/',
				url: 'https://importpython.com/blog/feed/',
      },
			{
				label: 'Practical Business Python',
				title: 'Practical Business Python RSS Feed',
				path: '/software-development/python/practical-business-python',
				website: 'https://importpython.com/blog/',
				url: 'https://importpython.com/blog/feed/',
      },
			{
				label: 'Python insider',
				title: 'Python insider',
				path: '/software-development/python/python-insider',
				website: 'https://pythoninsider.blogspot.com/',
				url: 'http://feeds.feedburner.com/PythonInsider?format=xml',
      },
			{
				label: 'The Mouse Vs. The Python',
				title: 'The Mouse Vs. The Python RSS Feed',
				path: '/software-development/python/mouse-vs-python',
				website: 'http://www.blog.pythonlibrary.org/',
				url: 'http://www.blog.pythonlibrary.org/feed/',
      },
			{
				label: 'PyCharm blog',
				title: 'PyCharm Blog RSS Feed',
				path: '/software-development/python/pycharm-blog',
				website: 'https://blog.jetbrains.com/pycharm/',
				url: 'https://blog.jetbrains.com/pycharm/feed',
			},
			{
				label: 'Planet SciPy',
				title: 'Planet SciPy RSS Feed',
				path: '/software-development/python/planet-scipy',
				website: 'https://planet.scipy.org/',
				isAtom: true,
				url: 'http://planet.scipy.org/atom.xml',
      },
			{
				label: 'Python – Red Hat Developer Blog',
				title: 'Python – Red Hat Developer Blog RSS Feed',
				path: '/software-development/python/python-red-hat-developer-blog',
				website: 'https://developers.redhat.com/blog/tag/python/',
				url: 'https://developers.redhat.com/blog/tag/python/feed',
      },
			{
				label: 'PythonAnywhere',
				title: 'PythonAnywhere RSS Feed',
				path: '/software-development/python/python-anywhere',
				website: 'https://blog.pythonanywhere.com/',
				url: 'https://blog.pythonanywhere.com/feed',
      },
			{
				label: 'Real Python',
				title: 'Real Python RSS Feed',
				path: '/software-development/python/real-python',
				website: 'https://realpython.com/blog/',
				url: 'https://realpython.com/atom.xml?format=xml',
      },
			{
				label: 'Python Tips',
				title: 'Python Tips | Your daily dose of bite sized python tips RSS Feed',
				path: '/software-development/python/python-tips',
				website: 'https://www.pythontips.com/',
				url: 'https://pythontips.com/feed',
      },
			{
				label: 'Cool Python Codes',
				title: 'Cool Python Codes RSS Feed',
				path: '/software-development/python/cool-python-codes',
				website: 'http://coolpythoncodes.com/',
				url: 'http://coolpythoncodes.com/feed',
			},
			// Anvil - Drag and Drop Python web apps RSS Feed !?
			{
				label: 'Zerynth – Python for Microcontrollers, IoT and Embedded Solutions',
				title: 'Zerynth – Python for Microcontrollers, IoT and Embedded Solutions RSS Feed',
				path: '/software-development/python/zerynth-python',
				website: 'http://www.zerynth.com/blog/',
				url: 'http://www.zerynth.com/feed',
			},
			{
				label: 'The PyCon blog',
				title: 'The PyCon blog RSS Feed',
				path: '/software-development/python/pycon-blog',
				website: 'http://pycon.blogspot.com/',
				url: 'http://pycon.blogspot.com/feeds/posts/default',
			},
			{
				label: 'ALL YOUR BASE ARE BELONG TO US',
				title: 'ALL YOUR BASE ARE BELONG TO US RSS Feed',
				path: '/software-development/python/all-yout-base-are-belong-to-us',
				website: 'https://allofyourbases.com/',
				url: 'https://allofyourbases.com/feed',
			},
			{
				label: 'PythonHunter',
				title: 'PythonHunter RSS Feed',
				path: '/software-development/python/python-hunter',
				website: 'http://pransukh.blogspot.com/',
				url: 'http://pransukh.blogspot.com/feeds/posts/default?alt=rss',
			},
			{
				label: 'The Python Guru',
				title: 'The Python Guru RSS Feed',
				path: '/software-development/python/the-python-guru',
				website: 'http://thepythonguru.com/blog/',
				url: 'http://thepythonguru.com/blog/feed',
			},
			{
				label: 'Bixly Blog',
				title: 'Bixly - Django Developer & Python Programmer Blog RSS Feed',
				path: '/software-development/python/bixty-blog',
				website: 'https://bixly.com/blog/',
				url: 'https://bixly.com/blog/feed',
			},
			{
				label: 'Python Tutorials for Kids 13',
				title: 'Python Tutorials for Kids 13 | Let\'s learn Python! RSS Feed',
				path: '/software-development/python/python-tutoeials-for-kids',
				website: 'https://python4kids.brendanscott.com/',
				url: 'https://python4kids.brendanscott.com/feed',
			},
    ]
  },
  {
    title: 'People',
    feeds: [
      {
				label: 'Doug Hellmann',
				title: 'Doug Hellmann – Python, OpenStack, and Open Source RSS Feed',
        path: '/software-development/python/doug-hellmann',
        website: 'https://doughellmann.com/blog/',
				url: 'http://feeds.doughellmann.com/PyMOTW',
			},
      {
				label: 'Armin Ronacher',
				title: 'Armin Ronacher RSS Feed',
        path: '/software-development/python/armin-ronacher',
        website: 'http://lucumr.pocoo.org/',
				url: 'http://lucumr.pocoo.org/feed.atom',
			},
			// Parse error \ invalid format but working on IE!
      /* {
				label: 'Giacomo Lacava',
				title: 'Subclassed RSS Feed',
        path: '/software-development/python/subclassed-giacomo-lacava',
        website: 'http://blog.pythonaro.com/',
				url: 'http://blog.pythonaro.com/feeds/posts/default',
      }, */
    ]
  }
];
