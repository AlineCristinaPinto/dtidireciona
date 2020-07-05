import React from 'react'
import './cardFooter.scss'

export default props => {
    return (
        <div className="card-footer">
          <a href={props.site}>{props.siteName}</a>
        </div>
    );
};