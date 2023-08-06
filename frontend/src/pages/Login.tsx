
import { useContext, useState } from "react";

// import FormLayout from "../layouts/FormLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { AppContext } from "../App";
import Title from "../components/Title";
import { setToken } from "../auth/TokenManager";
import { login } from "../services/ApiServices";
import FormLayout from "../components/FormLayout";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // const context = useContext(AppContext);

  function validate(): boolean {
    if (!email) { // also check that email is required with regex
      toast.error('email is required.')
      return false
    }

    if (!password || password.length < 8) {
      toast.error('Password must contain at least 8 characters.')
      return false
    }

    return true
  }

  function handleClick() {
    if (!validate()) {
      console.log("invalid");

      return;
    }
    console.log("valid");

    login({
      email,
      password,
    })
      .then((user) => {
        setToken(user.token)
        navigate('/')
      })
  }




  return (
    <>
      <Title mainText="LOGIN" />
      <FormLayout>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control me-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control me-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

      </FormLayout>

      <div className="m-4 d-flex justify-content-center">
        <button className="me-2 col-3 btn btn-outline-danger">cancel</button>
        <button className="me-2 col-3 btn btn-outline-primary"> <i className="bi bi-arrow-repeat"></i></button>

      </div>
      <div className="d-flex justify-content-center ">
        <button className="col-6 btn btn-primary"
          onClick={handleClick}
        >
          submit
        </button>


      </div>
    </>
  );
}
export default Login;

