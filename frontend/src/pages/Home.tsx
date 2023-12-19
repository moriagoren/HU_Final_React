import { useState, useEffect, useContext } from "react";
import Title from "../components/Title";
import { CardType } from "../interfaces/CardType";
import { deleteCard, getCards } from "../services/ApiServices";
import Card from "../components/Card";
import { toast } from "react-toastify";
import { SearchContext } from "../context/SearchContext";



function Home() {
    const [cards, setCards] = useState<Array<CardType>>([]);
    const [filteredData, setFilteredData] = useState<Array<CardType>>([]);
    const { searchValue, setSearchValue } = useContext(SearchContext)
    useEffect(() => {
        getCards()
            .then(json => {
                setCards(json);
            })

    }, []);

    useEffect(() => {
        const filtered = cards.filter((item) => item.title?.toLowerCase().includes(searchValue.toLowerCase()) || item.description?.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredData(filtered)
    }, [searchValue, cards])
    function handledelete(id: string) {

    }
    return (
        <>
            <Title mainText="Cards Page"
                subText="Here you can find business cards from all categories" />
            <div className="d-flex">
                {filteredData.map((card) =>

                    <Card {...card}
                        key={card._id}
                        handleDelete={() => handledelete(card._id!)}
                    />

                )}
            </div>


        </>

    );
}

export default Home;


