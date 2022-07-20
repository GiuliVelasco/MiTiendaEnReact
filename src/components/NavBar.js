import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import CardWidget from './CardWidget';

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
                            <NavDropdown.Item href="#action/3.1">Vinos Tintos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Vinos Blancos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Vinos Organicos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="logo" >
                <CardWidget />Mi bodega
            </div>
        </Navbar>
    );
}

export default NavBar;