import React from 'react'

import './infoCovid.scss'

export default props => {
    const styleTitle = {
        color: props.style.borderColor
    }

    return (
        <article className="info-body">
            <h2 style={styleTitle} className="title">{props.title}</h2>
            <div className="info">
                <div className="item">
                    <p className="value">{new Intl.NumberFormat().format(props.firstValue)}</p>
                    <span className="text">{props.firstText}</span>
                </div>
                <div className="item">
                    <p className="value">{new Intl.NumberFormat().format(props.secondValue)}</p>
                    <span className="text">{props.secondText}</span>
                </div>
            </div>
        </article>
    );
};