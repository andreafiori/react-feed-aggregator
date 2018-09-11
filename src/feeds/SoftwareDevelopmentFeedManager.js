import { DzoneNewsGroup, DzoneNewsFeeds } from './DzoneFeeds';
import { PHPNewsGroup, PHPNewsFeeds } from './PHPNewsFeeds';
import { FrontendNewsGroup, FrontendNewsFeeds } from './FrontendNewsFeeds';

export const SoftwareDevelopmentNewsGroups = {
	'php-news': PHPNewsGroup,
	'frontend-news': FrontendNewsGroup,
	dzone: DzoneNewsGroup,
};

export const SoftwareDevelopmentNewsFeeds = {
	'php-news': PHPNewsFeeds,
	'frontend-news': FrontendNewsFeeds,
	dzone: DzoneNewsFeeds,
};
