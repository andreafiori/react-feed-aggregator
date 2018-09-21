import React, { Component } from 'react';
import { getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager.js';
import { SoftwareDevelopmentNewsGroups, SoftwareDevelopmentNewsFeeds } from '../feeds/SoftwareDevelopmentFeedManager.js';
import FeedsCategoryList from '../components/FeedsCategoryList.js';
import Breadcrumbs from '../components/Breadcrumbs.js';
import NewsGroupList from '../components/NewsGroupList.js';
import NewsGroupError from '../components/NewsGroupError.js';

class SoftwareDevelopmentGroup extends Component {
  constructor(props) {
    super(props);

    let currentNewsGroup = getNewsGroupByKey(SoftwareDevelopmentNewsGroups, props.match.params.group);

    this.state = {
      group: currentNewsGroup,
      feeds: getNewsFeedsByGroup(SoftwareDevelopmentNewsFeeds, props.match.params.group),
      breadcrumbs: this.setupBreadCrumbs(currentNewsGroup)
    };
  }

  setupBreadCrumbs(newsGroup) {
    let breadcrumbs = [
      { label: 'Software Development', href: '/software-development', title: 'Back to Software Development feeds main page', active: false },
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
            <div className="col-sm-12 col-md-12 col-lg-9">
              <NewsGroupList group={group} />
            </div>
  
            <div className="col-sm-12 col-md-12 col-lg-3">
              <FeedsCategoryList items={feeds} />
            </div>
          </div>
  
        </div>
  
      );
    } else {
      return (
        <NewsGroupError breadcrumbs={breadcrumbs} />
      );
    }
    
  }
}

export default SoftwareDevelopmentGroup;
