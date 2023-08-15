import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail.js";
const { products } = require('../utils/products');

const ItemDetailContainer = ({ cartItems, setCartItems }) => {
    const [data, setData] = useState({});

    const { productId } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(productId)))
            .then(result => {
                console.log('Fetched item:', result);
                setData(result);
            })
            .catch(err => console.log(err));
    }, [productId]);

    const addToCart = () => {
        console.log('Añadir al carrito clicked');
        setCartItems([...cartItems, data]);
    };


    return (
        <div className="item-detail-container">
            <ItemDetail item={data} addToCart={addToCart} /> {/* Pasar la función addToCart al componente ItemDetail */}
        </div>
    );
};

export default ItemDetailContainer;