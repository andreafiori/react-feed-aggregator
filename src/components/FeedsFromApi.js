import React, { Component } from 'react';

/**
 * Show newsFromApi properties and Feeds news from API
 */
class FeedsFromApi extends Component {
	static defaultProps = {
		newsGroup: null,
		newsFromApi: null,
	}

	createMarkup(str) {
		return {__html: str};
	}

	render() {

		const { newsFromApi } = this.props;

		if (this.props.newsFromApi !== null) {
			return (
				<div>

					<div className="row">
						
						<div className="col-sm-12 col-md-12 col-lg-9">
							<h2 dangerouslySetInnerHTML={ this.createMarkup(newsFromApi.feed.title) } />
							<p dangerouslySetInnerHTML={ this.createMarkup(newsFromApi.feed.description) } />
							
						</div>

						<div className="col-sm-12 col-md-12 col-lg-3">
							<br />
							<img src={newsFromApi.feed.image} alt="" className="img-thumbnail img-fluid" />
						</div>
						
					</div>
					
						{ newsFromApi.items.map((item, i) => 
							<div key={'news-item-link-'+i} className="feed-block">
								<h3>
									<a href={item.link} rel="noopener noreferrer" target="_blank">{item.title}</a>
								</h3>
								
								<p><i className="fa fa-calendar"></i> Created: <time>{item.pubDate}</time></p>
								<p>{ item.description.replace(/(<([^>]+)>)/ig,"")  }</p>
							</div>
						)}

				</div>
			);
		}
	}
}

export default FeedsFromApi;