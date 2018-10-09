export const RubyNewsGroup = {
	image:        'ruby.gif',
	title:        'Ruby news',
	description:  'Latest Ruby news',
	group:        'ruby',
	category:     'Tech',
	path:         '/software-development/ruby/',
	country:      'World',
	website:      '',
	youtube:      '',
	facebook:     '',
  twitter:      '',
	wikipedia:    '',
	linkedin:			'',
	rss:          '',
};

// List https://blog.feedspot.com/ruby_on_rails_rss_feeds/
export const RubyNewsFeeds = [
  {
    title: 'Websites',
    feeds: [
      {
				label: 'Official Ruby on Rails Blog',
				title: 'Official Ruby on Rails Blog RSS Feed',
        path: '/software-development/ruby/official-ruby-rails-blog',
				website: 'http://weblog.rubyonrails.org/',
				isAtom: true,
				url: 'http://weblog.rubyonrails.org/feed/atom.xml',
			},
			{
				label: 'Reddit for Rubyists',
				title: 'Reddit for Rubyists RSS Feed',
        path: '/software-development/ruby/reddit-rubylists',
				website: 'https://www.reddit.com/r/ruby/',
				isAtom: true,
				url: 'https://www.reddit.com/r/ruby/.rss?format=xml',
      },
      {
				label: 'RubyFlow Blog',
				title: 'RubyFlow Blog RSS Feed',
        path: '/software-development/ruby/rubyflow-blog',
        website: 'http://www.rubyflow.com/',
				url: 'http://www.rubyflow.com/rss',
      },
      {
				label: 'Rubyland Blog',
				title: 'Rubyland Blog RSS Feed',
        path: '/software-development/ruby/rubyland-blog',
        website: 'http://rubyland.news/',
				url: 'http://rubyland.news/feed.rss',
      },
      {
				label: 'JetBrains - RubyMine Blog',
				title: 'JetBrains - RubyMine Blog RSS Feed',
        path: '/software-development/ruby/jetbrains-rubymine-blog',
				website: 'https://blog.jetbrains.com/ruby/',
				url: 'http://feeds.feedburner.com/jetbrains_rubymine?format=xml',
      },
      {
				label: 'Awesome Ruby',
				title: 'Awesome Ruby RSS Feed',
        path: '/software-development/ruby/awesome-ruby',
        website: 'https://ruby.libhunt.com/',
				url: 'https://ruby.libhunt.com/newsletter/feed',
      },
      {
				label: 'Arkency Blog',
				title: 'Arkency Blog RSS Feed',
        path: '/software-development/ruby/arkency-ruby',
        website: 'http://blog.arkency.com/',
				url: 'http://feeds.feedburner.com/arkency.xml',
      },
      {
				label: 'Drifting Ruby Screencasts',
				title: 'Drifting Ruby Screencasts RSS Feed',
        path: '/software-development/ruby/drifting-ruby-screencasts',
        website: 'https://www.driftingruby.com/',
				url: 'https://www.driftingruby.com/episodes/feed.atom',
      },
      {
				label: 'Devchat.tv - RR Episodes',
				title: 'Devchat.tv - RR Episodes RSS Feed',
        path: '/software-development/ruby/devchat-tv',
        website: 'https://devchat.tv/ruby-rogues',
				url: 'https://devchat.tv/ruby-rogues/feed',
      },
      /* {
				label: 'GoRails',
				title: 'GoRails RSS Feed',
        path: '/software-development/ruby/gorail-youtube-channel',
        website: 'https://www.youtube.com/channel/UCIQmhQxCvLHRr3Beku77tww/videos',
				url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCIQmhQxCvLHRr3Beku77tww',
      }, */
      {
				label: 'Railsware Blog',
				title: 'Railsware Blog RSS Feed',
        path: '/software-development/ruby/railsware-blog',
        website: 'http://railsware.com/blog/',
				url: 'http://railsware.com/blog/feed/rss',
      },
      {
				label: 'BigBinary Blog',
				title: 'BigBinary Blog RSS Feed',
        path: '/software-development/ruby/bigbinary-blog',
        website: 'http://railsware.com/blog/',
				url: 'http://blog.bigbinary.com/feed.xml',
      },
      {
				label: 'RubyTapas Blog',
				title: 'RubyTapas Blog RSS Feed',
        path: '/software-development/ruby/rubytapas-blog',
        website: 'https://www.rubytapas.com/',
				url: 'https://www.rubytapas.com/feed',
      },
      {
				label: '',
				title: '',
        path: '/software-development/ruby/',
        website: '',
				url: '',
      },
    ]
  },
];

