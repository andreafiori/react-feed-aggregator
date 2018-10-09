import React, { Component } from 'react';

class SocialButtons extends Component {

  render() {
    return (
    <div>

        { this.props.obj && this.props.obj.website && 
          <span>
            <a href={this.props.obj.website} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer" title={this.props.obj.label + ' official website'}>
              <i className="fa fa-globe"></i> Website
            </a>&nbsp;
          </span>
        }

        { this.props.obj && this.props.obj.facebook && 
          <span>
            <a href={this.props.obj.facebook} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer" title={this.props.obj.label + ' Facebook profile'}>
              <i className="fa fa-facebook"></i> Facebook
            </a>&nbsp;
          </span>
        }

        { this.props.obj && this.props.obj.twitter && 
          <span>
            <a href={this.props.obj.twitter} target="_blank" className="btn btn-sm btn-info" rel="noopener noreferrer" title={this.props.obj.label + ' Twitter profile'}>
              <i className="fa fa-twitter"></i> Twitter
            </a>&nbsp;
          </span>
        }

        { this.props.obj && this.props.obj.linkedin && 
          <span>
            <a href={this.props.obj.linkedin} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer" title={this.props.obj.label + ' Linkedin profile'}>
              <i className="fa fa-linkedin"></i> Linkedin
            </a>&nbsp;
          </span>
        }

        { this.props.obj && this.props.obj.youtube && 
          <span>
            <a href={this.props.obj.youtube} target="_blank" className="btn btn-sm btn-danger" rel="noopener noreferrer" title={this.props.obj.label + ' Youtube profile'}>
              <i className="fa fa-youtube"></i> Youtube
            </a>&nbsp;
          </span>
        }

        { this.props.obj && this.props.obj.wikipedia && 
          <span><a href={this.props.obj.wikipedia} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary"><i className="fa fa-wikipedia-w"></i> Wikipedia</a>&nbsp;</span>
        }

        { this.props.obj && this.props.obj.github && 
          <span>
            <a href={this.props.obj.github} target="_blank" className="btn btn-sm btn-dark" rel="noopener noreferrer" title={this.props.obj.label + ' Github profile'}>
              <i className="fa fa-github"></i> Github
            </a>&nbsp;
          </span>
        }

        { this.props.obj && this.props.obj.rss && 
          <span>
            <a href={this.props.obj.rss} target="_blank" className="btn btn-sm btn-warning" rel="noopener noreferrer" title={this.props.obj.label + ' RSS feed link'}>
              <i className="fa fa-rss"></i> RSS
            </a>
          </span>
        }

        { this.props.obj && this.props.obj.url && 
          <span>
            <a href={this.props.obj.url} target="_blank" className="btn btn-sm btn-warning" rel="noopener noreferrer" title={this.props.obj.label + ' RSS feed link'}>
              <i className="fa fa-rss"></i> RSS
            </a>
          </span>
        }
        
      </div>
    );
  }

}

export default SocialButtons;
