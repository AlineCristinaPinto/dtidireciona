import React from 'react'

import './card.scss'

export default props => {
    const style = {
        backgroundColor: props.style.color ? props.style.color : '#fff',
        borderLeftColor: props.style.borderColor || '#dbe9f5',
        borderLeftWidth : props.style.borderColor ? 'medium' : 'thin' 
    } 

    return (
        <article className="card"  style={style}>
            {props.children}           
        </article>
    );
};