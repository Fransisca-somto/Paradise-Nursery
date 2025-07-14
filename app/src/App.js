import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Homepage"
import Products from "./components/Products"
import Foliage from "./components/foliage/Foliage"
import Flowering from "./components/flowering/Flowering"
import Succulents from "./components/succulent/Succulent";
import Ferns from "./components/ferns/Ferns";
import Carts from "./components/carts/Carts";
import './style.css'

const App = () => {
    return (
        <Router>
            <Routes path="/">
                <Route index element={ <Home />} />
                <Route path="products" element={<Products />}>
                    <Route path="foliage" element={<Foliage />}/>
                    <Route path="flowering" element={<Flowering />} />
                    <Route path="succulent" element={<Succulents />} />
                    <Route path="ferns" element={<Ferns />} />
                    <Route path="carts" element={<Carts/>} />
                </Route>
                <Route path="*" element={<h1>404 Page not found</h1>} />
            </Routes>
        </Router>
    )
}

export default App
