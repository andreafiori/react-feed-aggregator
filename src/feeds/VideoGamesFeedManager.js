import { IgnNewsGroups, IgnNewsFeeds } from '../feeds/IgnFeeds';
import { GameInformerNewsGroup, GameInformerNewsFeeds } from '../feeds/GameInformerFeeds';
import { N4GGamesGroup, N4GGamesFeeds } from '../feeds/N4GGamesFeeds';
import { VideoGamesWebsitesNewsGroup, VideoGamesWebsitesFeeds } from '../feeds/VideoGamesWebsitesFeeds';
import { GameSpotNewsGroup, GameSpotNewsFeeds } from '../feeds/GameSpotFeeds';

export const VideogamesNewsGroups = {
	'websites': 				VideoGamesWebsitesNewsGroup,
	'ign': 							IgnNewsGroups,
	'game-informer': 		GameInformerNewsGroup,
	'n4g': 							N4GGamesGroup,
	'gamespot': 				GameSpotNewsGroup,
};

export const VideogamesNewsFeeds = {
	'websites': 				VideoGamesWebsitesFeeds,
	'ign': 							IgnNewsFeeds,
	'game-informer': 		GameInformerNewsFeeds,
	'n4g': 							N4GGamesFeeds,
	'gamespot': 				GameSpotNewsFeeds,
};
