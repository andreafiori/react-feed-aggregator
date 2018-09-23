import React, { Component } from 'react';
import { getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import Breadcrumbs from './../components/Breadcrumbs';
import NewsGroupList from '../components/NewsGroupList';
import { JobsNewsGroups, JobsNewsFeeds } from '../feeds/JobsFeedManager';

class JobsGroup extends Component {

  constructor(props) {
    super(props);

    const currentNewsGroup = getNewsGroupByKey(JobsNewsGroups, props.match.params.group);

    this.state = {
      group: currentNewsGroup,
      feeds: getNewsFeedsByGroup(JobsNewsFeeds, props.match.params.group),
      breadcrumbs: this.setupBreadCrumbs(currentNewsGroup)
    };
  }

  setupBreadCrumbs(newsGroup) {
    let breadcrumbs = [
      { label: 'Jobs', href: '/jobs', title: 'Back to Jobs feeds main page', active: false },
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

export default JobsGroup;
