import './footer.css';
import { Link, NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="bg-body-tertiary text-center text-lg-start ">

                <div className="text-center p-3">
                    © 2020 Copyright:
                    <a className="text-body" href="/">Bcard.com</a>

                </div>

            </footer>
        </>
    );
}

export default Footer;