import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import {useCategory} from "../../hooks/useCategory";
import { items } from '../../json/datos';

const NavbarComponent = () => {

const {category} = useCategory();
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Link to='/'>Beds & Dreams</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100p' }}
                        navbarScroll
                    >
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#quienes-somos">¿Quiénes Somos?</Nav.Link>
                        <Nav.Link href="#tienda-online">Tienda Online</Nav.Link>
                        <Nav.Link href="#hoteles">Hoteles</Nav.Link>
                        <Nav.Link href="#contacto">Contácto</Nav.Link>
                        <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                            {items.map((item, index) => {
                                return (
                                    <NavDropdown.Item key={index}>
                                        <Link to={`/items/${item}`}>{items.categoria}</Link>
                                    </NavDropdown.Item>
                                )
                            })}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action8">
                            <Link to='/'>
                                Ir a la Tienda
                            </Link>                                
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action9" >
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Buscar"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;

