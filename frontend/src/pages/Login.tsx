
import { useContext, useState } from "react";

// import FormLayout from "../layouts/FormLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { AppContext } from "../App";
import Title from "../components/Title";
import { setToken, setUser } from "../auth/TokenManager";
import { login } from "../services/ApiServices";
import FormLayout from "../components/FormLayout";
import { UserContext } from "../context/userContext";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useContext(UserContext)
  const navigate = useNavigate();

  function validate(): boolean {
    if (!email) { // also check that email is required with regex
      toast.error('email is required.')
      return false
    }

    if (!password || password.length < 6) {
      toast.error('Password must contain at least 6 characters.')
      return false
    }

    return true
  }

  function handleClick() {
    if (!validate()) return;


    login({
      email,
      password,
    })
      .then((data) => {

        if (data.user.token) {

          setToken(data?.user?.token)
          setUser(data?.user)
          setUserData(data?.user)
        }

        navigate('/')
        toast.success("Logged in")
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
            className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control me-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-pill border border-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

      </FormLayout>

      <div className="d-flex justify-content-center ">
        <button className="col-6 btn btn-primary rounded rounded-pill "
          onClick={handleClick}
        >
          submit
        </button>


      </div>
    </>
  );
}
export default Login;

