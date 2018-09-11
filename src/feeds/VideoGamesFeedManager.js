import { IgnNewsGroups, IgnNewsFeeds } from '../feeds/IgnFeeds';
import { GameInformerNewsGroup, GameInformerNewsFeeds } from '../feeds/GameInformerFeeds';

export const VideogamesNewsGroups = {
	ign: IgnNewsGroups,
	'game-informer': GameInformerNewsGroup,
};

export const VideogamesNewsFeeds = {
	ign: IgnNewsFeeds,
	'game-informer': GameInformerNewsFeeds,
};
