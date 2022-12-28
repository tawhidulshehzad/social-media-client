import { GoogleAuthProvider } from "firebase/auth";
import { MDBBtn } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo1 from "../../../assets/food-bar.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { providerLogin, user, logOut } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <>
      <Link className=" fw-semibold text-decoration-none text-dark" to="/">
        Home
      </Link>
      <Link className=" fw-semibold ms-3 text-decoration-none text-dark" to="/blog">
          Blog
      </Link>
      {user?.email ? (
        <>
          <Link
            className=" fw-semibold text-decoration-none text-dark ms-3"
            to="/reviews"
          >
            My Reviews
          </Link>
          <Link
            className=" fw-semibold text-decoration-none text-dark ms-3"
            to="/addservices"
          >
            Add Services
          </Link>
          <button
            onClick={handleLogOut}
            className="border-0 bg-transparent fw-semibold text-decoration-none text-dark ms-3"
          >
            Sign Out
          </button>
        </>
      ) : (
        <Link
          className=" fw-semibold text-decoration-none text-dark ms-3"
          to="/login"
        >
          Login
        </Link>
      )}
    </>
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="text-decoration-none text-dark">
            <div className="d-flex">
              <img style={{ width: "50px" }} src={logo1} alt="" />
              <p className="d-flex align-items-center ps-2 mb-0">Cloud Food</p>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>{menuItems}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              
            </Nav.Link>
          </Nav>
          <MDBBtn onClick={handleGoogleSignIn} outline color="success">
            Login with Google
          </MDBBtn>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
