import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
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

    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Bcard</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/favcards">Fav Cards</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearchChange}
                value={searchValue}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav
              className=""
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {verifyAdmin() && (
                <Nav.Link href="/admin">Admin Area</Nav.Link>

              )}
              {!userData?.token && (
                <>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* time */}


    </>
  );
};


export default Header;
