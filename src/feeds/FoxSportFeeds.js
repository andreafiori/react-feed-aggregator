const buildQueryString = (params) => {
  const esc = encodeURIComponent;
  const query = Object.keys(params)
                        .map(k => esc(k) + '=' + esc(params[k]))
                        .join('&');
  return query;  
}

const buildFeedParameters = (tag) => {
  let params = {
    partnerKey: 'zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU',
  };

  if (typeof tag !== 'undefined' && tag !== null) {
    params['tag'] = tag;
  }

  return params;
}

const buildFeedUrl = (tag) => {
  const query = buildQueryString( buildFeedParameters(tag) );
  
  return 'http://api.foxsports.com/v1/rss?' + query;
}

export const FoxSportNewsGroup = {
	image:        'fox-sports.gif',
	title:        'Fox Sports',
	description:  'Latest Fox Sports news',
	group:        'sport',
	category:     'U.S.A',
	path:         '/sport/fox-sports',
	country:      'U.S.A',
	website:      'https://www.foxsports.com/',
	youtube:      'https://www.youtube.com/foxsports',
	facebook:     'http://facebook.com/foxsports',
  twitter:      'http://twitter.com/foxsports',
  wikipedia:    'https://en.wikipedia.org/wiki/Fox_Sports',
  linkedin:     '',
	rss:          'https://www.foxsports.com/rss-feeds',
};

export const FoxSportNewsFeeds = [
  {
    title: 'Headlines',
    feeds: [
      {
        label: 'All Headlines',
        path: '/sport/fox-sports/all-headlines',
        url: buildFeedUrl(null)
      },
      {
        label: 'MLB',
        path: '/sport/fox-sports/mlb',
        url: buildFeedUrl('mlb')
      },
      {
        label: 'NFL',
        path: '/sport/fox-sports/nfl',
        url: buildFeedUrl('nfl')
      },
      {
        label: 'NCAA FB',
        path: '/sport/fox-sports/ncca-fb',
        url: buildFeedUrl('cfb')
      },
      {
        label: 'NBA',
        path: '/sport/fox-sports/nba',
        url: buildFeedUrl('nba')
      },
      {
        label: 'NHL',
        path: '/sport/fox-sports/nhl',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=nhl'
      },
      {
        label: 'NCAA BK',
        path: '/sport/fox-sports/ncca-bk',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=cbk'
      },
      {
        label: 'Nascar',
        path: '/sport/fox-sports/nascar',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=nascar'
      },
      {
        label: 'UFC',
        path: '/sport/fox-sports/ufc',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=ufc'
      },
      {
        label: 'Motor',
        path: '/sport/fox-sports/motor',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=motor'
      },
      {
        label: 'Golf',
        path: '/sport/fox-sports/golf',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=golf'
      },
      {
        label: 'Soccer',
        path: '/sport/fox-sports/soccer',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=soccer'
      },
      {
        label: 'Olympics',
        path: '/sport/fox-sports/olympics',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=olympics'
      },
      {
        label: 'Tennis',
        path: '/sport/fox-sports/tennis',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=tennis'
      },
      {
        label: 'Horseracing',
        path: '/sport/fox-sports/tennis',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=horse-racing'
      },
      {
        label: 'WNBA',
        path: '/sport/fox-sports/wnba',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=wnba'
      },
      {
        label: 'WCBK',
        path: '/sport/fox-sports/wcbk',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=wcbk'
      },
    ]
  },
  {
    title: 'Fox Sport Local',
    feeds: [
      {
        label: 'Arizona',
        path: '/sport/fox-sports/arizona',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=arizona'
      },
      {
        label: 'Carolina',
        path: '/sport/fox-sports/carolina',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=carolinas'
      },
      {
        label: 'Detroit',
        path: '/sport/fox-sports/detroit',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=detroit'
      },
      {
        label: 'Florida',
        path: '/sport/fox-sports/florida',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=kansas-city'
      },
      {
        label: 'Kansas city',
        path: '/sport/fox-sports/kansas-city',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=kansas-city'
      },
      {
        label: 'Midwest',
        path: '/sport/fox-sports/midwest',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=midwest'
      },
      {
        label: 'North',
        path: '/sport/fox-sports/norths',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=north'
      },
      {
        label: 'Ohio',
        path: '/sport/fox-sports/ohio',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=ohio'
      },
      {
        label: 'San Diego',
        path: '/sport/fox-sports/san-diego',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=san-diego'
      },
      {
        label: 'South',
        path: '/sport/fox-sports/south',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=south'
      },
      {
        label: 'Southwest',
        path: '/sport/fox-sports/southwest',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=southwest'
      },
      {
        label: 'Tennessee',
        path: '/sport/fox-sports/tennessee',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=tennessee'
      },
      {
        label: 'West',
        path: '/sport/fox-sports/west',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=west'
      },
      {
        label: 'Wisconsin',
        path: '/sport/fox-sports/wisconsin',
        url: 'http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=wisconsin'
      },
    ]
  },
];
