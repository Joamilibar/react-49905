import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
// import { Link } from 'react-router-dom';
// import { useCategory } from '../../hooks/useCategory';
// Siempre es mejor usar nombres de variables o constantes o clases
// en inglés cómo estándares internacionales. Es bueno acostumbrase a eso
// desde el inicio.
import { categories } from '../../json/categories';

const NavbarComponent = () => {
    // La constante category nunca se usa, si es así
    // es mejor eliminar o comentar (Reglas de Linter)
    // const {category} = useCategory();
    return (
        // REVISAR por qué el navbar no se minimiza en un menú de hamburguesa en pantallas móviles
        // Por UX siempre es mejor usar navbar fixed on top!
        <Navbar collapseOnSelect className="bg-body-tertiary justify-content-between" fixed="top">
            <Container fluid>
                <Navbar.Brand href="/">Beds & Dreams</Navbar.Brand>
                {/* 
                    ¿Por qué Link en vez de Brand? ¿Por el color? Usar estilos para mejorar el Brand
                    pero es mejor usar los componentes que ya trae para eso dentro del Navbar
                 */}
                {/* <Link to='/'>Beds & Dreams</Link> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="/home">Inicio</Nav.Link>
                        <Nav.Link href="/about-us">¿Quienes somos?</Nav.Link>
                        <Nav.Link href="/">Tienda online</Nav.Link>
                        <Nav.Link href="/hotels">Hoteles</Nav.Link>
                        {/* Contacto no lleva acento, es grave y termina en vocal XD */}
                        <Nav.Link href="/contact">Contacto</Nav.Link> 
                        <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
                            {
                                categories.map((cat, index) => {
                                    const { category, link } = cat
                                    return (
                                        /* 
                                            Siempre es mejor usar nombres en inglés,
                                            además, los enlaces deben estar siempre en minúsculas
                                            y sin caracteres especiales. Además, es mejor
                                            usar mejor el objeto de categorías
                                        */
                                       /**
                                        * Nav.Link NavDropdown.Item ya genera una etiqueta <a></a>
                                        * al momento de compilar, por lo que si se agrega otra link
                                        * dentro queda <a><a></a></a> lo que genera el error:
                                        * "<a> cannot appear as a descendant of <a>."
                                        */
                                        <NavDropdown.Item key={index} href={link}>{ category }</NavDropdown.Item>
                                    )
                                })
                            }
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">Ir a la tienda</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* El carrito siempre va del lado derecho y no cómo un elemento del navbar */}
                    <Nav>
                        <Form className="d-flex">
                            {/* aria-label son parámetros de accesibilidad, usarlos en minúsculas y sin caracteres especiales */}
                            <Form.Control
                                type="search"
                                placeholder="Buscar"
                                className="me-2"
                                aria-label="buscar"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                        <Nav.Link href="#cart" >
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;

