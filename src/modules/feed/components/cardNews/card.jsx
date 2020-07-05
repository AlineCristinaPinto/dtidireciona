import React from 'react'
import CardHeader from '../cardHeader/cardHeader'
import CardBody from '../cardBody/cardBody'
import CardFooter from '../cardFooter/cardFooter'

import './card.scss'

export default props => {
    return (
        <article className="card-news">
            <CardHeader image={props.data.image} />
            <CardBody {...props.data}/>
            <CardFooter {...props.data}/>
        </article>
    );
};