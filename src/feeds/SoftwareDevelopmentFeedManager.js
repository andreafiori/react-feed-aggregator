import { DzoneNewsGroup, DzoneNewsFeeds } from './DzoneFeeds';
import { PHPNewsGroup, PHPNewsFeeds } from './PHPNewsFeeds';
import { FrontendNewsGroup, FrontendNewsFeeds } from './FrontendNewsFeeds';
import { JavascriptNewsGroup, JavascriptNewsFeeds } from './JavascriptFeeds';
import { JavaNewsGroup, JavaNewsFeeds } from './JavaFeeds';
import { PythonNewsGroup, PythonNewsFeeds } from './PythonFeeds';

export const SoftwareDevelopmentNewsGroups = {
	'frontend-news': FrontendNewsGroup,
	'javascript': JavascriptNewsGroup,
	'php-news': PHPNewsGroup,
	'python': PythonNewsGroup,
	'java': JavaNewsGroup,
	'dzone': DzoneNewsGroup,
};

export const SoftwareDevelopmentNewsFeeds = {
	'frontend-news': FrontendNewsFeeds,
	'javascript': JavascriptNewsFeeds,
	'php-news': PHPNewsFeeds,
	'python': PythonNewsFeeds,
	'java': JavaNewsFeeds,
	'dzone': DzoneNewsFeeds,
};
