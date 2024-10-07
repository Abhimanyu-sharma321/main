"use client";

import { useState } from "react";

const UseAddToCartHook = () => {

    const [cartData, setCartData] = useState("")    
    const [cartQuantity, setCartQuantity] = useState("")
    let cartDatas;
    const AddtoCart = (product) => {



        localStorage.setItem("productData", JSON.stringify(product));

        setCartData(

            JSON.parse(localStorage.getItem("productData"))
        )

        console.log(cartData, " cartData        ")
    }
    return { AddtoCart, cartData }
}
export default UseAddToCartHook;