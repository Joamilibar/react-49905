import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getDoc, doc, getFirestore, where, collection, query, getDocs } from "firebase/firestore";


export const Cart = () => {
    const [products, setProducts] = useState([]);
    const { count } = useContext(CartContext);
    const [loading, setLoading] = useState(true)
    console.log(count)


    const idList = count.map((item) => item.id);
    console.log(idList)
  
    useEffect(() => {
      const db = getFirestore();
      for (let i = 0; i < idList.length; i++) {
        const docRef = doc(db, "products", idList[i]);
        getDoc(docRef).then((doc) => {
          setProducts((prevState) => [
            ...prevState,
            { id: doc.id, ...doc.data() },
          ]);
        });
      }
    }, [count]);

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

    return count.length === 0 ? ( <h1>No hay productos en el carrito</h1> ) : (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.item}</p>
            <p>Cantidad: {count.find((item) => item.id === product.id).quantity} </p>
            <p>Precio Unitario: {product.precio} </p>
            <p>Total: {product.precio * count.find((item) => item.id === product.id).quantity}</p>
            </div>
        ))}
      </div>
    );

    
  };