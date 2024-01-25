import Card from "react-bootstrap/Card";
import { Button, CardImg } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../hooks/useProducts";
import ItemCount from "../components/ItemCount";


export const ItemDetailContainer = () => {

    const { id } = useParams();

    const { productData } = useGetProductById("products", id);

    return (
        <div className='tienda_prod'>
            <Card key={productData.id} style={{ width: "16rem", margin: 10 }}>
                <Card.Img variant="top" src={productData.imagen} />
                <Card.Body>
                    <Card.Title>{productData.item}</Card.Title>
                    <Card.Text>{productData.descripcion}</Card.Text>
                        
                    <div>{productData.precio}</div>
                    <ItemCount productId={productData.id} />
                    {/* 
                    <Button variant="primary">Agregar</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
};



