import { useState, useEffect } from "react";/* 
import { getProductById, getProductByCategory } from "../services"; */
import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";
import { getProductByCategory } from "../services";


export const useGetProducts = (collectionName = 'products') => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, collectionName);

        getDocs(productsCollection).then((snapshot) => {
            setProductsData(
                snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            )

        })
    }, [])

    return { productsData, loading, error }

}

export const useGetProductById = (collectionName = 'products', id) => {
    const [productData, setProductData] = useState([null]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const db = getFirestore();

        const docRef = doc(db, collectionName, id)

        getDoc(docRef).then((doc) => {
            setProductData({ id: doc.id, ...doc.data() })
        })

    }, [id]);

    return { productData, loading, error }
}

export const useGetCategories = (collectionName = 'categories') => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const categoriesCollection = collection(db, collectionName);

        getDocs(categoriesCollection).then((snapshot) => {
            const categories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setCategories(categories[0].categories)
        });

    }, [collectionName]);

    return { categories, loading, error }
}

export const useGetProductByCategory = (category) => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProductByCategory(category)
            .then((response) => {
                setProductsData(response)
            })
            .catch((error) => {
                (error);
                setError(error);
                setLoading(false);
            });
    }, [category]);

    return { productsData, loading, error }
}

export const formatoNumero = (number) => 
    new Intl.NumberFormat("ch-CL").format(number)