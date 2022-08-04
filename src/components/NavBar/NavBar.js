import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar className="NavBar" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Vino para hablar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Tienda</Nav.Link>
                        <Nav.Link href="#link">Novedades</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <Link to="/categoria/vinos tintos">Vinos Tintos</Link><br></br>
                            <Link to="/categoria/vinos blancos">Vinos Blancos</Link><br></br>
                            <Link to="/categoria/vinos organicos">Vinos Organicos</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="nav" >
                <CardWidget />Mi bodega
            </div>
        </Navbar>
    );
}

export default NavBar;