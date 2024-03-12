import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Menu.css"

function Menu() {
  return (
    <div className="navbar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">Climeos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
              <NavDropdown title="Mais..." id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ação 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ação 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ação 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ação 4</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
