import { DzoneNewsGroup, DzoneNewsFeeds } from './DzoneFeeds';
import { PHPNewsGroup, PHPNewsFeeds } from './PHPNewsFeeds';
import { FrontendNewsGroup, FrontendNewsFeeds } from './FrontendNewsFeeds';
import { JavascriptNewsGroup, JavascriptNewsFeeds } from './JavascriptFeeds';
import { JavaNewsGroup, JavaNewsFeeds } from './JavaFeeds';
import { PythonNewsGroup, PythonNewsFeeds } from './PythonFeeds';
import { GolangNewsGroup, GolangNewsFeeds } from './GolangFeeds';
import { RubyNewsGroup, RubyNewsFeeds } from './RubyFeeds';

export const SoftwareDevelopmentNewsGroups = {
	'frontend-news': FrontendNewsGroup,
	'javascript': JavascriptNewsGroup,
	'php-news': PHPNewsGroup,
	'python': PythonNewsGroup,
	'java': JavaNewsGroup,
	'golang': GolangNewsGroup,
	'ruby': RubyNewsGroup,
	'dzone': DzoneNewsGroup,
};

export const SoftwareDevelopmentNewsFeeds = {
	'frontend-news': FrontendNewsFeeds,
	'javascript': JavascriptNewsFeeds,
	'php-news': PHPNewsFeeds,
	'python': PythonNewsFeeds,
	'java': JavaNewsFeeds,
	'golang': GolangNewsFeeds,
	'ruby': RubyNewsFeeds,
	'dzone': DzoneNewsFeeds,
};
