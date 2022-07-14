import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MenuPage from "./MenuPage/MenuPage";
import CartPage from "./CartPage/CartPage";

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </BrowserRouter>
    ); 
}

export default App;