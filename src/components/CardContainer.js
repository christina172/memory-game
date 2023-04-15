import React, { useState } from 'react';
import Card from "./Card";
import yellowGladiolus from "./images/gladiolus-yellow.jpg";
import redGladiolus from "./images/gladiolus-red.jpg";
import coltsfoot from "./images/coltsfoot.jpg";
import crocus from "./images/crocus.jpg";
import echinacea from "./images/echinacea.jpg";
import hibiscus from "./images/hibiscus-white.jpg";
import hydrangea from "./images/hydrangea.jpg";
import lilac from "./images/lilac-purple-and-white.jpg";
import pinkRose from "./images/rose-pink.jpg";
import redRose from "./images/rose-red.jpg";
import whiteRose from "./images/rose-white.jpg";
import sage from "./images/woodland-sage.jpg";

function CardContainer(props) {
    const [cards, setCards] = useState([
        {
            name: "Coltsfoot",
            url: coltsfoot,
            color: "rgb(255, 255, 187)"
        },
        {
            name: "Crocus",
            url: crocus,
            color: "rgb(245, 206, 255)"
        },
        {
            name: "Yellow gladiolus",
            url: yellowGladiolus,
            color: "rgb(255, 255, 187)"
        },
        {
            name: "Red gladiolus",
            url: redGladiolus,
            color: "rgb(255, 211, 211)"
        },
        {
            name: "White hibiscus",
            url: hibiscus,
            color: "rgb(255, 250, 235)"
        },
        {
            name: "Echinacea",
            url: echinacea,
            color: "rgb(255, 211, 240)"
        },
        {
            name: "Hydrangea",
            url: hydrangea,
            color: "rgb(205, 235, 255)"
        },
        {
            name: "Purple and white lilac",
            url: lilac,
            color: "rgb(245, 206, 255)"
        },
        {
            name: "Pink rose",
            url: pinkRose,
            color: "rgb(255, 211, 240)"
        },
        {
            name: "Red rose",
            url: redRose,
            color: "rgb(255, 211, 211)"
        },
        {
            name: "White rose",
            url: whiteRose,
            color: "rgb(255, 250, 235)"
        },
        {
            name: "Woodland sage",
            url: sage,
            color: "rgb(217, 206, 255)"
        }
    ]);
    return (
        <div className='card-container'>
            {cards.map((card) => {
                return (
                    <Card key={card.name} card={card} />
                );
            })}
        </div>
    )
};

export default CardContainer;