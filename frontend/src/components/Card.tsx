import { useContext, useState } from "react";
import { CardType } from "../interfaces/CardType";
import { deleteCard, setFavorites } from "../services/ApiServices";
import { UserContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const [isRedHeart, setIsRedHeart] = useState(false)
  console.log(isRedHeart);

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
        <Link to={`/cardPage/${_id}`}>
          <div className="text-center">
            <img className="card-img-top" src={imageUrl} alt={imageAlt} style={{ height: "220px", marginTop: "10px", width: "220px" }}></img>
          </div>
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
        </Link>
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
                onClick={() => {
                  handleSetFavs(_id as string)
                  toggleRed()
                }}
                className="btn btn-light"
              >
                <i className="bi bi-suit-heart-fill p-2" style={{ color: isRedHeart ? "red" : "" }}></i>
              </button>

            </div>
          </div>

        </div>
      </div>



    </>

  );
}

export default Card;
