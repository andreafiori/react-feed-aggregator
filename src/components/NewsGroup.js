import React, { Component } from 'react';
import { newsGroups, feeds } from '../feeds/NewsFeedManager.js';
import { getNewsGroupByKey, getNewsFeedsByGroup } from '../feeds/FeedsManager.js';
import FeedsCategoryList from './FeedsCategoryList.js';
import Breadcrumbs from './Breadcrumbs.js';

class NewsGroup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      group: getNewsGroupByKey(newsGroups, props.match.params.group),
      feeds: getNewsFeedsByGroup(feeds, props.match.params.group),
      breadcrumbs: [
        { label: 'News', href: '/news', title: 'Back to news feeds main page', active: false },
        { label: 'News', href: null, title: null, active: true }
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

            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <img className="card-img-right flex-auto d-none d-lg-block" src="https://via.placeholder.com/200x250" alt="Thumbnail [200x250]" />
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">Category</strong>
                <h3 className="mb-0">
                  { group.title }
                </h3>
                <p className="card-text mb-auto">{ group.description }</p>

                <div>
                { group.youtube && 
									<span><a href={group.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-danger"><i className="fa fa-youtube"></i> Youtube</a>&nbsp;</span>
								}

								{ group.facebook && 
									<span><a href={group.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-info"><i className="fa fa-facebook"></i> Facebook</a>&nbsp;</span>
								}

								{ group.wikipedia && 
									<span><a href={group.wikipedia} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary"><i className="fa fa-wikipedia-w"></i> Wikipedia</a>&nbsp;</span>
								}

								{ group.rss && 
									<span><a href={group.rss} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-warning"><i className="fa fa-rss"></i> RSS</a></span>
								}
                </div>

              </div>

            </div>

          </div>

          <div className="col-sm-12 col-md-12 col-lg-3">
            <FeedsCategoryList items={feeds} />
          </div>
        </div>

      </div>

    );
  }

}

export default NewsGroup;