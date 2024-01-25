import { useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';

/* 
import { items } from '../json/datos'; */


export const Index = () => {

    useEffect(() => {
        document.title = "Beds & Dreams - Home";
    })    
        const {productsData} = useGetProducts('products');        
        
        return (
            <ItemListContainer  productsData={productsData}/>
            )
        }
        


