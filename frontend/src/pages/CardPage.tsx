import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCardById } from "../services/ApiServices";
import { CardType } from "../interfaces/CardType";

function CardPage() {
    const { id } = useParams()
    const [selectedCard, setSelectedCard] = useState<CardType>()
    useEffect(() => {
        if (!id) return
        getCardById(id).then((json) => {

            setSelectedCard(json)
        })
    }, [])
    return (
        <>
            <div>{selectedCard?.title}</div>
        </>
    )

}

export default CardPage;
