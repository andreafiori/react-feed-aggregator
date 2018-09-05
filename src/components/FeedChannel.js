import React, { Component } from 'react';

class FeedChannel extends Component {

	static defaultProps = {
		feeds = null,
	};

	render() {
		return (
			<div>
				{feeds.map((item, i) =>

					<div className="col-sm-12 col-md-6 col-lg-6" key={'newsgroup-' + i}>

						<div className="card flex-md-row mb-4 shadow-sm h-md-250">
							<img className="card-img-right flex-auto d-none d-lg-block" src="https://via.placeholder.com/200x250" alt="Thumbnail [100x150]" />
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">{item.category}</strong>
								<h3 className="mb-0">
									<Link to={item.path} className="text-dark">{item.title}</Link>
								</h3>
								<p className="card-text mb-auto">{item.description}</p>
								<Link to={item.path} className="btn btn-sm btn-primary">&raquo; Read news</Link>
							</div>

						</div>

					</div>
				)}
			</div>
		);
	}
}

export default FeedChannel;