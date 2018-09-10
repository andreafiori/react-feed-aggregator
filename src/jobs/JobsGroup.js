import React, { Component } from 'react';
import { getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager.js';
import FeedsCategoryList from '../components/FeedsCategoryList.js';
import Breadcrumbs from './../components/Breadcrumbs.js';
import NewsGroupList from '../components/NewsGroupList.js';
import { JobsNewsGroups, JobsNewsFeeds } from '../feeds/JobsFeedManager.js';

class JobsGroup extends Component {

  constructor(props) {
    super(props);

    let currentNewsGroup = getNewsGroupByKey(JobsNewsGroups, props.match.params.group);

    this.state = {
      group: currentNewsGroup,
      feeds: getNewsFeedsByGroup(JobsNewsFeeds, props.match.params.group),
      breadcrumbs: [
        { label: 'Jobs', href: '/jobs', title: 'Back to Jobs feeds main page', active: false },
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

export default JobsGroup;
