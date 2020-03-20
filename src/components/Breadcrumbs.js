import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Breadcrumbs extends Component {

  static defaultProps = {
    elements: []
  };

  componentDidUpdate() {
    
  }

  /**
   * Check state and update it if needed
   * 
   * @param {*} prevProps 
   */
  getSnapshotBeforeUpdate(prevProps) {
    // NOT working because of async calls...
    if (this.props.elements !== prevProps.elements) {
      this.setState({
        elements: this.props.elements,
      });
    }
  }

  render() {

    const { elements } = this.props;

    return (
      <Breadcrumb>
        <BreadcrumbItem><Link to="/" title="Back to the home page">Home</Link></BreadcrumbItem>
        {elements.map((item, i) =>
          <BreadcrumbItem key={'brdcrmb-' + i} active={item.active}>
            {!item.active &&
              <Link to={item.href} title={item.title}>{item.label}</Link>
            }
            {item.active === true &&
              <span>{item.label}</span>
            }
          </BreadcrumbItem>
        )}

      </Breadcrumb>
    );
  }

}

export default Breadcrumbs;