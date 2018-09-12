import React, { Component } from 'react';
import { Link } from "react-router-dom";

/**
 * News Group list
 * 
 * TODO: validate news groups input
 */
class NewsList extends Component {
  static defaultProps = {
    newsGroups: null,
    columnSize: 6,
  };

  constructor(props) {
    super(props);

    this.state = {
      columnSize: (props.columnSize) ? props.columnSize : 6,
    };
  }

  render() {

    const { newsGroups } = this.props;
    const { columnSize } = this.state;

    return (
      <div>
        { newsGroups.length > 0 && 
          <div className="row">
            { newsGroups.map((item, i) =>
              <div className={'col-sm-12 col-md-' + columnSize + ' col-lg-' + columnSize} key={'newsgroup-' + i}>
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                  <Link to={item.path} className="text-dark" title={'Read ' + item.title + ' news'}>
                    <img className="card-img-right flex-auto d-none d-lg-block" src={require('../images/' + item.image)} alt={item.title} />
                  </Link>
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
        }

        { (!newsGroups.length || newsGroups.length === 0) &&
          <div className="alert alert-warning">
            <h3>No news group were found</h3>
            <p>Please come back later. We will add new feeds ASAP.</p>
          </div>
        } 
      </div>
    );
  }
}

export default NewsList;
