export const AnsaNewsGroup = {
	image: 				'ansa.gif',
	title: 				'Ansa.it',
	description:	'Ansa.it feeds',
	group: 				'ansa',
	category: 		'IT',
	path: 				'/news/ansa',
	country: 			'IT',
	website: 			'http://www.ansa.it/',
	youtube: 			'http://www.youtube.com/user/Ansa',
	facebook: 		'http://www.facebook.com/pages/ANSAit/158259371219',
	twitter: 			'http://twitter.com/agenzia_ansa',
	gplus:        'https://plus.google.com/103423288952352800420',
  wikipedia: 		'https://en.wikipedia.org/wiki/Agenzia_Nazionale_Stampa_Associata',
  // linkedin: 'http://www.linkedin.com/company/ansa',
  rss: 					'http://www.ansa.it/sito/static/ansa_rss.html',
};

export const AnsaNewsFeeds = [
  {
		title: 'Categorie',
		feeds: [
			{
				label: 'Homepage',
				title: 'Homepage',
				path: '/news/ansa/homepage',
				url: 'http://www.ansa.it/sito/ansait_rss.xml'
			},
			{
				label: 'Cronaca',
				title: 'Cronaca',
				path: '/news/ansa/cronaca',
				url: 'http://www.ansa.it/sito/notizie/cronaca/cronaca_rss.xml'
			},
			{
				label: 'Politica',
				title: 'Politica',
				path: '/news/ansa/politica',
				url: 'http://www.ansa.it/sito/notizie/politica/politica_rss.xml'
			},
			{
				label: 'Mondo',
				title: 'Mondo',
				path: '/news/ansa/mondo',
				url: 'http://www.ansa.it/sito/notizie/mondo/mondo_rss.xml'
			},
			{
				label: 'Economia',
				title: 'Economia',
				path: '/news/ansa/economia',
				url: 'http://www.ansa.it/sito/notizie/economia/economia_rss.xml'
			},
		]
	},
	{
		title: 'News regionali',
		feeds: [
			{
				label: 'Africa',
				title: 'Africa',
				path: '/news/ansa/africa',
				url: ''
			},
		]
  },
  {
		title: 'Canali e Speciali',
		feeds: [
			{
				label: '',
				title: '',
				path: '/news/ansa/africa',
				url: ''
			},
		]
	}
];