import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import BtnLight from "./BtnLight";
import { verifyAdmin, verifyToken } from "../auth/TokenManager";
import Logout from "../auth/Logout";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { SearchContext } from "../context/SearchContext";


function Header() {
  const { userData } = useContext(UserContext)
  const { searchValue, setSearchValue } = useContext(SearchContext)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  return (
    <Navbar expand="lg" className="header">

      <Container fluid >
        <NavLink to="/" className="navbar-brand">
          BCARD
        </NavLink>

        <Navbar id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >


            <NavLink to="/about" className="navbar-brand">
              ABOUT
            </NavLink>
            {verifyToken() && (

              <>
                <NavLink to="/favcards" className="navbar-brand">
                  FAV CARDS
                </NavLink>
              </>
            )}

          </Nav>


          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </Form>

            <BtnLight />
            {verifyAdmin() && (
              <NavLink to="/admin" className="navbar-brand">
                Admin area
              </NavLink>
            )}
            {!userData?.token && (
              <>
                <NavLink to="/login" className="navbar-brand">
                  login
                </NavLink>
                <NavLink to="/signup" className="navbar-brand">
                  signup
                </NavLink>
              </>

            )}
            {userData?.admin && (
              <NavLink to="/adminarea" className="navbar-brand">
                ADMIN AREA
              </NavLink>
            )}
            {userData?.token && (

              <Logout />
            )}



          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};


export default Header;
