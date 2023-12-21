import { useParams } from "react-router-dom"
import { useGetProductByCategory } from "../hooks/useProducts";
import ItemListContainer from "../components/ItemListContainer";




export const Category = () => {

    const { id } = useParams();
    const { productsData } = useGetProductByCategory()

    return (
        <ItemListContainer productsData={productsData}/>
    )
}