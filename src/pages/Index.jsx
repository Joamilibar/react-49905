import { useEffect } from 'react'
import { useGetProducts } from '../hooks/useProducts';
import ItemListContainer from '../components/ItemListContainer';
import { items } from '../json/datos';


export const Index = () => {

    useEffect(() => {
        document.title = "Beds & Dreams - Home";
    })    
        const {productsData} = useGetProducts(20);        
        
        return (
            <ItemListContainer  productsData={items}/>
            )
        }
        


