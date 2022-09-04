import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget';
import Categories from '../Categories/Categories';
import {Link} from 'react-router-dom'


const NavBar = () => {
    
    return (
        <Navbar className="NavBar" id="fondoNav">
            <Container>
                <Navbar.Brand><Link className="tituloNav" to="/">VINO PARA HABLAR</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className="subtituloNav" title="Productos" id="basic-nav-dropdown">
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