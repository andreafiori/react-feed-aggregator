import React, { Component, Suspense } from 'react';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
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
import { routes, navBarRoutes, Home, WillMatch, NoMatch } from '../utils/Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      error: {},
      search: '',
      isOpen: false,
    };

    this.routes = routes;
    this.navBarRoutes = navBarRoutes;
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { error } = this.state;
    return (
      <>

        <Navbar color="dark mb-2" dark expand="md">
          <Container>
            <NavbarBrand tag={Link} to="/"><i className="fa fa-bullhorn"></i> News Feed Aggregator</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem key="home">
                  <NavLink tag={Link} replace to={'/'} title='Home page'>Home</NavLink>
                </NavItem>

                {this.navBarRoutes.map((link, index) =>
                  <NavItem key={'navroute_'+index}>
                    <NavLink tag={Link} replace to={link.path} title={link.title}>{link.text}</NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>


        <Container>

          <Router>
            <Suspense fallback={<div><h2><i className="fa fa-spinner fa-spin"></i> Loading...</h2></div>}>
              <Switch>
                <Route exact path="/" component={Home}/>
                {this.routes.map(route => (
                  <Route
                    exact
                    key={route.path}
                    path={route.path}
                    component={route.component}
                  />
                ))}

                <Redirect from="/old-match" to="/will-match" />
                <Route path="/will-match" component={WillMatch} />
                <Route component={NoMatch} />
              </Switch>
            </Suspense>
          </Router>

          {error.apiError != null &&
            <div className="alert alert-danger">
              <h3>Error parsing URL</h3>
            </div>
          }

        </Container>

        <footer className="blog-footer">
          <p>&copy; { (new Date()).getFullYear() } News Aggregator. <Link replace to="/about" title="Information about the news aggregator project">About</Link> | <a rel="noopener noreferrer" href="https://github.com/andreafiori/feed-aggregator" target="_blank">Github</a> | <a rel="noopener noreferrer" href="http://www.andreafiori.net" target="_blank">Webmaster</a>.</p>
          {/* TODO: back to top link */}
        </footer>
      </>
    );
  }
}

export default App;
