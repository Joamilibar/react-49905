/**
 * React está definido pero no se está usando,
 * cuidado con esto, puede sobrecargar el componente
 * sin razón 
 */
// import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// PROPS> SON ARGUMENTOS QUE SE PASAN AL COMPONENTE DESDE SU COMPONENTE PADRE

// ¡Función de regalo!
// Consejo, este tipo de funciones tenlas en
// un archivo utils para que las puedas reutilizar
// dónde sea
const generateSlug = (title) => {
  // Reemplaza los caracteres especiales | símbolos con un espacio 
  // Corta los espacios al inicio y al final del slugging 
  // Reemplaza el espacio con guion  
  // Elimina los acentos
  title = title.replace(/[`~!@#$%^&*()_\-+=[\]{};:'"\\|/,.<>?\s]/g, ' ').toLowerCase()
  title = title.replace(/^\s+|\s+$/gm, '')
  title = title.replace(/\s+/g, '-')
  title = title.normalize('NFD').replace(/[\u0300-\u036f]/g,"")

  return title
}

// Agregar también a utils _!,,!

const currencyFormat = (num) => {
  const mapped = num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' CLP'
  const currency = mapped.split('.')
  return `${currency[0].replace(/,/g, '.')},${currency[1]}`;
}

const ItemListContainer = ({ productsData }) => {
  return (
    /**
     * La clase tienda_prod existe en los scss
     * pero ellos se están pisando con los css
     * por lo que no hacen nada, los dejé comentados
     * y no hubo cambios visibles en el front
     */
    <div className='tienda_prod'>
      {
        // product, en singular
        productsData.map((product) => {
          // Es mejor desestructurar el objeto y dejar
          // solo las propiedades que vas a utilizar
          const { id, image, item, description, price, slug } = product
          const finalSlug = slug !== '' ? slug : generateSlug(item)
          console.log("🚀 ~ file: ItemListContainer.jsx:42 ~ productsData.map ~ finalSlug:", finalSlug)
          return (
            <Card key={ id } style={{ width: '15rem' }}>
              <Link key={ id } to={`/item/${ finalSlug }`}>
                <Card.Img variant="top" src={ image } />
              </Link>
              <Card.Body>
                <Card.Title>{ item }</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>{ description }</Card.Text>
                <br />
                <Card.Subtitle className="mb-2 text-muted">Precio: { currencyFormat(price) }</Card.Subtitle>
              </Card.Body>
              <Card.Footer className="text-muted text-center">
                <Button variant="primary">Agregar</Button>
              </Card.Footer>
            </Card>
          );
        })
      }
    </div>
  )
}

export default ItemListContainer;