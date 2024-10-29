"use client";

import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const UseAddToCartHook = () => {

  const [cartQuantity, setCartQuantity] = useState(1)

  const IncreaseQuantity = () => {

    setCartQuantity((prev) => prev < 9 ? prev + 1 : prev)

  }
  const DecreaseQuantity = () => {
    setCartQuantity((prev) => prev <= 0 ? prev - 1 : prev)

  }




  const AddtoCart = (product) => {

    const getCartData = JSON.parse(localStorage.getItem("productData")) || [];

    if (getCartData.find(({ id }) => product.id == id)) {
      console.log("sanem>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


    }
    else {
      getCartData.push(product);

      localStorage.setItem("productData", JSON.stringify(getCartData));

    }



  }

  return { AddtoCart, IncreaseQuantity, DecreaseQuantity, cartQuantity };
 
};
export default UseAddToCartHook;
