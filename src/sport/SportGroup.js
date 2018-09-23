import React, { Component } from 'react';
import { getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import Breadcrumbs from '../components/Breadcrumbs';
import NewsGroupList from '../components/NewsGroupList';
import { SportFeedNewsGroup, SportFeedNewsFeeds } from '../feeds/SportFeedManager';

class SportGroup extends Component {
  constructor(props) {
    super(props);

    const currentNewsGroup = getNewsGroupByKey(SportFeedNewsGroup, props.match.params.group);

    this.state = {
      group: currentNewsGroup,
      feeds: getNewsFeedsByGroup(SportFeedNewsFeeds, props.match.params.group),
      breadcrumbs: this.setupBreadCrumbs(currentNewsGroup)
    };
  }

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

    const { group, feeds, breadcrumbs } = this.state;

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

export default SportGroup;
