import React, { Component } from 'react';
import { FeedManager } from '../feeds/FeedsManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import Breadcrumbs from './../components/Breadcrumbs';
import NewsGroupList from '../components/NewsGroupList';
import { VideogamesNewsGroups, VideogamesNewsFeeds } from '../feeds/VideoGamesFeedManager';

class VideoGamesGroup extends Component {
  setupBreadCrumbs(newsGroup) {
    let breadcrumbs = [
      { label: 'Videogames', href: '/videogames', title: 'Back to videogames feeds main page', active: false },
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
    const group = FeedManager.getNewsGroupByKey(VideogamesNewsGroups, this.props.match.params.group);
    const feeds = FeedManager.getNewsFeedsByGroup(VideogamesNewsFeeds, this.props.match.params.group);
    const breadcrumbs = this.setupBreadCrumbs(group);

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
}

export default VideoGamesGroup;
