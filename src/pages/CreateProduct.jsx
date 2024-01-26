import { collection, getFirestore, addDoc } from 'firebase/firestore';
import { useState } from 'react'
import { useGetCategories } from '../hooks/useProducts';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';


const CreateProduct = () => {
    const [item, setItem] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const [stock, setStock] = useState(0);
    const [precio, setPrecio] = useState(0);
    const { categories } = useGetCategories();

    const handleFieldReset = () => {
        setItem("");
        setDescripcion("");
        setImagen("");
        setCategoria("");
        setStock(0);
        setPrecio(0);
    }

    const handleCreateProduct = () => {
        const data = {
            item,
            descripcion,
            imagen,
            categoria,
            stock,
            precio,
        }
        const db = getFirestore();

        const productsCollection = collection(db, 'products');
        addDoc(productsCollection, data).then(({ id }) => { console.log(id) })
        alert('Producto creado');
        handleFieldReset();

    }

    return (

        <Form>




            <div className='cuerpo_tienda container'>
                <h1>Crear Nuevo Producto</h1>
                <div className='container'>
                    <Form>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Producto</Form.Label>
                            <Form.Control placeholder="Nombre del Producto" value={item} onChange={(e) => setItem(e.target.value)} />

                        </Form.Group>

                        {/* <div>
                    <input type="text" placeholder='item' value={item} onChange={(e) => setItem(e.target.value)} />
                </div> */}

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />

                        </Form.Group>

                        {/* <div>
                    <input type="text" placeholder='Desccripción' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </div> */}

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type='text' placeholder='Enlace de la Imagen' value={imagen} onChange={(e) => setImagen(e.target.value)} />
                        </Form.Group>
                        {/* <div>
                            <input type="text" placeholder='Imagen' value={imagen} onChange={(e) => setImagen(e.target.value)} />
                        </div> */}

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Categorías</Form.Label>
                            <Form.Select defaultValue="Selecionar Categoría..." onChange={(e) => setCategoria(e.target.value)}>
                                <option>Categorias...</option>
                                {categories.map((categoria, index) => (
                                    <option key={index} value={categoria}>
                                        {categoria}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        {/*  <select onChange={(e) => setCategoria(e.target.value)}>
                                {categories.map((categoria, index) => (
                                    <option key={index} value={categoria}>
                                        {categoria}
                                    </option>
                                ))}
                            </select> */}



                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type='number' placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />

                        </Form.Group>

                        {/* <div>
                            <input type="text" placeholder='Stock' value={stock} onChange={(e) => setStock(e.target.value)} />
                        </div> */}

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type='number' placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                        </Form.Group>

                        {/* <div>
                            <input type="text" placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                        </div> */}

                    </Form>
                </div>

                <div className='boton_contacto'>
                    <Button onClick={handleCreateProduct}>
                        Crear Producto
                    </Button>
                </div>

                {/* <div>
                    <button onClick={handleCreateProduct}>Crear Producto</button>
                </div> */}
            </div>
        </Form>
    )
}

export default CreateProduct