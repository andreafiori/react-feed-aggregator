import React, { Component } from 'react';
import { FeedManager } from '../feeds/FeedsManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import Breadcrumbs from '../components/Breadcrumbs';
import NewsGroupList from '../components/NewsGroupList';
import { SportFeedNewsGroup, SportFeedNewsFeeds } from '../feeds/SportFeedManager';
import NewsGroupError from '../components/NewsGroupError';

class SportGroup extends Component {

  setupBreadCrumbs(newsGroup) {
    let breadcrumbs = [
      { label: 'Sport', href: '/sport', title: 'Back to Sport main page', active: false },
    ];

    if (newsGroup) {
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
    const group = FeedManager.getNewsGroupByKey(SportFeedNewsGroup, this.props.match.params.group);
    const feeds = FeedManager.getNewsFeedsByGroup(SportFeedNewsFeeds, this.props.match.params.group);
    const breadcrumbs = this.setupBreadCrumbs(group);

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
    }

    return (
      <NewsGroupError breadcrumbs={breadcrumbs} />
    );
    
  }
}

export default SportGroup;
