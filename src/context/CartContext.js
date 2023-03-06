import React, { useState } from "react"

export const CartContext = React.createContext()


export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

    function addToCart(id){
        console.log(`Item with id ${id} added to ther cart`);
    }

    return (
        <CartContext.Provider value={{addToCart}}>
            {children}
        </CartContext.Provider>
    )
}