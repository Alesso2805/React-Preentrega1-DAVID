import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState([]); // Estado para los elementos en el carrito

    return (
        <>
            <BrowserRouter>
                <NavBar cartItemCount={cartItems.length} /> {/* Pasar la cantidad de elementos en el carrito al componente NavBar */}
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route
                        path="/item/:productId"
                        element={<ItemDetailContainer cartItems={cartItems} setCartItems={setCartItems} />} // Pasar el estado del carrito al componente ItemDetailContainer
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
