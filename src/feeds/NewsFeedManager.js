import { BbcNewsGroup, BbcNewsFeeds } from './BbcFeeds.js';
import { CnnNewsGroup, CnnNewsFeeds } from './CnnFeeds.js';
import { NewYorkTimesNewsGroup, NewYorkTimesNewsFeeds } from './NewYorkTimesFeeds.js';
import { WallStreetJournalNewsGroup, WallStreetJournalNewsFeeds } from './WallStreetJournalFeeds.js';
import { AnsaNewsGroup, AnsaNewsFeeds } from './AnsaFeeds.js';

export const newsGroups = {
  bbc: BbcNewsGroup,
  cnn: CnnNewsGroup,
  'new-york-times': NewYorkTimesNewsGroup,
  'wall-street-journal': WallStreetJournalNewsGroup,
  ansa: AnsaNewsGroup,
};

export const feeds = {
  bbc: BbcNewsFeeds,
  cnn: CnnNewsFeeds,
  'new-york-times': NewYorkTimesNewsFeeds,
  'wall-street-journal': WallStreetJournalNewsFeeds,
  ansa: AnsaNewsFeeds,
};
