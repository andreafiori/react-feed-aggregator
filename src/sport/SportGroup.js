import React, { Component } from 'react';
import { getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager.js';
import FeedsCategoryList from '../components/FeedsCategoryList.js';
import Breadcrumbs from '../components/Breadcrumbs.js';
import NewsGroupList from '../components/NewsGroupList.js';
import { SportFeedNewsGroup, SportFeedNewsFeeds } from '../feeds/SportFeedManager.js';

class SportGroup extends Component {
  constructor(props) {
    super(props);

    let currentNewsGroup = getNewsGroupByKey(SportFeedNewsGroup, props.match.params.group);

    this.state = {
      group: currentNewsGroup,
      feeds: getNewsFeedsByGroup(SportFeedNewsFeeds, props.match.params.group),
      breadcrumbs: [
        { label: 'Sport', href: '/sport', title: 'Back to Sport main page', active: false },
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
