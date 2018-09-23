import React, { Component } from 'react';
import { newsGroups, feeds } from '../feeds/NewsFeedManager';
import { getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager';
import FeedsCategoryList from '../components/FeedsCategoryList';
import Breadcrumbs from './../components/Breadcrumbs';
import NewsGroupList from '../components/NewsGroupList';

class NewsGroup extends Component {

  constructor(props) {
    super(props);

    const currentNewsGroup = getNewsGroupByKey(newsGroups, props.match.params.group);

    this.state = {
      group: currentNewsGroup,
      feeds: getNewsFeedsByGroup(feeds, props.match.params.group),
      breadcrumbs: [
        { label: 'News', href: '/news', title: 'Back to news feeds main page', active: false },
        { label: currentNewsGroup.title, href: null, title: null, active: true }
      ]
    };
  }

  setupBreadCrumbs(newsGroup) {
    let breadcrumbs = [
      { label: 'News', href: '/news', title: 'Back to news feeds main page', active: false },
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
        <div>
          <Breadcrumbs elements={breadcrumbs} />

          <div className="alert alert-warning">
            <h3>No news group</h3>
            <p>The selected newsgroup were not found.</p>
          </div>

        </div>
      );
    }
    
  }

}

export default NewsGroup;
