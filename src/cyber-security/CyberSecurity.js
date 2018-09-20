import React, { Component } from 'react';
import { getAllNewsGroupsAsArray } from '../feeds/FeedsManager.js';
import NewsList from '../components/NewsList.js';
import Breadcrumbs from '../components/Breadcrumbs.js';
import { CyberSecurityNewsGroups } from '../feeds/CyberSecurityFeedManager.js';

class CyberSecurity extends Component {
	constructor(props) {
    super(props);

    this.state = {
      newsGroups: getAllNewsGroupsAsArray(CyberSecurityNewsGroups),
      breadcrumbs: [
        { label: 'Cyber Security', href: null, title: null, active: true }
      ],
      attackMaps: [
        { label: 'Norse Attack Map', href: 'http://map.norsecorp.com/', title: 'Real-time visibility into global cyber attacks from the world\'s largest dedicated threat intelligence network'},
        { label: 'Fortinet Threat Map', href: 'https://threatmap.fortiguard.com/', title: 'Fortinet Real time threat map'},
        { label: 'Digital Attack Map', href: 'http://www.digitalattackmap.com/', title: 'Digital Attack Map'},
        { label: 'Threat Cloud Attack Map', href: 'https://threatmap.checkpoint.com/ThreatPortal/livemap.html', title: 'Threat Cloud Attack Map'},
      ],
      training: [
        { label: 'CompTIA', href: 'https://www.comptia.org/', title: 'Go to the CompTIA website'},
        { label: 'Cybrary', href: 'https://www.cybrary.it/', title: ''},
        { label: 'E-learn Security', href: 'http://www.elearnsecurity.com/', title: ''},
      ],
      certifications: [
        { label: 'CEH', href: 'https://www.eccouncil.org/', title: ''},
        { label: 'Sans', href: 'https://www.sans.org/', title: ''},
        { label: 'GIAC', href: 'https://www.giac.org/', title: ''},
        { label: 'CREST', href: 'http://www.crest-approved.org/', title: ''},
        { label: 'Tiger Scheme', href: 'https://www.tigerscheme.org/', title: ''},
        { label: 'Mile 2', href: 'https://mile2.com/', title: ''},
        { label: 'ISC 2', href: 'http://www.isc2.org/', title: ''},
        { label: 'Isaca', href: 'http://www.isaca.org/', title: ''},
      ]
    };

  }

  render() {
    const { newsGroups, breadcrumbs, attackMaps, training, certifications } = this.state;

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
              { attackMaps.map((item, i) =>
                <li key={'attack-map' + i}><a href={item.href} rel="noopener noreferrer" target="_blank" title={item.title}>{item.label}</a></li>
              )}
            </ul>

            <h3 className="font-italic">Training</h3>
            <ul className="list-unstyled">
              { training.map((item, i) =>
                <li key={'attack-map' + i}><a href={item.href} rel="noopener noreferrer" target="_blank" title={item.title}>{item.label}</a></li>
              )}
            </ul>

            <h3 className="font-italic">Certifications</h3>
            <ul className="list-unstyled">
              { certifications.map((item, i) =>
                <li key={'attack-map' + i}><a href={item.href} rel="noopener noreferrer" target="_blank" title={item.title}>{item.label}</a></li>
              )}
            </ul>

          </div>

        </div>

      </div>
    );
  }
}

export default CyberSecurity;
