import { lazy } from 'react';

export const Home = lazy(() => import('../components/Home'));

const About = lazy(() => import('../components/About'));
const News = lazy(() => import('../news/News'));

const NewsGroup = lazy(() => import('../news/NewsGroup'));
const NewsGroupDetails = lazy(() => import('../news/NewsGroupDetails'));

const CyberSecurity = lazy(() => import('./../cyber-security/CyberSecurity'));
const CyberSecurityGroup = lazy(() => import('./../cyber-security/CyberSecurityGroup'));
const CyberSecurityGroupDetails = lazy(() => import('./../cyber-security/CyberSecurityGroupDetails'));

const SoftwareDevelopment = lazy(() => import('./../software-development/SoftwareDevelopment'));
const SoftwareDevelopmentGroup = lazy(() => import('./../software-development/SoftwareDevelopmentGroup'));
const SoftwareDevelopmentGroupDetails = lazy(() => import('./../software-development/SoftwareDevelopmentGroupDetails'));

const OpenWeatherContainer = lazy(() => import('../components/OpenWeatherContainer'));

const Jobs = lazy(() => import('../jobs/Jobs'));
const JobsGroup = lazy(() => import('../jobs/JobsGroup'));
const JobsGroupDetails = lazy(() => import('../jobs/JobsGroupDetails'));

const VideoGames = lazy(() => import('../videogames/VideoGames'));
const VideoGamesGroup = lazy(() => import('../videogames/VideoGamesGroup'));
const VideoGamesGroupDetails = lazy(() => import('../videogames/VideoGamesGroupDetails'));

const Sport = lazy(() => import('../sport/Sport'));
const SportGroup = lazy(() => import('../sport/SportGroup'));
const SportGroupDetails = lazy(() => import('../sport/SportGroupDetails'));

export const WillMatch = lazy(() => import('../components/WillMatch'));
export const NoMatch = lazy(() => import('../components/NoMatch'));

export const routes = [
  {
    path: '/news',
    text: 'News',
    isActive: false,
    title: 'News and magazines',
    component: News,
    key: 'News',
  },
  
  {
    path: '/news/:group',
    text: 'News Group',
    isActive: false,
    title: '',
    component: NewsGroup,
    key: 'NewsGroup',
  },
  {
    path: '/news/:group/:slug',
    text: 'News group details',
    isActive: false,
    title: '',
    component: NewsGroupDetails,
    key: 'NewsGroupDetails',
  },
  
  { path: '/about', text: 'About', isActive: false, title: 'About this application', component: About, key: 'About' },
  // Sport
  { path: '/sport', text: 'Sport', isActive: false, title: 'Sport news', component: Sport, key: 'Sport' },
  { path: '/sport/:group', text: 'Sport', isActive: false, title: 'Sport news groups', component: SportGroup, key: 'SportGroups' },
  { path: '/sport/:group/:slug', text: 'Sport', isActive: false, title: 'Sport news feeds', component: SportGroupDetails, key: 'SportFeeds' },
  // Software development
  {
    path: '/software-development',
    text: 'Software Development',
    isActive: false,
    title: 'Software Development news',
    component: SoftwareDevelopment,
    key: 'SoftwareDevelopment',
  },
  {
    path: '/software-development/:group',
    text: 'Software Development',
    isActive: false,
    title: 'Software Development news',
    component: SoftwareDevelopmentGroup,
    key: 'SoftwareDevelopmentGroup',
  },
  {
    path: '/software-development/:group/:slug',
    text: 'Software Development',
    isActive: false,
    title: 'Software Development news',
    component: SoftwareDevelopmentGroupDetails,
    key: 'SoftwareDevelopmentGroupDetails',
  },
  // Cyber security
  { path: '/cyber-security', text: 'Cyber Security', isActive: false, title: 'Cyber Security news', component: CyberSecurity, key: 'CyberSecurity' },
  {
    path: '/cyber-security/:group',
    text: 'Cyber Security',
    isActive: false,
    title: 'Cyber Security news',
    component: CyberSecurityGroup,
    key: 'CyberSecurityNewsGroup',
  },
  { path: '/cyber-security/:group/:slug', text: 'Cyber Security', isActive: false, title: 'Cyber Security news', component: CyberSecurityGroupDetails, key: 'CyberSecurityGroupDetails' },
  // Video games
  { path: '/videogames', text: 'Videogames', isActive: false, title: 'Videogames', component: VideoGames, key: 'Videogames' },
  { path: '/videogames/:group', text: 'Videogames', isActive: false, title: 'Videogames', component: VideoGamesGroup, key: 'VideoGamesGroup' },
  { path: '/videogames/:group/:slug', text: 'Videogames', isActive: false, title: 'Videogames', component: VideoGamesGroupDetails, key: 'VideoGames' },
  
  { path: '/jobs', text: 'Jobs', isActive: false, title: 'Jobs', component: Jobs, key: 'Jobs' },
  { path: '/jobs/:group', text: 'Jobs news groups', isActive: false, title: 'Jobs', component: JobsGroup, key: 'JobsGroup' },
  { path: '/jobs/:group/:slug', text: 'Jobs', isActive: false, title: 'Jobs', component: JobsGroupDetails, key: 'JobsFeeds' },

  { path: '/open-weather', text: 'Open Weather', isActive: false, title: '', component: OpenWeatherContainer, key: 'OpenWeather' },
];

export const navBarRoutes = routes.filter((route) => {
  const navBarRouteKeys = ['News', 'SoftwareDevelopment', 'CyberSecurity', 'Sport', 'Videogames', 'Jobs', 'OpenWeather'];
  return (navBarRouteKeys.indexOf(route.key) !== -1);
});