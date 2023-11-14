import { useNavigate } from "react-router-dom";
import { getUser } from "../auth/TokenManager";
import { useEffect, useState } from "react";
import { deleteCard, getCardsById } from "../services/ApiServices";
import { CardType } from "../interfaces/CardType";
import Card from "../components/Card";
import MyCard from "../components/MyCards";
import { toast } from "react-toastify";

function Mycards() {
    const navigate = useNavigate()
    const user = getUser()
    const [myCards, setMyCards] = useState<Array<CardType>>()

    useEffect(() => {
        getCardsById(user?.user._id).then((json) => {
            setMyCards(json)
        })
    }, [])

    async function handleDelete(_id: string) {
        await deleteCard(_id).then((json) => {
            console.log(json);

            toast.success("Card deleted")

        })
        await getCardsById(user?.user._id).then((json) => {
            setMyCards(json)
        })
    }

    return (
        <>
            <button onClick={() => navigate('/addcard')}>Add card</button>
            <div className="d-flex">
                {myCards?.map((card) => (
                    <MyCard key={card._id} {...card} handleDelete={() => handleDelete(card._id as string)} />
                ))}
            </div>
        </>
    );
}

export default Mycards;