import { useState, useEffect } from "react";
import { getProducts, getProductById, getProductBySlug, getProductByCategory } from "../services";

export const useGetProducts = (limit) => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts(limit)
            .then((response) => {
                setProductsData(response)
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                setLoading(false);
            });
    }, [limit]);

    return { productsData, loading, error }
}

export const useGetProductById = (id) => {
    const [productData, setProductData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then((response) => {
                setProductData(response)
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                setLoading(false);
            });
    }, [id]);

    return { productData, loading, error }
}

export const useGetProductBySlug = (slug) => {
    const [productData, setProductData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProductBySlug(slug)
            .then((response) => {
                setProductData(response)
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                setLoading(false);
            });
    }, [slug]);

    return { productData, loading, error }
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
                console.log(error);
                setError(error);
                setLoading(false);
            });
    }, [category]);

    return { productsData, loading, error }
}