import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style.css'
const Home = lazy(()=>import("../src/components/Homepage"))
const Products = lazy(()=>import("../src/components/Products"))
const Foliage = lazy(()=>import("../src/components/foliage/Foliage"))
const Flowering = lazy(()=>import("../src/components/flowering/Flowering"))
const Succulents = lazy(()=>import("../src/components/succulent/Succulent"))
const Ferns = lazy(()=>import("../src/components/ferns/Ferns"))
const Carts = lazy(()=>import("../src/components/carts/Carts"))

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
