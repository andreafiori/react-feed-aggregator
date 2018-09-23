import { SansNewsGroup, SansNewsFeeds } from './SansFeeds';
import { CyberSecurityWebsitesNewsGroup, CyberSecurityWebsitesFeeds } from './CyberSecurityWebsitesFeed';
import { DarkreadingNewsGroup, DarkreadingNewsFeeds } from './DarkReadingFeeds';
import { WeLiveSecurityNewsGroup, WeLiveSecurityNewsFeeds } from './WeLiveSecurityFeeds';
import { ThreatPostNewsGroup, ThreatPostNewsFeeds } from './ThreatPostFeeds';
import { GovernmentNewsGroup, GovernmentNewsFeeds } from './GovernmentFeeds';
import { TechWorldNewsGroup, TechWorldNewsFeeds } from './TechWorldFeeds';

export const CyberSecurityNewsGroups = {
	'websites': 					CyberSecurityWebsitesNewsGroup,
	'we-live-security':		WeLiveSecurityNewsGroup,
	'government': 				GovernmentNewsGroup,
	'sans': 							SansNewsGroup,
	'darkreading': 				DarkreadingNewsGroup,
	'tech-world': 				TechWorldNewsGroup,
	'threat-post': 				ThreatPostNewsGroup,
	// fortinet: 					FortinetNewsGroup,
};

export const CyberSecurityNewsFeeds = {
	'websites': 					CyberSecurityWebsitesFeeds,
	'we-live-security': 	WeLiveSecurityNewsFeeds,
	'government': 				GovernmentNewsFeeds,
	'sans': 							SansNewsFeeds,
	'darkreading': 				DarkreadingNewsFeeds,
	'tech-world': 				TechWorldNewsFeeds,
	'threat-post': 				ThreatPostNewsFeeds,
	// 'fortinet': 					FortinetNewsFeeds,
};
