import { GazzettaItNewsGroup, GazzettaItNewsFeeds } from './GazzettaItFeeds';
import { FoxSportNewsGroup, FoxSportNewsFeeds } from './FoxSportFeeds';

export const SportFeedNewsGroup = {
	'fox-sports': FoxSportNewsGroup,
	'gazzetta-it': GazzettaItNewsGroup,
}

export const SportFeedNewsFeeds = {
	'fox-sports': FoxSportNewsFeeds,
	'gazzetta-it': GazzettaItNewsFeeds,
	/*
	skysport: https://sport.sky.it/servizi/rss.html, http://www.skysports.com/,
	autosport: null,
	marca: http://www.marca.com/en/sports/rss/index.html,
	sport24: https://www.sport24.co.za/RSS,
	nba: http://www.nba.com/rss/,
	autosport https://www.autosport.com/rss	
	*/
};

/*
	serie-a: 
	bundesliga: https://www.bundesliga.com/en/rss/
	https://www.mirror.co.uk/
	The Sun https://www.thesun.co.uk/sport/football/
*/