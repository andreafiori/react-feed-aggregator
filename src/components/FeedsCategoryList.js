import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FeedsCategoryList extends Component {

	static defaultProps = {
		items: {}
	}

	render() {
		if (this.props.items.length > 0) {
			return this.props.items.map((item, i) =>
				<div key={'newsgroup-' + i}>
					<h3 className="font-italic">{item.title}</h3>
					<ul className="list-unstyled">
						{item.feeds.map((feed, i) =>
							<li key={'news-item-' + i}>
								<Link onClick={this.props.resetState} to={`${process.env.PUBLIC_URL}` + feed.path} title={feed.title}>{feed.label}</Link>
							</li>
						)}
					</ul>
				</div>
			);
		} else {
			return(
				<div>
					<h3 className="font-italic">No Categories</h3>
				</div>
			);
		}

	}
}

export default FeedsCategoryList;
