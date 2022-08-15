import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget';
import Categories from '../Categories/Categories';

const NavBar = () => {
    return (
        <Navbar className="NavBar" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="../ItemDetailContainer/ItemDetailContainer">Vino para hablar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Tienda</Nav.Link>
                        <Nav.Link href="#link">Novedades</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <Categories />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="nav" >
                <CardWidget />
            </div>
        </Navbar>
    );
}

export default NavBar;