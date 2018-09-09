import { SansNewsGroup, SansNewsFeeds } from './SansFeeds.js';
import { FortinetNewsGroup, FortinetNewsFeeds } from './FortinetFeeds.js';
import { DarkreadingNewsGroup, DarkreadingNewsFeeds } from './DarkReadingFeeds.js';
import { ThreatPostNewsGroup, ThreatPostNewsFeeds } from './ThreatPostFeeds.js';

export const CyberSecurityNewsGroups = {
	sans: SansNewsGroup,
	darkreading: DarkreadingNewsGroup,
	fortinet: FortinetNewsGroup,
	'threat-post': ThreatPostNewsGroup,
};

export const CyberSecurityNewsFeeds = {
	sans: SansNewsFeeds,
	darkreading: DarkreadingNewsFeeds,
	fortinet: FortinetNewsFeeds,
	'threat-post': ThreatPostNewsFeeds,
};
