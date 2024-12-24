"use client";

import React, { useEffect, useState } from "react";
import logo from "../../assets/Logos/logo4.png";
import Image from "next/image";
import cartLogo from "../../assets/Logos/cart.png";
import Link from "next/link";
import UseAddToCartHook from "../../../Hooks/useAddtocartHook";
import Page from "@/app/home/page";
import Floatingnav from "../Floatingnav";
import _ from "lodash";
export const Header = () => {
  const same_Class = "mt-10 font-sans text-2xl  hover:border-sky-900";
  const [cartLength, setLength] = useState([])
  let getCartData = JSON.parse(localStorage.getItem("productData"))

  let product_Quantity = _.size(getCartData)

  // useEffect(() => {
  let cartlength = JSON.parse(localStorage.getItem("productData"))
  console.log(getCartData, "cartlength>>>>>>>>>>>>>>>>>")
  //   setLength(cartLength)
  //   console.log(cartLength.length, "length")
  // });
  return (
    <>

      <div className="flex bg-[#8cc0e9] text-white  rounded-sm shadow shadow-slate-800 gap-80 h-[100px] p-7 cursor-pointer font-semibold">

        <div>
          <Link href={"/"}>
            Home
          </Link>

        </div>

        <Link href={"/about"}>
          About Us
        </Link>

        <Link href={"/cart"}>
          Cart
        </Link>
        <div>MyProfile </div>

      </div >
    </>
  );
};
