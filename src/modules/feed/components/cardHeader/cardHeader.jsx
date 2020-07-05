import React from 'react'
import './cardHeader.scss'

export default props => {
    let style = {
        background: 'url(' + props.image + ')',
    };

    return (
        <div style={style} className="card-image" />
    );
};