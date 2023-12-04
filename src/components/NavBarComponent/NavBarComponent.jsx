import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Beds&Dreams</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100p' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <Nav.Link href="#action2">¿Quiénes Somos?</Nav.Link>
                        <Nav.Link href="#action3">Tienda Online</Nav.Link>
                        <Nav.Link href="#action4">Hoteles</Nav.Link>
                        <Nav.Link href="#action5">Contácto</Nav.Link>
                        <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action6">Cama</NavDropdown.Item>
                            <NavDropdown.Item href="#action7">
                                Baño
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action8">
                                Ir a la Tienda
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
}

export default NavScrollExample;

