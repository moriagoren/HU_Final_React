import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { CardType } from "../../interfaces/CardType";
import { deleteCard, getCards } from "../../services/ApiServices";
import Card from "../../components/Card";
import { toast } from "react-toastify";

function Dashboard() {
    const navigate = useNavigate()
    const [cards, setCards] = useState<Array<CardType>>([]);


    useEffect(() => {
        getAllCards()

    }, []);

    const getAllCards = async () => {
        getCards()
            .then(json => {
                setCards(json);
            })
    }
    function handleDelete(id: string) {
        deleteCard(id).then(() => {
            toast.success("Card deleted!")
            getAllCards()
        })

    }
    return <div>
        <div>
            <button onClick={() => navigate('/addcard')}>Add a card</button>
        </div>
        <div>
            {cards.map((card) =>

                <Card {...card}
                    key={card._id}
                    handleDelete={() => handleDelete(card._id!)}
                />

            )}
        </div>
    </div>
}
export default Dashboard