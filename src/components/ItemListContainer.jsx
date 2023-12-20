import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { items } from '../json/datos';


// PROPS> SON AURGUMETNOS QUE SE PASAN AL COMPONENTE DESDE SU COMPONENTE PADRE

const ItemListContainer = ({ productsData }) => {
  console.log(productsData)
  return (
    
      <div className='tienda_prod'>
        {productsData.map((products) => {
          return (
            <Card key={products.id} style={{ width: '15rem' }}>
            <Link key={products.id} to={`${products.id}`}><Card.Img variant="top" src={products.imagen} /></Link>
            <Card.Body>
              <Card.Title>{products.item}</Card.Title>
              <Card.Text>
                {products.descripcion}
              </Card.Text>
              <div>{products.precio}</div>
              <Button variant="primary">Agregar</Button>
            </Card.Body>
          </Card>
          );
        })}
      </div>
    
    
    
  )
}

export default ItemListContainer;