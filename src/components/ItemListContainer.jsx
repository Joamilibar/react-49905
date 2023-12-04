import React from 'react'

// PROPS> SON AURGUMETNOS QUE SE PASAN AL COMPONENTE DESDE SU COMPONENTE PADRE

const ItemListContainer = ({greeting, empresa}) => {
  return (
    <div className='titulo_pd'>{greeting} {empresa}</div>
  )
}

export default ItemListContainer