import { SansNewsGroup, SansNewsFeeds } from './SansFeeds.js';
import { FortinetNewsGroup, FortinetNewsFeeds } from './FortinetFeeds.js';
import { DarkreadingNewsGroup, DarkreadingNewsFeeds } from './DarkReadingFeeds.js';

export const CyberSecurityNewsGroups = {
	sans: SansNewsGroup,
	darkreading: DarkreadingNewsGroup,
	fortinet: FortinetNewsGroup,
};

export const CyberSecurityNewsFeeds = {
	sans: SansNewsFeeds,
	darkreading: DarkreadingNewsFeeds,
	fortinet: FortinetNewsFeeds,
};
