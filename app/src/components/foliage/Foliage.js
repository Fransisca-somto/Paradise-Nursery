import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addFoliageToCart, removeFoliageFromCart } from "./foliageSlice";


const Foliage = () => {
    const dispatch = useDispatch();
    const foliage = useSelector((state)=>state.foliage)

    const AddtoCart = (index) => {
        dispatch(addFoliageToCart(index))
    }

    const removeFromCart = (index) => {
        if (foliage[index].amount === 0) {
            return
        }
        dispatch(removeFoliageFromCart(index))
    }

    return (
        <div className="foliage">
            <h1>Foliage Plants</h1>
            <hr />
            <div className="container">
                {foliage.map((plant, index) => (
                    <div key={index}>
                        <div className="img" style={{backgroundImage: `url(${plant.image})`}}></div>
                        <p>{plant.name}</p>
                        <p>{plant.price}</p>
                        <div>
                            <button className={plant.added_to_cart ? "remove" : "add"} onClick={ () => plant.added_to_cart ? removeFromCart(index) : AddtoCart(index) }>{plant.added_to_cart ? "Remove from Cart" : "Add to Cart"}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Foliage