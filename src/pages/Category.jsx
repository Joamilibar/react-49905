import { useParams } from "react-router-dom"
import { useGetProductByCategory } from "../hooks/useProducts";
import ItemListContainer from "../components/ItemListContainer";

// ¿Por qué tantos espacios? XD
export const Category = () => {
    const { id } = useParams();
    const { productsData } = useGetProductByCategory(id)
    console.log("🚀 ~ file: Category.jsx:10 ~ Category ~ productsData:", productsData)
    return (<ItemListContainer productsData={productsData}/>)
}