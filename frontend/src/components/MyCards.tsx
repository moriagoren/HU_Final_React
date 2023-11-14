import { useState } from "react";
import { CardType } from "../interfaces/CardType";
import { deleteCard, setFavorites } from "../services/ApiServices";
import { getUser } from "../auth/TokenManager";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

interface CardTypeProps extends CardType {
    handleDelete?: () => void
}

export function MyCard({
    _id,
    title,
    subTitle,
    description,
    phone,
    email,
    web,
    imageUrl,
    imageAlt,
    state,
    country,
    city,
    street,
    houseNumber,
    zip,
    handleDelete
}: CardTypeProps) {
    const navigate = useNavigate()
    const [isRedHeart, setIsRedHeart] = useState(false)
    const toggleRed = () => {
        setIsRedHeart(!isRedHeart)
    }

    async function handleSetFavs(id: string) {
        await setFavorites(id).then((json) => {
            json.status ? toast.success(`${json.title} Item added to favorites`) : toast.success(`${json.title} Item remove from favorites`)
        })
    }
    return (
        <>
            <div className="card m-2" style={{ width: "18rem" }}>
                <img className="card-img-top" src={imageUrl} alt={imageAlt} style={{ height: "220px", marginTop: "10px" }}></img>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h5 className="card-title">{subTitle}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">phone:{phone}</li>
                    <li className="list-group-item">email:{email}</li>
                    <li className="list-group-item">web:{web}</li>
                </ul>
                <div className="card-body">
                    <div className="d-flex aligh-items">

                        <button
                            className="btn btn-light"
                            onClick={handleDelete}
                        >
                            <i className="bi bi-trash"></i>
                        </button>

                        <div className="justify-content-end ">

                            <button
                                onClick={() => navigate(`/EditCardForm/${_id}`)}
                                className="btn btn-light"
                            >
                                <i className="bi bi-pencil p-2"></i>
                            </button>
                            <button
                                onClick={() => {
                                    handleSetFavs(_id as string)
                                    toggleRed()
                                }}
                                className="btn btn-light"
                            >
                                <i className="bi bi-suit-heart-fill p-2" style={{}}></i>
                            </button>


                        </div>
                    </div>

                </div>
            </div>

        </>

    );
}

export default MyCard;
