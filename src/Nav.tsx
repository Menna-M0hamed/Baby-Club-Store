import Container from 'react-bootstrap/Container';
import logo from "./assets/Asset 1.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" className="nav">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className='mx-auto'></div>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Summer Collection</NavDropdown.Item>
              <NavDropdown.Item href="#winter"> Winter Collection </NavDropdown.Item>
              <NavDropdown.Item href="#action4">All Year Collection </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                All Year Collection
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#footer">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;