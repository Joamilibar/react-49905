import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getDoc, doc, getFirestore, where, collection, query, getDocs } from "firebase/firestore";
import { formatoNumero } from "../hooks/useProducts";


export const Cart = () => {
  const [products, setProducts] = useState([]);
  const { count = [] } = useContext(CartContext);
  const [loading, setLoading] = useState(true)
  console.log(count)

  const cartTotal = products.reduce((total, product) => {
    const quantity = count.find((item) => item.id === product.id).quantity;
    return total + product.precio * quantity;
  }, 0);

  const idList = count.map((item) => item.id);
  console.log(idList)


  useEffect(() => {
    const db = getFirestore();
    const tempProducts = [];

    Promise.all(idList.map((id) => getDoc(doc(db, "products", id)))).then((docs) => {
      docs.forEach((doc) => {
        if (doc.exists()) {
          tempProducts.push({ id: doc.id, ...doc.data() });
        }
      });

      setProducts(tempProducts);
      setLoading(false);
    })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [count]);

  /* useEffect(() => {
    const db = getFirestore();
    const tempProducts = [];

    for (let i = 0; i < idList.length; i++) {
      const docRef = doc(db, "products", idList[i]);
      getDoc(docRef).then((doc) => {
        setProducts((prevState) => [
          ...prevState,
          { id: doc.id, ...doc.data() },
        ]);
      });
    }
    console.log(count)
  }, [count]); */

  /*  useEffect(() => {
     const db = getFirestore();
     const  itemCollection = collection(db, "products");
     const q = query(itemCollection, where("id", "in", idList)) ;

     getDocs(q).then((snapshot) => {
       if (snapshot.empty) {
         console.log("No hay resultados");
       } else {
         
         setProducts(snapshot.docs.map(doc => ({
           id: doc.id, ...doc.data().index
         })))
         console.log(snapshot.docs.map(doc => ({ id: doc.id, ... doc.data()})))
       }
     })
     .catch(error => {
       console.error("Error Fetching documents JJIR");
     });
   }, [count]); */


  return count.length === 0 ? (<h1>No hay productos en el carrito</h1>) : (

    <div className="cuerpo_tienda container">
      {products.map((product) => (
        <div key={product.id} className="carritoTienda">
          <p>{product.item}</p>
          <p>Cantidad: {count.find((item) => item.id === product.id).quantity} </p>
          <p>Precio Unitario: {formatoNumero(product.precio)} </p>
          <p>Total: {formatoNumero(product.precio * count.find((item) => item.id === product.id).quantity)}</p>
        </div>

      ))}
      <div className="titulosCarrito">
        <p>Total Compra: {formatoNumero(cartTotal)}</p>
      </div>
    </div>
  );


};