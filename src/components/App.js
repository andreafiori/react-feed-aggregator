import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
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
import News from '../news/News.js';
import NewsGroup from '../news/NewsGroup.js';
import CyberSecurity from './../cyber-security/CyberSecurity.js';
import VideoGames from './VideoGames.js';
import Sport from './Sport.js';
import Jobs from './Jobs.js';
import { Home, About, WillMatch, NoMatch } from './Pages.js';
import NewsGroupDetails from '../news/NewsGroupDetails.js';
import SoftwareDevelopment from './SoftwareDevelopment.js';
import CyberSecurityGroup from '../cyber-security/CyberSecurityGroup.js';
import CyberSecurityGroupDetails from '../cyber-security/CyberSecurityGroupDetails.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      error: {},
      search: '',
      isOpen: false,
      routes: [
        { path: "/news", text: "News", isActive: false, title: "News and magazine" },
        { path: "/sport", text: "Sport", isActive: false, title: "Sport news" },
        { path: "/software-development", text: "Programming", isActive: false, title: "Software Development news" },
        { path: "/cyber-security", text: "Cyber Security", isActive: false, title: "Cyber Security news" },
        { path: "/videogames", text: "Videogames", isActive: false, title: "Videogames" },
        { path: "/jobs", text: "Jobs", isActive: false, title: "Jobs" },
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

            <Route exact path="/news" component={News} key="NewsGroups" />
            <Route exact path="/news/:group" component={NewsGroup} key="NewsGroupDetails" />
            <Route exact path="/news/:group/:slug" component={NewsGroupDetails} key="NewsFeedsDetails" />

            <Route path="/software-development" component={SoftwareDevelopment} key="SoftwareDevelopment" />
            <Route path="/software-development/:group" component={SoftwareDevelopment} key="SoftwareDevelopment" />
            <Route path="/software-development/:group/:slug" component={SoftwareDevelopment} key="SoftwareDevelopment" />

            <Route exact path="/cyber-security" component={CyberSecurity} key="CyberSecurity" />
            <Route exact path="/cyber-security/:group" component={CyberSecurityGroup} key="CyberSecurityGroupDetails" />
            <Route exact path="/cyber-security/:group/:slug" component={CyberSecurityGroupDetails} key="CyberSecurityFeedsDetails" />

            <Route path="/sport" component={Sport} key="Sport" />
            <Route path="/jobs" component={Jobs} key="Jobs" />
            <Route path="/videogames" component={VideoGames} key="VideoGames" />

            <Redirect from="/old-match" to="/will-match" />
            <Route path="/will-match" component={WillMatch} />
            <Route component={NoMatch} />
          </Switch>

          {error.apiError != null &&
            <div className="alert alert-danger">
              <h3>Error parsing URL</h3>
              <p>Lorem ipsum.</p>
            </div>
          }

        </Container>

        <footer className="blog-footer">
          <p>&copy; { (new Date()).getFullYear() } News Aggregator. <Link to="/about" title="Information about the news aggregator project">About</Link> | <a rel="noopener noreferrer" href="" target="_blank">Github</a> | <a rel="noopener noreferrer" href="http://www.andreafiori.net" target="_blank">Webmaster</a>.</p>
          <p>
            <a href="/" title="Back to top of the screen">Back to top</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
