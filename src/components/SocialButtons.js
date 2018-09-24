import React from 'react';

const SocialButtons = (props) => (
  <div>
    { props.obj.website && 
      <span>
        <a href={props.obj.website} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer" title={props.obj.label + ' official website'}>
          <i className="fa fa-globe"></i> Website
        </a>&nbsp;
      </span>
    }

    { props.obj.facebook && 
      <span>
        <a href={props.obj.facebook} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer" title={props.obj.label + ' Facebook profile'}>
          <i className="fa fa-facebook"></i> Facebook
        </a>&nbsp;
      </span>
    }

    { props.obj.twitter && 
      <span>
        <a href={props.obj.twitter} target="_blank" className="btn btn-sm btn-info" rel="noopener noreferrer" title={props.obj.label + ' Twitter profile'}>
          <i className="fa fa-twitter"></i> Twitter
        </a>&nbsp;
      </span>
    }

    { props.obj.linkedin && 
      <span>
        <a href={props.obj.linkedin} target="_blank" className="btn btn-sm btn-primary" rel="noopener noreferrer" title={props.obj.label + ' Linkedin profile'}>
          <i className="fa fa-linkedin"></i> Linkedin
        </a>&nbsp;
      </span>
    }

    { props.obj.youtube && 
      <span>
        <a href={props.obj.youtube} target="_blank" className="btn btn-sm btn-danger" rel="noopener noreferrer" title={props.obj.label + ' Youtube profile'}>
          <i className="fa fa-youtube"></i> Youtube
        </a>&nbsp;
      </span>
    }

    { props.obj.wikipedia && 
      <span><a href={props.obj.wikipedia} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary"><i className="fa fa-wikipedia-w"></i> Wikipedia</a>&nbsp;</span>
    }

    { props.obj.github && 
      <span>
        <a href={props.obj.github} target="_blank" className="btn btn-sm btn-dark" rel="noopener noreferrer" title={props.obj.label + ' Github profile'}>
          <i className="fa fa-github"></i> Github
        </a>&nbsp;
      </span>
    }

    { props.obj.rss && 
      <span>
        <a href={props.obj.rss} target="_blank" className="btn btn-sm btn-warning" rel="noopener noreferrer" title={props.obj.label + ' RSS feed link'}>
          <i className="fa fa-rss"></i> RSS
        </a>
      </span>
    }

    { props.obj.url && 
      <span>
        <a href={props.obj.url} target="_blank" className="btn btn-sm btn-warning" rel="noopener noreferrer" title={props.obj.label + ' RSS feed link'}>
          <i className="fa fa-rss"></i> RSS
        </a>
      </span>
    }
    
  </div>
);

export default SocialButtons;
