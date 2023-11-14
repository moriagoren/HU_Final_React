import { useContext, useState } from "react";
import { CardType } from "../interfaces/CardType";
import { deleteCard } from "../services/ApiServices";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

interface DeleteMe extends CardType {
  handleDelete: (id: string) => void
}
export function Card({
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
}: DeleteMe) {

  const { userData } = useContext(UserContext)
  const navigate = useNavigate()
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

            {userData?.admin && (
              <>
                <div className="justify-content-end ">

                  <button
                    className="btn btn-light"
                    onClick={() => handleDelete(_id as string)}
                  >
                    <i className="bi bi-trash p-2"></i>
                  </button>

                </div>
                <div className="justify-content-end ">

                  <button
                    className="btn btn-light"
                    onClick={() => navigate(`/EditCardForm/${_id}`)}
                  >
                    <i className="bi bi-pencil-square p-2"></i>
                  </button>

                </div>
              </>
            )}

            <div className="justify-content-end ">

              <button
                className="btn btn-light"
              >
                <i className="bi bi-suit-heart-fill p-2"></i>
              </button>

            </div>
          </div>

        </div>
      </div>

    </>

  );
}

export default Card;
