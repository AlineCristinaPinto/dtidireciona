import React from 'react'
import './cardBody.scss'

export default props => {
    return (
        <div className="card-body">
          <span className="date">{props.date}</span>          
          <h2>{props.title}</h2>
        </div>
    );
};