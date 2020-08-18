import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from './../components/Breadcrumbs';

class FeedViewerBreadcrumb extends Component {

  componentDidUpdate(prevProps, prevState) {

  }

  componentDidMount() {
    
  }

  /**
   * Check state and update it if needed
   * 
   * @param {*} prevProps 
   */
  getSnapshotBeforeUpdate(prevProps) {
    // This is the initial render without a previous prop change
    if (prevProps === undefined) {
      return false;
    }

    return null;
  }

  setupBreadcrumbs(newsGroup, newsFeed, options) {
    const breadcrumbs = [
      { label: options.mainSectionLabel, href: options.mainSectionHref, title: options.mainSectionTitle, active: false },
      { label: newsGroup.title, href: newsGroup.path, title: newsGroup.title, active: false },
    ];

    if (newsFeed) {
      breadcrumbs.push({ label: newsFeed.label, href: '', title: '', active: true });
    } else {
      breadcrumbs.push({ label: 'Error', href: '', title: '', active: true });
    }

    return breadcrumbs;
  }

  render() {
    const {newsGroup, newsFeed, options} = this.props;
    const elements = this.setupBreadcrumbs(newsGroup, newsFeed, options);

    return (
      <Breadcrumbs elements={elements} />
    );
  }
}

FeedViewerBreadcrumb.propTypes = {
  newsGroup: PropTypes.object,
  newsFeed: PropTypes.object,
  breadcrumbOptions: PropTypes.object
}

FeedViewerBreadcrumb.defaultProps = {
  newsGroup: {},
  newsFeed: {},
  breadcrumbOptions: {}
};

export default FeedViewerBreadcrumb;
