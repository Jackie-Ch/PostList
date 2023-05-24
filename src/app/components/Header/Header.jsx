import { Link } from "react-router-dom";

import avaImage from "../../../image/avaCircle.jpg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Header = () => {
  return (
    <>
      {[""].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 p-3"
          style={{ backgroundColor: "#E0FFFF" }}
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand>
              <img
                className="m-2"
                width={40}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGRYU7baKKGNkxYPVB1Dl8yRXkvcynQLbdA&usqp=CAU"
                alt="logo"
              />
              LOGO
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={avaImage}
                    className="rounded-circle"
                    height="50"
                    alt="Avatar"
                    loading="lazy"
                  />
                  <h4>Max Avvakumov</h4>
                  <h6>reamonn@gmail.com</h6>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  sticky="top"
                >
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Main
                  </Link>
                  <Link to="/aboutme" style={{ textDecoration: "none" }}>
                    Aboutme
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
