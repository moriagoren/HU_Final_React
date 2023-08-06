import { useState, useEffect } from "react";
import Title from "../components/Title";
import { CardType } from "../interfaces/CardType";
import { getCards } from "../services/ApiServices";
import Card from "../components/Card";



function Home() {
    const [cards, setCards] = useState<Array<CardType>>([]);
    useEffect(() => {
        getCards()
            .then(json => {
                console.log(json);
                setCards(json);
            })
    }, []);
    return (
        <>
            <Title mainText="Crads Page"
                subText="Here you can find business cards from all categories" />
            <div className="row">
                {cards.map((card) =>

                    <Card {...card}
                        key={card._id}
                    />

                )}
            </div>


        </>

    );
}

export default Home;


