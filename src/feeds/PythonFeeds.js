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
			/* {
				label: 'Reedit Python',
				title: 'Reedit Python',
				path: '/software-development/python/reddit-Python',
				website: '',
				url: '',
			},
			// Use another RSS format
			{
				label: 'Python Software Foundation',
				title: 'Python Software Foundation News RSS Feed',
				path: '/software-development/python/python-software-foundation',
				website: 'http://pyfound.blogspot.com/',
				url: 'http://feeds.feedburner.com/PythonSoftwareFoundationNews?format=xml',
      }, */
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
     
    ]
  }
];
