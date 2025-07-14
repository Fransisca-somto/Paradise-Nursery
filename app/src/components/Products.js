import React, { useState } from "react"
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux"
import bgImage from "../assets/grocery-store.png"
import Carts from "./carts/Carts"

const Products = () => {
    const [showPopUp, setShowPopUp] = useState(false)
    const foliages = useSelector((state) => state.foliage)
    const flowerings = useSelector((state) => state.flowering)
    const succulents = useSelector((state) => state.succulent)
    const ferns = useSelector((state) => state.ferns)
    const allFlowers = [];
    foliages.forEach((element) => {
        allFlowers.push(element)
    });
    flowerings.forEach((element) => {
        allFlowers.push(element)
    });
    succulents.forEach((element) => {
        allFlowers.push(element)
    });
    ferns.forEach((element) => {
        allFlowers.push(element)
    });

    const getTotalCost = () => {
        let total = 0
        allFlowers.forEach((element) => {
            if (element.added_to_cart) {
                total += element.amount;
            }
        })
        return total
    }

    const handlePopUp = () => {
        setShowPopUp(!showPopUp)
    }

    const TotalCost = getTotalCost();

    return(<div className="products">
        <nav>
            <ul onClick={()=>setShowPopUp(false)}>
                <li><Link to="/products/foliage">Foliage Plants</Link></li>
                <li><Link to="/products/flowering">Flowering Plants</Link></li>
                <li><Link to="/products/succulent">Succulents</Link></li>
                <li><Link to="/products/ferns">Ferns</Link></li>
                <li><Link to="/products/carts">Carts</Link></li>
            </ul>
            <div onClick={()=>handlePopUp()} style={{backgroundImage: `url(${bgImage})`}} className="add-to-cart-btn">
                <span>{TotalCost}</span>
            </div>
        </nav>
        <div onClick={()=>setShowPopUp(false)}>
            <Outlet />
        </div>
        <div style={{display: showPopUp ? 'block' : 'none'}} className="popup">
            <Carts />
        </div>
    </div>)
}

export default Products