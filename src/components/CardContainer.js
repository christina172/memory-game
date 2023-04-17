import React, { useEffect, useState } from 'react';
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

function CardContainer() {
    const [cards, setCards] = useState([
        {
            name: "Coltsfoot",
            url: coltsfoot,
            color: "rgb(255, 255, 187)",
            clicked: 0
        },
        {
            name: "Crocus",
            url: crocus,
            color: "rgb(245, 206, 255)",
            clicked: 0
        },
        {
            name: "Yellow gladiolus",
            url: yellowGladiolus,
            color: "rgb(255, 255, 187)",
            clicked: 0
        },
        {
            name: "Red gladiolus",
            url: redGladiolus,
            color: "rgb(255, 211, 211)",
            clicked: 0
        },
        {
            name: "White hibiscus",
            url: hibiscus,
            color: "rgb(255, 250, 235)",
            clicked: 0
        },
        {
            name: "Echinacea",
            url: echinacea,
            color: "rgb(255, 211, 240)",
            clicked: 0
        },
        {
            name: "Hydrangea",
            url: hydrangea,
            color: "rgb(205, 235, 255)",
            clicked: 0
        },
        {
            name: "Purple and white lilac",
            url: lilac,
            color: "rgb(245, 206, 255)",
            clicked: 0
        },
        {
            name: "Pink rose",
            url: pinkRose,
            color: "rgb(255, 211, 240)",
            clicked: 0
        },
        {
            name: "Red rose",
            url: redRose,
            color: "rgb(255, 211, 211)",
            clicked: 0
        },
        {
            name: "White rose",
            url: whiteRose,
            color: "rgb(255, 250, 235)",
            clicked: 0
        },
        {
            name: "Woodland sage",
            url: sage,
            color: "rgb(217, 206, 255)",
            clicked: 0
        }
    ]);
    const [currentScore, setCurrent] = useState(0);
    const [bestScore, setBest] = useState(0);
    const [result, setResult] = useState('');

    const addClick = (name) => {
        console.log(name);

        setCards(cards.map((card) => {
            if (card.name === name) {
                return {
                    ...card,
                    clicked: card.clicked + 1
                }
            } else {
                return card;
            }
        }));
    };

    useEffect(() => {
        const clickedOnceOrNever = (card) => card.clicked < 2;
        const clickedNever = (card) => card.clicked === 0;

        if (!cards.every(clickedNever) && cards.every(clickedOnceOrNever)) {
            if (result !== "") {
                setResult("");
                setCurrent(1);
            } else {
                setCurrent(currentScore + 1);
            }
        } else if (!cards.every(clickedOnceOrNever)) {
            console.log("You lost");
            setResult("You lost");
        };

        setCards(cards.sort(() => Math.random() - 0.5));
    }, [cards]);

    useEffect(() => {
        if (bestScore < currentScore) {
            setBest(currentScore);
        };
        if (currentScore === 12) {
            console.log("You won");
            setResult("You won");
        }
    }, [currentScore]);

    useEffect(() => {
        if (result !== "") {
            setCards(cards.map((card) => {
                return {
                    ...card,
                    clicked: 0
                }
            }));
        }

    }, [result])

    return (
        <div className='container'>
            <div className='scoreboard'>
                <p>Current score: {currentScore}</p>
                <p>Best score: {bestScore}</p>
            </div>
            <div className='result'>{result}</div>
            <div className='card-container'>
                {cards.map((card) => {
                    return (
                        <Card key={card.name} card={card} addClick={addClick} />
                    );
                })}
            </div>
        </div>
    )
};

export default CardContainer;