"use client";

import React, { useEffect, useState } from "react";
import logo from "../../assets/Logos/logo4.png";
import Image from "next/image";
import cartLogo from "../../assets/Logos/cart.png";
import Link from "next/link";
import UseAddToCartHook from "../../../Hooks/useAddtocartHook";
import Page from "@/app/home/page";
import Floatingnav from "../Floatingnav";
export const Header = () => {
  const same_Class = "mt-10 font-sans text-2xl  hover:border-sky-900";
  const [cartLength, setLength] = useState([])
  // useEffect(() => {
  let cartlength = JSON.parse(localStorage.getItem("productData"))
  console.log(cartlength, "cartlength>>>>>>>>>>>>>>>>>")
  //   setLength(cartLength)
  //   console.log(cartLength.length, "length")
  // });
  return (
    <>
      {/* <div className={`${location.pathname === "/" ? "bg-black text-white" : "bg-black"}`}>
                <Floatingnav />
            </div> */}
      <div className="bg-black text-white  rounded-sm shadow shadow-slate-800 ">
        <header className="ml-16 ">
          <nav className="flex gap-72 ">
            <Link href={"/"}>
              <Image src={logo} alt="logosss" width={200} height={400} />
            </Link>

            <div className={`${same_Class}`}>
              <Link href={"/allproductpage"}>Shop</Link>
            </div>
            <Link href={"/cart"}>
              <div className={`${same_Class}`}>cart({cartLength?.length})</div>
            </Link>

            <div className={`${same_Class}`}>SignUp</div>

            <div className={`${same_Class}`}>login</div>
          </nav>
        </header>
      </div>
    </>
  );
};
