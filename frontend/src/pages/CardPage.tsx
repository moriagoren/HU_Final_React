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
            <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                <div className="col mt-5">
                    <div className="card rounded-5 ms-5 w-75 border border-5 shadow p-3 mb-5 bg-body-tertiary rounded " >
                        <div className="text-center">
                            <img src={selectedCard?.imageUrl} className="card-img-top mt-2" alt="..." style={{ height: "220px", width: "220px" }} />
                        </div>
                        <div className="card-body">
                            <h4 className="fs-3 text-info">{selectedCard?.title}</h4>
                            <h6 className="fs-5">{selectedCard?.description}</h6>
                            <p className="fs-5"><i className="bi bi-envelope me-2 text-danger"></i>{selectedCard?.email}</p>
                            <p className="fs-5"> <i className="bi bi-telephone me-2 text-success"></i>{selectedCard?.phone}</p>
                            <p className="fs-5"><i className="bi bi-browser-chrome text-primary me-2"></i><a href={selectedCard?.web || ""} target="_blank"  >{selectedCard?.web}</a></p>
                            <p className="fs-5"><i className="bi bi-globe-americas  me-2 text-success"></i>{selectedCard?.country}</p>
                            <p className="fs-5"> <i className="bi bi-house me-2 text-warning"></i>{selectedCard?.city}</p>
                            <p className="fs-5"><i className="bi bi-geo-alt me-2 text-info"></i>{selectedCard?.street} + {selectedCard?.houseNumber}</p>
                            <p className="fs-5"><i className="bi bi-asterisk me-2"></i>{selectedCard?.zip}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CardPage;
