"use client";

import { logo } from "@/assets/Index";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const UseAddToCartHook = () => {
  const [cartData, setCartData] = useState();
  const [cartQuantity, setCartQuantity] = useState();
  const [message, setMessage] = useState(null);
  const AddtoCart = (product) => {
    localStorage.setItem("productData", JSON.stringify(product));
    // console.log(cartData,"cartData hokkkk",cartQuantity?.length,"length>>>>>>>>>")

    return (
      <div className="mb-[900px]">
        {Swal.fire({
          text: product.name,
          timer: 3000,
          quantity: 1,  
          title: "item Added To Cart",
          toast: true,
          // animation:true,
          customClass: "ml-[900px] mb-[1000px] w-96 h-32",
          denyButtonText: "See  Cart"
          // html:<Image src={product?.image} alt="productImage"/>

        })}
      </div>
    );

  };
  return { AddtoCart, cartData, setCartData, setCartQuantity, message };
};
export default UseAddToCartHook;
