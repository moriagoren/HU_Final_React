import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import BtnLight from "./BtnLight";


function Header() {

  return (
    <Navbar expand="lg" className="header">

      <Container fluid >
        <NavLink to="/" className="navbar-brand">
          BCARD
        </NavLink>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/Details" className="navbar-brand">
              DETAILS
            </NavLink>


            <NavLink to="/about" className="navbar-brand">
              ABOUT
            </NavLink>

            <NavLink to="/favcards" className="navbar-brand">
              FAV CARDS
            </NavLink>
            <NavLink to="/mycards" className="navbar-brand">
              MY CARDS
            </NavLink>
            <NavLink to="/addcard" className="navbar-brand">
              ADD CARD
            </NavLink>
            <NavLink to="/EditCardForm" className="navbar-brand">
              EDIT CARD
            </NavLink>
          </Nav>


          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>

            <BtnLight />

            <NavLink to="/login" className="navbar-brand">
              login
            </NavLink>
            <NavLink to="/signup" className="navbar-brand">
              signup
            </NavLink>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Header;
