import React, { Component } from 'react';
import { CyberSecurityNewsGroups } from '../feeds/CyberSecurityFeedManager.js';
import { getAllNewsGroupsAsArray } from '../feeds/FeedsManager.js';
import NewsList from '../components/NewsList.js';
import Breadcrumbs from '../components/Breadcrumbs.js';

class CyberSecurity extends Component {
	constructor(props) {
    super(props);

    this.state = {
      newsGroups: getAllNewsGroupsAsArray(CyberSecurityNewsGroups),
      breadcrumbs: [
        { label: 'Cyber Security', href: null, title: null, active: true }
      ]
    };

  }

  render() {
    const { newsGroups, breadcrumbs } = this.state;

    return (
      <div>

        <Breadcrumbs elements={breadcrumbs} />
          
        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-9">
            <NewsList newsGroups={newsGroups} />
          </div>
          
          <div className="col-sm-12 col-md-12 col-lg-3">
            <h3 className="font-italic">Attack Maps</h3>
            <ul className="list-unstyled">
              <li><a href="http://map.norsecorp.com/" rel="noopener noreferrer" target="_blank" title="Real-time visibility into global cyber attacks from the world\'s largest dedicated threat intelligence network">Norse Attack Map</a></li>
              <li><a href="https://threatmap.fortiguard.com/" rel="noopener noreferrer" target="_blank" title="Real time threat map">Fortinet</a></li>
              <li><a href="http://www.digitalattackmap.com/" rel="noopener noreferrer" target="_blank" title="Digital attack map">Digital attack map</a></li>
              <li><a href="https://threatmap.checkpoint.com/ThreatPortal/livemap.html" rel="noopener noreferrer" target="_blank" title="Digital attack map">Threat Cloud attack map</a></li>
            </ul>
          </div>

        </div>

      </div>
    );
  }
}

export default CyberSecurity;
