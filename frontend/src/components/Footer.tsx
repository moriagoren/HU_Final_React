
import { Link, NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="footer bg bg-light">
                <div className="container-footer">
                    < NavLink to="/about" className="navbar-brand">
                        <div className="m-2">
                            <i className="bi bi-exclamation-circle"></i>
                            <p>About</p>
                        </div>
                    </ NavLink>
                    < NavLink to="/favcards" className="navbar-brand">
                        <div className="m-2">
                            <i className="bi bi-suit-heart-fill"></i>
                            <p>Favorites</p>
                        </div>
                    </ NavLink>
                    < NavLink to='/mycards' className="navbar-brand">
                        <div className="m-2">
                            <i className="bi bi-person-vcard"></i>
                            <p>My Cards</p>
                        </div>
                    </ NavLink>

                </div>





            </footer></>
    );
}

export default Footer;