import Card from "react-bootstrap/Card";
import { Button /*, CardImg NO SE ESTÁ USANDO */ } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetProductBySlug } from "../hooks/useProducts";

// Función sencilla para darle formato a la moneda (CLP)
const currencyFormat = (num) => {
    const mapped = num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' CLP'
    const currency = mapped.split('.')
    return `${currency[0].replace(/,/g, '.')},${currency[1]}`;
}

export const ItemDetailContainer = () => {

    const { id } = useParams();
    const { productData } = useGetProductBySlug(id);

    if(Object.keys(productData).length === 0) {
        return (<div></div>)
    }
    const { item, description, price, image } = productData

    return (
        <div className='tienda_prod'>
            <Card key={ productData.id } style={{ width: "16rem", margin: 10 }}>
                <Card.Img variant="top" src={ image } />
                <Card.Body>
                    <Card.Title>{ item }</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>{ description }</Card.Text>
                    <br />
                    {/* ¿Un poco de estilo al precio? */}
                    {/* <div>{ price }</div> */}
                    {/* El precio es ideal darle formato, a todos los valores en monedas, o numéricos */}
                    <Card.Subtitle className="mb-2 text-muted">Precio: { currencyFormat(price) }</Card.Subtitle>
                </Card.Body>
                <Card.Footer className="text-muted text-center">
                    <Button variant="primary">Agregar</Button>
                </Card.Footer>
            </Card>
        </div>
    );

};



