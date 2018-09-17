import { BbcNewsGroup, BbcNewsFeeds } from './BbcFeeds.js';
import { CnnNewsGroup, CnnNewsFeeds } from './CnnFeeds.js';
import { NewYorkTimesNewsGroup, NewYorkTimesNewsFeeds } from './NewYorkTimesFeeds.js';
import { NewYorkPostNewsGroup, NewYorkPostFeeds } from './NewYorkPostFeeds';
import { WallStreetJournalNewsGroup, WallStreetJournalNewsFeeds } from './WallStreetJournalFeeds.js';
import { AnsaNewsGroup, AnsaNewsFeeds } from './AnsaFeeds.js';

export const newsGroups = {
  'bbc': BbcNewsGroup,
  'cnn': CnnNewsGroup,
  'new-york-times': NewYorkTimesNewsGroup,
  'new-york-post': NewYorkPostNewsGroup,
  'wall-street-journal': WallStreetJournalNewsGroup,
  'ansa': AnsaNewsGroup,
};

// List http://worldsoccertalk.com/2008/01/14/best-british-newspapers-soccer-football-news/
// TV channels list https://en.wikipedia.org/wiki/List_of_news_television_channels
// Weather app https://github.com/Kennypee/Weather-Scanner
// http://www.foxnews.com/about/rss/
// http://abcnews.go.com/Site/page/rss--3520115
// http://www.reuters.com/tools/rss
export const feeds = {
  'bbc': BbcNewsFeeds,
  'cnn': CnnNewsFeeds,
  'new-york-times': NewYorkTimesNewsFeeds,
  'new-york-post': NewYorkPostFeeds,
  'wall-street-journal': WallStreetJournalNewsFeeds,
  'ansa': AnsaNewsFeeds,
  /*
  Rai televideo http://www.servizitelevideo.rai.it/televideo/pub/rsslista.jsp
  Radio Rai http://www.radio.rai.it/radio3/podcast/rssradio3.jsp
  Corriere della sera https://www.corriere.it/rss/
  */
};
