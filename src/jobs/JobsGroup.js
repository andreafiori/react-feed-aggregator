import React, { Component } from 'react';
import { FeedManager } from '../feeds/FeedsManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import Breadcrumbs from './../components/Breadcrumbs';
import NewsGroupList from '../components/NewsGroupList';
import { JobsNewsGroups, JobsNewsFeeds } from '../feeds/JobsFeedManager';

class JobsGroup extends Component {

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
    const groupParam =  this.props.match.params.group;

    const group = FeedManager.getNewsGroupByKey(
      JobsNewsGroups,
      groupParam
    );

    const feeds  = FeedManager.getNewsFeedsByGroup(JobsNewsFeeds, groupParam);

    const breadcrumbs = this.setupBreadCrumbs(group);

    return (
      <div>

        <Breadcrumbs elements={breadcrumbs} />
{JSON.stringify(this.props.children)}
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
