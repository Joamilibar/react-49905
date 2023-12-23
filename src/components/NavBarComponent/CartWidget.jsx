// Si no se usa no se importa
// import React from 'react'

const CartWidget = () => {
  return (
    <div>
      {/* 
        Es mejor usar un elemento cómo un svg o una fuente externa
        https://fontawesome.com/
      */}
      {/* 🛒 */}
      <i className="fa fa-shopping-cart"></i>
      {/* 
        Es mejor usar em como unidad, en vez de pixeles, debes buscar
        siempre que sea responsive
        https://cybmeta.com/em-y-rem
       */}
      <span style={{ fontSize: '1em', marginLeft: '0.2em' }}>1</span>
    </div>
  )
}

export default CartWidget;