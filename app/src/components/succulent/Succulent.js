import { addedSucculentToCart, removedSucculentFromCart } from "./succulentSlice";
import { useDispatch, useSelector } from "react-redux";

const Succulents = () => {
    const dispatch =  useDispatch();
    const succulents = useSelector((state)=>state.succulent);

    const addSucculentToCarts = (index)=> {
        dispatch(addedSucculentToCart(index));  
    }

    const removeSucculentFromCarts = (index) => {
        if (succulents[index].amount !== 0) {
            dispatch(removedSucculentFromCart(index))
        }
    }

    return (
        <div className="succulent">
            <h1>SUCCULENT PLANTS</h1>
            <hr />
            <div className="container">
                {succulents.map((plant, index)=> (
                    <div key={index}>
                        <div style={{backgroundImage: `url(${plant.image})`}} className="img"></div>
                        <p>{plant.name}</p>
                        <p>{plant.price}</p>
                        <div>
                            <button className={plant.added_to_cart ? "remove" : "add"} onClick={()=> plant.added_to_cart ? removeSucculentFromCarts(index): addSucculentToCarts(index)}>{plant.added_to_cart ? "Remove from Cart": "Add to Cart"}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Succulents