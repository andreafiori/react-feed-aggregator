import React, { Component } from 'react';
import SocialButtons from './SocialButtons';

class NewsGroupList extends Component {
  static defaultProps = {
    group: null
  };

  render() {
    const { group } = this.props;

    if (group) {
      return (
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
          <img className="card-img-left flex-auto d-none d-lg-block" src={require('../images/' + group.image)} alt="" />
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">{group.category}</strong>
            <h3 className="mb-0">
              { group.title }
            </h3>
            <p className="card-text mb-auto">{ group.description }</p>

            <SocialButtons obj={group} />

          </div>

        </div>
      );
    }

    return (
      <div className="alert alert-warning">
        <h3>Error occurred</h3>
        <p>No news group. Check the news group list.</p>
      </div>
    );
    
  }
}

export default NewsGroupList;
