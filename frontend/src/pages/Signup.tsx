import { useState } from "react";
// import FormLayout from "../layouts/FormLayout";
// import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup } from "../services/ApiServices";
import FormLayout from "../components/FormLayout";
import Title from "../components/Title";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [zip, setZip] = useState("");
    const [biz, setBiz] = useState(false)
    const navigate = useNavigate();

    function validate(): boolean {


        if (!firstName || firstName.length < 3) {
            // alsofirstName check that email is required with regex
            toast.error("first name is required and at least then 3 characters.");
            return false;
        }
        if (!lastName) {
            // also check that email is required with regex
            toast.error("last name is required.");
            return false;
        }
        if (!phone || phone.length < 10) {
            // also check that email is required with regex
            toast.error(
                "phone is required and must contain at least then 10 characters."
            );
            return false;
        }
        if (!email) {
            // also check that email is required with regex
            toast.error("email is required.");
            return false;
        }
        if (!password || password.length < 6) {
            toast.error("Password must contain at least 6 characters.");
            return false;
        }


        if (!country) {
            // also check that email is required with regex
            toast.error("country is required.");

            return false;
        }
        if (!city) {
            // also check that email is required with regex
            toast.error("city is required.");
            return false;
        }
        if (!street) {
            // also check that email is required with regex
            toast.error("street is required.");
            return false;
        }
        if (!houseNumber) {
            // also check that email is required with regex
            toast.error("house number is required.");
            return false;

        }
        if (!zip) {
            // also check that email is required with regex
            toast.error("zip is required.");
            return false;

        }
        return true
    }

    function clearFields() {

    }
    function handleClick() {
        if (!validate()) {
            return;
        }


        signup({
            firstName,
            lastName,
            middleName,
            phone,
            email,
            password,
            imageUrl,
            imageAlt,
            state,
            country,
            city,
            street,
            houseNumber,
            zip,
            biz,

        }).then((user) => {
            console.log(user);

            navigate("/login");
            toast.success("You have successfully registered")

        })
    }

    return (
        <>
            <Title mainText="REGISTER" />

            <FormLayout>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name *"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}

                        placeholder="Middle name"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={lastName}
                        placeholder="Last name *"
                        onChange={(e) => setLastName(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={phone}
                        placeholder="Phone *"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={email}
                        placeholder="Email *"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={password}
                        placeholder="Password *"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={imageUrl}
                        placeholder="Image url"
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={imageAlt}
                        placeholder="Image alt"
                        onChange={(e) => setImageAlt(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={state}
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={country}
                        placeholder="Country *"
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={city}
                        placeholder="City *"
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={street}
                        placeholder="Street *"
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={houseNumber}
                        placeholder="House number *"
                        onChange={(e) => setHouseNumber(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
                        value={zip}
                        placeholder="Zip"
                        onChange={(e) => setZip(e.target.value)}
                    />
                </div>
                {/* <div className="mb-3">
                    <input
                        type="checkbox"
                        className="checkbox me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary "
                        value={zip}
                        placeholder="isBiz"
                        onChange={(e) => setBiz(Boolean)}
                    />    Signup as business
                </div> */}


            </FormLayout>


            <div className="d-flex justify-content-center ">
                <button type="button" className="col-6 btn btn-primary rounded rounded-pill"
                    onClick={handleClick}>
                    submit
                </button>
            </div>

        </>
    );
}

export default Signup;
