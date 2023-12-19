import { useEffect, useState } from "react";
import { getFavorites } from "../services/ApiServices";
import Card from "../components/Card";
import { CardType } from "../interfaces/CardType";

function Favcards() {
    const [cards, setCards] = useState<Array<CardType>>([])
    console.log(cards);

    useEffect(() => {
        getFavorites()
            .then(json => {
                setCards(json);
            })

    }, []);
    return (<>
        <div className="d-flex">
            {cards.map((card) =>

                <Card {...card}
                    key={card._id}
                    handleDelete={() => { }}
                />

            )}
        </div>
    </>);
}

export default Favcards;