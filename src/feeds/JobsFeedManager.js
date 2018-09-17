import { WorkinstartupsNewsGroups, WorkInStartupsFeeds } from './WorkInStartupsFeeds';
import { JobsAcUkNewsGroup, JobsAcUkNewsFeeds } from './JobsAcUk';

export const JobsNewsGroups = {
  'work-in-startups-com': WorkinstartupsNewsGroups,
  'jobs-ac-uk': JobsAcUkNewsGroup,
};

/*
  List https://blog.feedspot.com/career_rss_feeds/
  'work-it-daily': https://www.workitdaily.com/blog/feed/
  'ask-a-manager': http://www.askamanager.org/feed/
  'personal-branding': http://www.personalbrandingblog.com/feed/ http://feeds.feedburner.com/personalbrandingblog?format=xml
  Monster Honk Kong https://www.monster.com.hk/jobsearch/rss-feed.html
*/
export const JobsNewsFeeds = {
  'work-in-startups-com': WorkInStartupsFeeds,
  'jobs-ac-uk': JobsAcUkNewsFeeds,
};
