import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Loading = () => <div><h2><i className="fa fa-spinner fa-spin"></i> Loading...</h2></div>;

const News = Loadable({
  loader: () => import('../news/News.js'),
  loading: Loading,
});

const NewsGroup = Loadable({
  loader: () => import('../news/NewsGroup.js'),
  loading: Loading,
});

const NewsGroupDetails = Loadable({
  loader: () => import('../news/NewsGroupDetails.js'),
  loading: Loading,
});

const CyberSecurity = Loadable({
  loader: () => import('./../cyber-security/CyberSecurity.js'),
  loading: Loading,
});

const CyberSecurityGroup = Loadable({
  loader: () => import('./../cyber-security/CyberSecurityGroup.js'),
  loading: Loading,
});

const CyberSecurityGroupDetails = Loadable({
  loader: () => import('./../cyber-security/CyberSecurityGroupDetails.js'),
  loading: Loading,
});

const SoftwareDevelopment = Loadable({
  loader: () => import('./../software-development/SoftwareDevelopment'),
  loading: Loading,
});

const SoftwareDevelopmentGroup = Loadable({
  loader: () => import('./../software-development/SoftwareDevelopmentGroup'),
  loading: Loading,
});

const SoftwareDevelopmentGroupDetails = Loadable({
  loader: () => import('./../software-development/SoftwareDevelopmentGroupDetails'),
  loading: Loading,
});

const Home = Loadable({
  loader: () => import('./Home.js'),
  loading: Loading,
});

const OpenWeatherContainer = Loadable({
  loader: () => import('./OpenWeatherContainer.js'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./About.js'),
  loading: Loading,
});

const WillMatch = Loadable({
  loader: () => import('./WillMatch.js'),
  loading: Loading,
});

const NoMatch = Loadable({
  loader: () => import('./NoMatch.js'),
  loading: Loading,
});

const Jobs = Loadable({
  loader: () => import('../jobs/Jobs.js'),
  loading: Loading,
});

const JobsGroup = Loadable({
  loader: () => import('../jobs/JobsGroup.js'),
  loading: Loading,
});

const JobsGroupDetails = Loadable({
  loader: () => import('../jobs/JobsGroupDetails.js'),
  loading: Loading,
});

const VideoGames = Loadable({
  loader: () => import('../videogames/VideoGames.js'),
  loading: Loading,
});

const VideoGamesGroup = Loadable({
  loader: () => import('../videogames/VideoGamesGroup.js'),
  loading: Loading,
});

const VideoGamesGroupDetails = Loadable({
  loader: () => import('../videogames/VideoGamesGroupDetails.js'),
  loading: Loading,
});

const Sport = Loadable({
  loader: () => import('../sport/Sport.js'),
  loading: Loading,
});

const SportGroup = Loadable({
  loader: () => import('../sport/SportGroup.js'),
  loading: Loading,
});

const SportGroupDetails = Loadable({
  loader: () => import('../sport/SportGroupDetails.js'),
  loading: Loading,
});


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      error: {},
      search: '',
      isOpen: false,
      routes: [
        { path: '/news', text: "News", isActive: false, title: "News and magazine" },
        { path: '/open-weather', text: "Weather", isActive: false, title: "" },
        { path: '/sport', text: "Sport", isActive: false, title: "Sport news" },
        { path: '/software-development', text: "Software Development", isActive: false, title: "Software Development news" },
        { path: '/cyber-security', text: "Cyber Security", isActive: false, title: "Cyber Security news" },
        { path: '/videogames', text: "Videogames", isActive: false, title: "Videogames" },
        { path: '/jobs', text: "Jobs", isActive: false, title: "Jobs" },
      ]
    };

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { error } = this.state;
    return (

      <div>

        <Navbar color="dark mb-2" dark expand="md">
          <Container>
          <NavbarBrand tag={Link} to="/"><i className="fa fa-bullhorn"></i> News Feed Aggregator</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              { this.state.routes.map((link, i) =>
                <NavItem key={i}>
                  <NavLink tag={Link} to={link.path} title={link.title}>{link.text}</NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
          </Container>
        </Navbar>


        <Container>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/open-weather" component={OpenWeatherContainer} />

            <Route exact path="/news" component={News} key="NewsGroups" />
            <Route exact path="/news/:group" component={NewsGroup} key="NewsGroupDetails" />
            <Route exact path="/news/:group/:slug" component={NewsGroupDetails} key="NewsFeedsDetails" />

            <Route exact path="/software-development" component={SoftwareDevelopment} key="SoftwareDevelopment" />
            <Route exact path="/software-development/:group" component={SoftwareDevelopmentGroup} key="SoftwareDevelopmentGroup" />
            <Route exact path="/software-development/:group/:slug" component={SoftwareDevelopmentGroupDetails} key="SoftwareDevelopmentFeedsList" />

            <Route exact path="/cyber-security" component={CyberSecurity} key="CyberSecurity" />
            <Route exact path="/cyber-security/:group" component={CyberSecurityGroup} key="CyberSecurityGroupDetails" />
            <Route exact path="/cyber-security/:group/:slug" component={CyberSecurityGroupDetails} key="CyberSecurityFeedsDetails" />

            <Route exact path="/videogames" component={VideoGames} key="VideoGames" />
            <Route exact path="/videogames/:group" component={VideoGamesGroup} key="VideoGamesGroup" />
            <Route exact path="/videogames/:group/:slug" component={VideoGamesGroupDetails} key="VideoGames" />

            <Route exact path="/sport" component={Sport} key="Sport" />
            <Route exact path="/sport/:group" component={SportGroup} key="SportGrous" />
            <Route exact path="/sport/:group/:slug" component={SportGroupDetails} key="SportFeeds" />

            <Route exact path="/jobs" component={Jobs} key="Jobs" />
            <Route exact path="/jobs/:group" component={JobsGroup} key="JobsGroup" />
            <Route exact path="/jobs/:group/:slug" component={JobsGroupDetails} key="JobsFeeds" />

            <Redirect from="/old-match" to="/will-match" />
            <Route path="/will-match" component={WillMatch} />
            <Route component={NoMatch} />
          </Switch>

          {error.apiError != null &&
            <div className="alert alert-danger">
              <h3>Error parsing URL</h3>
            </div>
          }

        </Container>

        <footer className="blog-footer">
          <p>&copy; { (new Date()).getFullYear() } News Aggregator. <Link to="/about" title="Information about the news aggregator project">About</Link> | <a rel="noopener noreferrer" href="https://github.com/andreafiori/feed-aggregator" target="_blank">Github</a> | <a rel="noopener noreferrer" href="http://www.andreafiori.net" target="_blank">Webmaster</a>.</p>
          {/*
          <p>
            <a href="javascript:void(0)" title="Back to top of the screen">Back to top</a>
          </p>
          */}
        </footer>
      </div>
    );
  }
}

export default App;
