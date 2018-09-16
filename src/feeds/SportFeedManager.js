import { GazzettaItNewsGroup, GazzettaItNewsFeeds } from './GazzettaItFeeds';
import { FoxSportNewsGroup, FoxSportNewsFeeds } from './FoxSportFeeds';
import { SkySportNewsGroup, SkySportNewsFeeds } from './SkySportFeeds';
import { AutoSportNewsGroup, AutoSportNewsFeeds } from './AutosportFeeds';

export const SportFeedNewsGroup = {
	'fox-sports': 		FoxSportNewsGroup,
	'autosport':			AutoSportNewsGroup,
	'gazzetta-it': 		GazzettaItNewsGroup,
	'skysport':				SkySportNewsGroup,
}

/*
	ESPN
	marca: http://www.marca.com/en/sports/rss/index.html,
	sport24: https://www.sport24.co.za/RSS,
	nba: http://www.nba.com/rss/,
	serie-a: 
	bundesliga: https://www.bundesliga.com/en/rss/
	https://www.mirror.co.uk/
	The Sun https://www.thesun.co.uk/sport/football/
*/

export const SportFeedNewsFeeds = {
	'fox-sports':			FoxSportNewsFeeds,
	'autosport':			AutoSportNewsFeeds,
	'gazzetta-it': 		GazzettaItNewsFeeds,
	'skysport':				SkySportNewsFeeds,
};
