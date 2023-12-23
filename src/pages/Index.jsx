import { useEffect } from 'react'
// import { useGetProducts } from '../hooks/useProducts';
import ItemListContainer from '../components/ItemListContainer';
import { items } from '../json/datos';


export const Index = () => {
    useEffect(() => {
        document.title = "Beds & Dreams - Home";
    })
    // Está declarado pero no se está usando
    // const {productsData} = useGetProducts(20);   
    // Recuerda respetar las tabulaciones, lo recomendable es
    // configurar el VSCode para que todos los archivos tengan
    // 4 espacios en lugar de tabs (o viceversa) y la misma tabulación
    // También puedes configurar el proyecto para eso
    // https://blog.pleets.org/article/es/configuraciones-de-visual-studio-code-esenciales
    return (<ItemListContainer  productsData={items}/>)
}
        


