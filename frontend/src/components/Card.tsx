import { useState } from "react";
import { CardType } from "../interfaces/CardType";


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

}: CardType) {


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
            <div className="d-flex  justify-content-start">


              <button
                className="btn btn-light"
              //onClick={() => onDelete(Card._id)}
              >
                <i className="bi bi-trash"></i>
              </button>   </div>
            <div className="justify-content-end ">

              <button
                className="btn btn-light"
              >
                <i className="bi bi-pencil p-2"></i>
              </button>
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
