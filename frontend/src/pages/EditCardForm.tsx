import { useEffect, useState } from "react"
import Title from "../components/Title"
import FormLayout from "../components/FormLayout"
import { useNavigate, useParams } from "react-router-dom"
import { editCard, getCardById } from "../services/ApiServices";
import { toast } from "react-toastify";
import { CardType } from "../interfaces/CardType";

// export interface EditCard {
//     card: Array<CardType>,
//     onDelete: Function;
// }

function EditCardForm() {

    const { id } = useParams();
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
    const [zip, setZip] = useState("")
    const [Card, setCard] = useState('')
    const navigate = useNavigate();

    // function handleEdit(_id: string) {
    //     console.log("i work");
    //     editCard(_id, Card).then(() => {
    //         getCardById(_id).then(json => {
    //             setCard(json)
    //         })
    //     })
    // }

    useEffect(() => {
        if (!id) return;


        getCardById(id)
            .then(json => {
                // const date = new Date(json.date);
                // setDate(date.toLocaleDateString('en-CA'));
                // console.log(date.toLocaleDateString('en-CA'));
                setTitle(json.title as string);
                setSubTitle(json.subTitle as string);
                setDescription(json.description as string);
                setPhone(json.phone as string);
                setEmail(json.email as string);
                setWeb(json.web as string);
                setImageUrl(json.imageUrl as string);
                setImageAlt(json.imageAlt as string);
                setState(json.state as string);
                setCountry(json.country as string);
                setCity(json.city as string);
                setStreet(json.street as string);
                setHouseNumber(json.houseNumber as string);
                setZip(json.zip as string);

            })
    }, [id])

    function validate(): boolean {
        if (!title) {
            toast.error('date is title.')
            return false
        }
        if (!subTitle) {
            toast.error('date is subTitle.')
            return false
        }
        if (!description) {
            toast.error('date is description.')
            return false
        }
        if (!phone) {
            toast.error('date is phone.')
            return false
        }
        if (!email) {
            toast.error('date is email.')
            return false
        }
        if (!web) {
            toast.error('date is web.')
            return false
        }
        if (!state) {
            toast.error('date isstate.')
            return false
        }
        if (!country) {
            toast.error('date is country.')
            return false
        }
        if (!city) {
            toast.error('date is city.')
            return false
        }
        if (!street) {
            toast.error('date is street.')
            return false
        }
        if (!houseNumber) {
            toast.error('date is houseNumbe.')
            return false
        }
        if (!zip) {
            toast.error('date is zip.')
            return false
        }

        // setError('')
        return true
    }

    function handleClick() {
        if (!validate()) {
            return
        }

        if (!id) return;

        editCard(id, {
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

        })
            .then(json => {
                console.log(json);

                navigate('/adminarea');
            })
    }



    return (
        <>
            <Title
                mainText="EDIT CARD"
            />

            <FormLayout
            >

                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={title}
                        placeholder="Title*"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={subTitle}
                        placeholder="Subtitle*"
                        onChange={(e) => setSubTitle(e.target.value)}
                    />


                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={description}
                        placeholder="Description*"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={phone}
                        placeholder="Phone*"
                        onChange={(e) => setPhone(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={email}
                        placeholder="Email*"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={web}
                        placeholder="Web"
                        onChange={(e) => setWeb(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={imageUrl}
                        placeholder="Image url"
                        onChange={(e) => setImageUrl(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={imageAlt}
                        placeholder="Image alt"
                        onChange={(e) => setImageAlt(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={state}
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={country}
                        placeholder="Country*"
                        onChange={(e) => setCountry(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={city}
                        placeholder="City*"
                        onChange={(e) => setCity(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={street}
                        placeholder="Street*"
                        onChange={(e) => setStreet(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={houseNumber}
                        placeholder="House number*"
                        onChange={(e) => setHouseNumber(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control me-3"
                        value={zip}
                        placeholder="Zip*"
                        onChange={(e) => setZip(e.target.value)}
                    />

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

export default EditCardForm;

