import React, { Component } from 'react';
import { getAllNewsGroupsAsArray } from '../feeds/FeedsManager.js';
import { newsGroups } from '../feeds/NewsFeedManager.js';
import NewsGroupList from './NewsGroupList.js';
import Breadcrumbs from './Breadcrumbs.js';
import axios from 'axios';

class News extends Component {

  constructor(props) {
    super(props);

    axios.get('http://feeds.bbci.co.uk/news/world/rss.xml')
      .then(function (response) {
        // console.log(response.data);

        // https://github.com/hongkiat/js-rss-reader/blob/master/rss.js
        const DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser());
        let doc = DOMPARSER(response.data, "text/xml");

        doc.querySelectorAll('channel').forEach((item) => {
          
        });

        doc.querySelectorAll('item').forEach((item) => {
          let i = item.querySelector.bind(item);
          console.log( i('title').textContent );
        });

      })
      .catch(function (error) {
        
      });

    this.state = {
      newsGroups: getAllNewsGroupsAsArray(newsGroups),
      breadcrumbs: [
        { label: 'News', href: null, title: null, active: true }
      ]
    };

  }

  render() {
    const { newsGroups, breadcrumbs } = this.state;

    return (
      <div>

        <Breadcrumbs elements={breadcrumbs} />
          
        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-12">
            <NewsGroupList newsGroups={newsGroups} />
          </div>

        </div>

      </div>
    );
  }

}

export default News;
