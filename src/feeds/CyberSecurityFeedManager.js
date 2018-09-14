import { SansNewsGroup, SansNewsFeeds } from './SansFeeds.js';
import { FortinetNewsGroup, FortinetNewsFeeds } from './FortinetFeeds.js';
import { CyberSecurityWebsitesNewsGroup, CyberSecurityWebsitesFeeds } from './CyberSecurityWebsitesFeed';
import { DarkreadingNewsGroup, DarkreadingNewsFeeds } from './DarkReadingFeeds.js';
// import { ThreatPostNewsGroup, ThreatPostNewsFeeds } from './ThreatPostFeeds.js';

export const CyberSecurityNewsGroups = {
	websites: CyberSecurityWebsitesNewsGroup,
	sans: SansNewsGroup,
	darkreading: DarkreadingNewsGroup,
	fortinet: FortinetNewsGroup,
	// 'threat-post': ThreatPostNewsGroup,
};

// List 1: https://blog.feedspot.com/cyber_security_rss_feeds/
// List 2: https://blog.feedspot.com/cyber_security_news_rss_feeds/
// Blogs list https://digitalguardian.com/blog/top-50-infosec-blogs-you-should-be-reading
export const CyberSecurityNewsFeeds = {
	websites: CyberSecurityWebsitesFeeds,
	sans: SansNewsFeeds,
	darkreading: DarkreadingNewsFeeds,
	fortinet: FortinetNewsFeeds, // TO REMOVE or Merge
	// 'threat-post': ThreatPostNewsFeeds,

	/*
	Schneier on Security https://www.schneier.com/blog/atom.xml
	Graham Cluley https://www.grahamcluley.com/feed
	We Live Security https://www.welivesecurity.com/rss-configurator/
		Example multi: https://www.welivesecurity.com/category/cybercrime/feed/

	McAfee https://securingtomorrow.mcafee.com/feed
	Quick Heal Antivirus
	Google Online Security
	Naked Security http://nakedsecurity.sophos.com/feed/
	Infosecurity Magazine - Information Security & IT Security http://www.infosecurity-magazine.com/rss/news/
	CSO Online 
	Symantec Connect - Security Response
	Security Affairs http://securityaffairs.co/wordpress/feed
	CIO Security
	Cybersecurity – Microsoft Secure Blog https://blogs.microsoft.com/microsoftsecure/category/cybersecurity/feed
	...
	NIST (goverment)
	*/
};
