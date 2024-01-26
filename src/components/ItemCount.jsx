import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

const ItemCount = ({ productId }) => {
    const [countItem, setCountItem] = useState(1);

    const { count, setCount } = useContext(CartContext);

    const handleAdd = () => {
        setCountItem(countItem + 1)

    }

    const handleRemove = () => {
        setCountItem(countItem - 1)
    }

    const handleAddProductToCart = () => {
        const productExists = count.find((item) => item.id === productId)


        if (productExists) {
            setCount(
                count.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + countItem }
                        : item
                )
            );
        } else {
            setCount([...count, { id: productId, quantity: countItem }]);
        }

        setCountItem(1);
    };

    return (
        <div>
            <div
                style={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "auto",
                }}
            >
                <div className="boton_tcompra">
                    <Button onClick={handleRemove}>-</Button>
                </div>
                <span>{countItem}</span>
                <div className="boton_tcompra">
                    <Button onClick={handleAdd}>+</Button>
                </div>
            </div>
            <div className="boton_contacto">
                <Button onClick={handleAddProductToCart}>Agregar al Carrito</Button>
            </div>
        </div>
    );

};

export default ItemCount;