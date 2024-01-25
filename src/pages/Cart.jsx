import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getDoc, doc, getFirestore, where, collection, query, getDocs } from "firebase/firestore";


export const Cart = () => {
    const [products, setProducts] = useState([]);
    const { count = []} = useContext(CartContext);
    const [loading, setLoading] = useState(true)
    console.log(count)


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
    


    return count.length === 0 ? ( <h1>No hay productos en el carrito</h1> ) : (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.item}</p>
            <p>Cantidad: {count.find((item) => item.id === product.id).quantity} </p>
            <p>Precio Unitario: {product.precio} </p>
            <p>Total: {product.precio * count.find((item) => item.id === product.id).quantity}</p>
            <div>

            </div>
            </div>
        ))}
      </div>
    );

    
  };