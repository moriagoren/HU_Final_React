import { toast } from "react-toastify"
import { removeToken, removeUser } from "./TokenManager"

const Logout = () => {

    function handleClick() {
        removeUser()
        toast.success("You are not logged in")
    }

    return (
        <button className="nav-link" onClick={handleClick} >Logout</button>

    )

}

export default Logout