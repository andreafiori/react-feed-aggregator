import React, { Component } from 'react';

/**
 * Show the list of news feeds from the RSS URL
 */
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
							<a href={currentFeed.url} target="_blank" className="btn btn-sm btn-warning" rel="">
								<i className="fa fa-rss"></i> RSS feed
							</a>
						</div>
						
					</div>
					
						{ newsFromApi.items.map((item, i) => 
							<div key={'news-item-link-'+i} className="feed-block">
								<h3>
									<a href={item.link} rel="noopener noreferrer" target="_blank">{item.title}</a>
								</h3>
								
								<p><i className="fa fa-calendar"></i> Created: <time>{item.pubDate}</time></p>

								<p>{ item.description  }</p>
							</div>
						)}

				</div>
			);
		}
	}
}

export default FeedsFromApi;