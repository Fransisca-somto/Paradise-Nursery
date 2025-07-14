import React from "react";
import { addFloweringToCart, removeFloweringFromCart } from "./floweringSlice";
import { useDispatch, useSelector } from "react-redux";

const Flowering = () => {
    const dispatch = useDispatch()
    const flowering = useSelector((state) => state.flowering)

    const addFlowerToCarts = (index) => {
        dispatch(addFloweringToCart(index))
    }

    const removerFlowerFromCarts = (index) => {
        if (flowering[index].amount === 0) {
            return
        }
        dispatch(removeFloweringFromCart(index));
    }

    return(
        <div className="flowering">
            <h1>FLOWERING PLANTS</h1>
            <hr />
            <div className="container">
                {flowering.map((plant, index) => (
                    <div key={index}>
                        <div style={{backgroundImage: `url(${plant.image})`}} className="img"></div>
                        <p>{plant.name}</p>
                        <p>{plant.price}</p>
                        <div>
                            <button className={plant.added_to_cart ? "remove" : "add"} onClick={()=> plant.added_to_cart ? removerFlowerFromCarts(index) : addFlowerToCarts(index)}>{plant.added_to_cart ? "Remove from Cart": "Added to Cart"}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Flowering