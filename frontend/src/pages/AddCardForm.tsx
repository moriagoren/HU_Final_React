import { useState } from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import FormLayout from "../components/FormLayout";
import { addCard } from "../services/ApiServices";


function AddCardForm() {

    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [web, setWeb] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [imageAlt, setImageAlt] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [zip, setZip] = useState('')
    const navigate = useNavigate();

    function handleClick() {
        addCard({
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
        }).then((card) => {
            console.log(card);
            navigate('/Card')


        }).catch(() => {
        });
    }




    return (
        <>
            <Title
                mainText="CREATE CARD"
            />



            <FormLayout >

                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={title}
                        placeholder="Title *"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={subTitle}
                        placeholder="Subtitle *"
                        onChange={(e) => setSubTitle(e.target.value)} />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={description}
                        placeholder="Description *"
                        onChange={(e) => setDescription(e.target.value)} />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={phone}
                        placeholder="Phone *"
                        onChange={(e) => setPhone(e.target.value)} />



                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={email}
                        placeholder="Email *"
                        onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={web}
                        placeholder="Web"
                        onChange={(e) => setWeb(e.target.value)} />


                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={imageUrl}
                        placeholder="Image url"
                        onChange={(e) => setImageUrl(e.target.value)} />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={imageAlt}
                        placeholder="Image alt"
                        onChange={(e) => setImageAlt(e.target.value)} />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={state}
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)} />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={country}
                        placeholder="Country *"
                        onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={city}
                        placeholder="City *"
                        onChange={(e) => setCity(e.target.value)} />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={street}
                        placeholder="Street *"
                        onChange={(e) => setStreet(e.target.value)} />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={houseNumber}
                        placeholder="House number *"
                        onChange={(e) => setHouseNumber(e.target.value)} />

                </div>
                <div className="mb-3">
                    <input type="number"
                        className="form-control me-3"
                        value={zip}
                        placeholder="Zip"
                        onChange={(e) => setZip(e.target.value)} />

                </div>

            </FormLayout>

            <div className="m-4 d-flex justify-content-center">
                <button className="me-2 col-3 btn btn-outline-danger">cancel</button>
                <button className="me-2 col-3 btn btn-outline-primary"> <i className="bi bi-arrow-repeat"></i></button>

            </div>
            <div className="d-flex justify-content-center ">
                <button className="col-6 btn btn-primary"
                    onClick={() => {
                        handleClick()
                    }}
                >
                    submit
                </button>

            </div>
        </>
    );
}

export default AddCardForm;