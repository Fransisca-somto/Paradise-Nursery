import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addedToCart, removedFromCart } from "./fernsSlice";

const Ferns = () => {
    const ferns = useSelector((state)=>state.ferns);
    const dispatch = useDispatch();

    const addFernToCart = (index) => {
        dispatch(addedToCart(index))
    }

    const removeFernFromCart = (index) => {
        if (ferns[index] !== 0) {
            dispatch(removedFromCart(index))
        }
    }
    
    return (
        <div className="ferns">
            <h1>FERN PLANTS</h1>
            <hr />
            <div className="container">
                {ferns.map((plant, index)=>(
                    <div key={index}>
                        <div style={{backgroundImage: `url(${plant.image})`}} className="img"></div>
                        <p>{plant.name}</p>
                        <p>{plant.price}</p>
                        <div>
                            <button className={plant.added_to_cart ? "remove" : "add"} onClick={()=> plant.added_to_cart ? removeFernFromCart(index) : addFernToCart(index)}>{plant.added_to_cart ? "Remove From Cart" : "Add To Cart"}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ferns