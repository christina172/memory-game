import React from 'react';

function Card(props) {
    return (
        <div className="card" style={{ backgroundColor: props.card.color }} onClick={() => props.addClick(props.card.name)}>
            <img src={props.card.url} alt={props.card.name}></img>
            <div className='name'>{props.card.name}</div>
        </div >
    )
};

export default Card;