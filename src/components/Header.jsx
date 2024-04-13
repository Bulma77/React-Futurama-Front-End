import logo from "../assets/logo.png";

// Import bootstap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary  justify-content-between"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo Futurama" height="40px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/info">INFOS</Nav.Link>
              <Nav.Link href="/characters">CHARACTERS</Nav.Link>
              <Nav.Link href="/episodes">EPISODES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
