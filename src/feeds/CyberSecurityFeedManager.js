import { SansNewsGroup, SansNewsFeeds } from './SansFeeds.js';
import { CyberSecurityWebsitesNewsGroup, CyberSecurityWebsitesFeeds } from './CyberSecurityWebsitesFeed';
import { DarkreadingNewsGroup, DarkreadingNewsFeeds } from './DarkReadingFeeds.js';
import { WeLiveSecurityNewsGroup, WeLiveSecurityNewsFeeds } from './WeLiveSecurityFeeds';
import { ThreatPostNewsGroup, ThreatPostNewsFeeds } from './ThreatPostFeeds.js';
import { GovernmentNewsGroup, GovernmentNewsFeeds } from './GovernmentFeeds';
import { TechWorldNewsGroup, TechWorldNewsFeeds } from './TechWorldFeeds';

export const CyberSecurityNewsGroups = {
	websites: CyberSecurityWebsitesNewsGroup,
	'we-live-security': WeLiveSecurityNewsGroup,
	government: GovernmentNewsGroup,
	sans: SansNewsGroup,
	darkreading: DarkreadingNewsGroup,
	'tech-world': TechWorldNewsGroup,
	// fortinet: FortinetNewsGroup,
	'threat-post': ThreatPostNewsGroup,
};

export const CyberSecurityNewsFeeds = {
	websites: CyberSecurityWebsitesFeeds,
	'we-live-security': WeLiveSecurityNewsFeeds,
	government: GovernmentNewsFeeds,
	sans: SansNewsFeeds,
	darkreading: DarkreadingNewsFeeds,
	'tech-world': TechWorldNewsFeeds,
	// fortinet: FortinetNewsFeeds, // TO REMOVE or Merge
	'threat-post': ThreatPostNewsFeeds,
};
