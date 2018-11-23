import React, { Component } from 'react';
import { FeedManager } from '../feeds/FeedsManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import Breadcrumbs from './../components/Breadcrumbs';
import NewsGroupList from '../components/NewsGroupList';
import { CyberSecurityNewsGroups, CyberSecurityNewsFeeds } from '../feeds/CyberSecurityFeedManager';
import NewsGroupError from '../components/NewsGroupError';

class CyberSecurityGroup extends Component {
	constructor(props) {
    super(props);

    let currentNewsGroup = FeedManager.getNewsGroupByKey(CyberSecurityNewsGroups, props.match.params.group);

    this.state = {
      group: currentNewsGroup,
      feeds: FeedManager.getNewsFeedsByGroup(CyberSecurityNewsFeeds, props.match.params.group),
      breadcrumbs: this.setupBreadCrumbs(currentNewsGroup)
    };
  }

  setupBreadCrumbs(newsGroup) {
    let breadcrumbs = [
      { label: 'Cyber Security', href: '/cyber-security', title: 'Back to Cyber Security feeds main page', active: false },
    ];

    if (typeof newsGroup !== 'undefined') {
      breadcrumbs.push({
        label: newsGroup.title,
        href: null,
        title: null,
        active: true
      });
    } else {
      breadcrumbs.push({
        label: 'No newsgroup',
        href: null,
        title: null,
        active: true
      });
    }

    return breadcrumbs;
  }

  render() {
    const { group, feeds, breadcrumbs } = this.state;

    if (group) {
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

    return (
      <NewsGroupError breadcrumbs={breadcrumbs} />
    );
    
  }
}

export default CyberSecurityGroup;
