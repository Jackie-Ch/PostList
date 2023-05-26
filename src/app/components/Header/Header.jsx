import { Link } from 'react-router-dom';

import avaImage from '../../../image/avaCircle.jpg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Header = () => {
  return (
    <>
      {[''].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 p-3"
          style={{ backgroundColor: '#E0FFFF' }}
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}>
              LOGO
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
              >
                <rect fill="none" height="256" width="256" />
                <path d="M201.5,54.5a103.8,103.8,0,0,0-147,0,103.8,103.8,0,0,0,0,147,103.8,103.8,0,0,0,147,0,103.8,103.8,0,0,0,0-147ZM128,170.9a31.9,31.9,0,0,0-32.3-9.8L111,128h34l15.3,33.1a31.9,31.9,0,0,0-32.3,9.8Zm40,35.5a89,89,0,0,1-32,9.2V192a16,16,0,0,1,32,0Zm22.2-16.2c-2,2-4.1,3.9-6.2,5.7V176a9.8,9.8,0,0,0-.7-3.4l-48-104h-.1a4.1,4.1,0,0,0-.5-.9c0-.1,0-.1-.1-.2l-.5-.7H134a4.6,4.6,0,0,0-.7-.7h-.2l-.7-.6h-.2l-.8-.5h-.1l-.9-.3h-.3l-.9-.2h-2.4l-1,.2h-.2l-.8.3h-.2l-.9.4h-.1l-.7.6h-.2l-.7.7h-.1l-.5.7-.2.2a4.1,4.1,0,0,1-.5.9l-22.1,48h0L72.7,172.6A9.8,9.8,0,0,0,72,176v19.9c-2.1-1.8-4.2-3.7-6.2-5.7a88,88,0,1,1,124.4,0Z" />
              </svg>
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
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    Main
                  </Link>
                  <Link to="/aboutme" style={{ textDecoration: 'none' }}>
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
