import React, { Component } from 'react';
import { formatDate } from '../api/DateUtils';

class FeedsFromApi extends Component {
	static defaultProps = {
		currentFeed: null,
		newsGroup: null,
		newsFromApi: null,
	}

	render() {

		const { currentFeed, newsFromApi } = this.props;

		if (this.props.newsFromApi !== null) {
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
									<a href={currentFeed.website} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer" title="">
										<i className="fa fa-globe"></i> Website
									</a>&nbsp;
								</span>
							}

							<span>
								<a href={currentFeed.url} target="_blank" className="btn btn-sm btn-warning" rel="noopener noreferrer" title="">
									<i className="fa fa-rss"></i> RSS feed
								</a>
							</span>
						</div>
						
					</div>
					
						{ newsFromApi.items.map((item, i) => 
							<div key={'news-item-link-'+i} className="feed-block">
								<h3>
									<a href={item.link} rel="noopener noreferrer" target="_blank">{item.title}</a>
								</h3>
								
								<div><i className="fa fa-calendar"></i> <time>{ formatDate(item.pubDate) }</time></div>

								<div>{ item.description  }</div>

								<div className="text-right">
									<a href={item.link} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
								</div>
							</div>
						)}

				</div>
			);
		}
	}
}

export default FeedsFromApi;