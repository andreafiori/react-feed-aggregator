import React, { Component } from 'react';
import { formatDate } from '../utils/DateUtils';

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
              { currentFeed.website && 
                <span>
                  <a href={currentFeed.website} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer" title={currentFeed.label + ' official website'}>
                    <i className="fa fa-globe"></i> Website
                  </a>&nbsp;
                </span>
              }

              { currentFeed.facebook && 
                <span>
                  <a href={currentFeed.facebook} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer" title={currentFeed.label + ' Facebook profile'}>
                    <i className="fa fa-facebook"></i> Facebook
                  </a>&nbsp;
                </span>
              }

              { currentFeed.twitter && 
                <span>
                  <a href={currentFeed.twitter} target="_blank" className="btn btn-sm btn-info" rel="noopener noreferrer" title={currentFeed.label + ' Twitter profile'}>
                    <i className="fa fa-twitter"></i> Twitter
                  </a>&nbsp;
                </span>
              }

              { currentFeed.linkedin && 
                <span>
                  <a href={currentFeed.linkedin} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer" title={currentFeed.label + ' Linkedin profile'}>
                    <i className="fa fa-linkedin"></i> Linkedin
                  </a>&nbsp;
                </span>
              }

              { currentFeed.youtube && 
                <span>
                  <a href={currentFeed.youtube} target="_blank" className="btn btn-sm btn-danger" rel="noopener noreferrer" title={currentFeed.label + ' Youtube profile'}>
                    <i className="fa fa-youtube"></i> Youtube
                  </a>&nbsp;
                </span>
              }

              { currentFeed.github && 
                <span>
                  <a href={currentFeed.github} target="_blank" className="btn btn-sm btn-dark" rel="noopener noreferrer" title={currentFeed.label + ' Github profile'}>
                    <i className="fa fa-github"></i> Github
                  </a>&nbsp;
                </span>
              }

              <span>
                <a href={currentFeed.url} target="_blank" className="btn btn-sm btn-warning" rel="noopener noreferrer" title={currentFeed.label + ' RSS feed link'}>
                  <i className="fa fa-rss"></i> RSS
                </a>
              </span>
            </div>
            
          </div>
          
            { newsFromApi.items.map((item, i) => 
              <div key={'news-item-link-'+i} className="feed-block">
                <h3>
                  <a href={item.link} rel="noopener noreferrer" target="_blank" title={item.title + ', read more'}>{item.title}</a>
                </h3>
                
                <div><i className="fa fa-calendar"></i> <time>{ formatDate(item.pubDate) }</time></div>

                { !currentFeed.hideDescription && 
                  <div>{ item.description  }</div>
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