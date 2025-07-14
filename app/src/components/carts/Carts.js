import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { removedSucculentFromCart, incrementSucculent, decrementSucculent } from '../succulent/succulentSlice'
import { removeFoliageFromCart, increaseFoliageInCart, decreaseFoliageInCart } from '../foliage/foliageSlice'
import { removeFloweringFromCart, increaseFloweringInCart, decreaseFloweringInCart } from "../flowering/floweringSlice"
import { removedFromCart, increaseFernsInCarts, decreaseFernsInCarts} from "../ferns/fernsSlice"

const Carts = () => {
    const dispatch = useDispatch();
    const foliages = useSelector((state) => state.foliage)
    const flowerings = useSelector((state) => state.flowering)
    const succulents = useSelector((state) => state.succulent)
    const ferns = useSelector((state) => state.ferns)

    const allItems = [];
    foliages.forEach((element) => {
        allItems.push(element)
    })
    flowerings.forEach((element) => {
        allItems.push(element)
    })
    succulents.forEach((element) => {
        allItems.push(element)
    })
    ferns.forEach((element) => {
        allItems.push(element)
    })

    const itemsInCart = allItems.filter(element => element.added_to_cart === true)
    const foliageInCart = foliages.filter(element => element.added_to_cart === true)
    const succulentInCart = succulents.filter(element => element.added_to_cart === true)
    const floweringInCart = flowerings.filter(element => element.added_to_cart === true)
    const fernsInCart = ferns.filter(element => element.added_to_cart === true)

    const getTotalCost = () => {
        let total = 0
        itemsInCart.forEach(item => {
            total += item.amount * item.price;
        })
        return total
    }

    const totalCost = getTotalCost()

    const deleteItemFromCart = (type, index) => {
        let newIndex;
        if (type === "succulent") {
            newIndex = succulents.findIndex((item)=>succulentInCart[index].name === item.name)
            dispatch(removedSucculentFromCart(newIndex))
        } else if (type === "foliage") {
            newIndex = foliages.findIndex((item) => foliageInCart[index].name === item.name)
            dispatch(removeFoliageFromCart(newIndex))
        } else if (type === "flowering") {
            newIndex = flowerings.findIndex((item) => floweringInCart[index].name === item.name)
            dispatch(removeFloweringFromCart(newIndex))
        } else if (type === "ferns") {
            newIndex = ferns.findIndex((item)=>fernsInCart[index].name === item.name)
            dispatch(removedFromCart(newIndex))
        }
    }

    const increaseItemInCart = (type, index) => {
        let newIndex = 0;
        if (type==="succulent") {
            newIndex = succulents.findIndex((item)=>succulentInCart[index].name === item.name)
            dispatch(incrementSucculent(newIndex))
        }else if (type === "foliage") {
            newIndex = foliages.findIndex((item) => foliageInCart[index].name === item.name)
            dispatch(increaseFoliageInCart(newIndex))
        } else if (type === "flowering") {
            newIndex = flowerings.findIndex((item) => floweringInCart[index].name === item.name)
            dispatch(increaseFloweringInCart(newIndex))
        } else if (type === "ferns") {
            newIndex = ferns.findIndex((item)=>fernsInCart[index].name === item.name)
            dispatch(increaseFernsInCarts(newIndex))
        }
    }

    const decreaseItemFromCart = (type, index) => {
        let newIndex;
        if (type==="succulent") {
            newIndex = succulents.findIndex((item)=>succulentInCart[index].name === item.name)
            if (succulents[newIndex].amount === 1){
                dispatch(removedSucculentFromCart(newIndex))
                return
            }
            dispatch(decrementSucculent(newIndex))
        }else if (type === "foliage") {
            newIndex = foliages.findIndex((item) => foliageInCart[index].name === item.name)
            if (foliages[newIndex].amount === 1){
                dispatch(removeFoliageFromCart(newIndex))
                return
            }
            dispatch(decreaseFoliageInCart(newIndex))
        } else if (type === "flowering") {
            newIndex = flowerings.findIndex((item) => floweringInCart[index].name === item.name)
            if (flowerings[newIndex].amount === 1){
                dispatch(removeFloweringFromCart(newIndex))
            }
            dispatch(decreaseFloweringInCart(newIndex))
        } else if (type === "ferns") {
            newIndex = ferns.findIndex((item)=>fernsInCart[index].name === item.name)
            if (ferns[newIndex].amount === 1){
                dispatch(removedFromCart(newIndex))
                return
            }
            dispatch(decreaseFernsInCarts(newIndex))
        }
    }

    return (
        <div className="carts">
            <h1>Carts</h1>
            <hr />
            <div>
                <h2>Foliage Items</h2>
                <div className="contain">
                    {foliageInCart.map((element, index) => (
                        <div key={index}>
                            <div style={{ backgroundImage: `url(${element.image})` }} className="img"></div>
                            <div>
                                <p>{element.name}</p>
                                <p>{element.price}</p>
                                <div>
                                    <button onClick={()=>decreaseItemFromCart("foliage", index)} className="subtracting">-</button>
                                    <span>{element.amount}</span>
                                    <button onClick={()=>increaseItemInCart("foliage", index)}  className="adding">+</button>
                                </div>
                            <button onClick={()=>deleteItemFromCart("foliage", index)}>Delete Item</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div>
                <h2>Succulent Items</h2>
                <div className="contain">
                    {succulentInCart.map((element, index) => (
                        <div key={index}>
                            <div style={{ backgroundImage: `url(${element.image})` }} className="img"></div>
                            <div>
                                <p>{element.name}</p>
                                <p>{element.price}</p>
                                <div>
                                    <button onClick={()=>decreaseItemFromCart("succulent", index)} className="subtracting">-</button>
                                    <span>{element.amount}</span>
                                    <button onClick={()=>increaseItemInCart("succulent", index)} className="adding">+</button>
                                </div>
                                <button onClick={()=>deleteItemFromCart("succulent", index)}>Delete Item</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div>
                <h2>Flowering Items</h2>
                <div className="contain">
                    {floweringInCart.map((element, index) => (
                        <div key={index}>
                            <div style={{ backgroundImage: `url(${element.image})` }} className="img"></div>
                            <div>
                                <p>{element.name}</p>
                                <p>{element.price}</p>
                                <div>
                                    <button onClick={()=>decreaseItemFromCart("flowering", index)} className="subtracting">-</button>
                                    <span>{element.amount}</span>
                                    <button onClick={()=>increaseItemInCart("flowering", index)} className="adding">+</button>
                                </div>
                                <button onClick={()=>deleteItemFromCart("flowering", index)}>Delete Item</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div>
                <h2>Ferns Items</h2>
                <div className="contain">
                    {fernsInCart.map((element, index) => (
                        <div key={index}>
                            <div style={{ backgroundImage: `url(${element.image})` }} className="img"></div>
                            <div>
                                <p>{element.name}</p>
                                <p>{element.price}</p>
                                <div>
                                    <button onClick={()=>decreaseItemFromCart("ferns", index)} className="subtracting">-</button>
                                    <span>{element.amount}</span>
                                    <button onClick={()=>increaseItemInCart("ferns", index)} className="adding">+</button>
                                </div>
                                <button onClick={()=>deleteItemFromCart("ferns", index)}>Delete Item</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>Total Cost: {totalCost}</div>
        </div>
    )
}

export default Carts