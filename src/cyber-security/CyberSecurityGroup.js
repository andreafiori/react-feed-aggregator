import React, { Component } from 'react';
import { CyberSecurityNewsGroups, CyberSecurityNewsFeeds } from '../feeds/CyberSecurityFeedManager.js';
import { getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager.js';
import FeedsCategoryList from '../components/FeedsCategoryList.js';
import Breadcrumbs from './../components/Breadcrumbs.js';
import NewsGroupList from '../components/NewsGroupList.js';

class CyberSecurityGroup extends Component {
	constructor(props) {
    super(props);

    let currentNewsGroup = getNewsGroupByKey(CyberSecurityNewsGroups, props.match.params.group);

    this.state = {
      group: currentNewsGroup,
      feeds: getNewsFeedsByGroup(CyberSecurityNewsFeeds, props.match.params.group),
      breadcrumbs: [
        { label: 'Cyber Security', href: '/cyber-security', title: 'Back to Cyber Security feeds main page', active: false },
        { label: currentNewsGroup.title, href: null, title: null, active: true }
      ]
    };
  }

  render() {

    const { group, feeds, breadcrumbs } = this.state;

    return (
      <div>

        <Breadcrumbs elements={breadcrumbs} />

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
            <NewsGroupList group={group} />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">
            <FeedsCategoryList items={feeds} />
          </div>
        </div>

      </div>

    );
  }
}

export default CyberSecurityGroup;