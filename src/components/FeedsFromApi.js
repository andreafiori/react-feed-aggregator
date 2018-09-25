import React, { Component } from 'react';
import { formatDate } from '../utils/DateUtils';
import { StringUtils } from '../utils/StringUtils';
import SocialButtons from './SocialButtons';

class FeedsFromApi extends Component {

  static defaultProps = {
    currentFeed: null,
    newsFromApi: null,
  }

  render() {

    const { currentFeed, newsFromApi } = this.props;

    if (newsFromApi.items &&  newsFromApi.items.length > 0) {
      return (
        <div>

          <div className="row">
            
            <div className="col-sm-12 col-md-12 col-lg-9">
              <h2>{ newsFromApi.title }</h2>
              <p>{ newsFromApi.description }</p>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3">
              <br />
              <img src={newsFromApi.image} alt="" className="img-thumbnail img-fluid" />
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <SocialButtons obj={currentFeed} />
            </div>
            
          </div>
          
            { newsFromApi.items.map((item, i) => 
              <div key={'news-item-link-'+i} className="feed-block">
                <h3>
                  <a href={item.link} rel="noopener noreferrer" target="_blank" title={item.title + ', read more'}>{item.title}</a>
                </h3>
                
                <div><i className="fa fa-calendar"></i> <time>{ formatDate(item.pubDate) }</time></div>

                { !currentFeed.hideDescription && !currentFeed.truncateDescription && 
                  <div>{ item.description  }</div>
                }

                { currentFeed.truncateDescription === true &&
                  <div>{ StringUtils.truncateString(item.description, 40) + '...'  }</div>
                }

                <div className="text-right">
                  <a href={item.link} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
              </div>
            )}

        </div>
      );
    } else {
      return (
        <div className="alert alert-warning">
          <h3>No news to display</h3>
          <p>No news to display at the moment. Please come back later.</p>
          <div>
            <a href={currentFeed.url} target="_blank" className="btn btn-sm btn-warning" rel="noopener noreferrer" title={currentFeed.label + ' RSS feed link'}>
              <i className="fa fa-rss"></i> RSS
            </a>
          </div>
        </div>
      );
    }
  }
}

export default FeedsFromApi;
