"use client"

import React, { useEffect } from 'react'
import logo from "../../assets/Logos/logo4.png";
import Image from 'next/image'
import cartLogo from "../../assets/Logos/cart.png"
import Link from 'next/link';
import UseAddToCartHook from '../../../Hooks/useAddtocartHook';
import Page from '@/app/home/page';
import Floatingnav from '../Floatingnav';
export const Header = () => {

    const same_Class = "mt-10 font-sans text-2xl  hover:border-sky-900"

    useEffect(() => {

        // const CART_PRODUCTS = JSON.parse(localStorage.getItem("products"))
        var CART_PRODUCTS = JSON.parse(localStorage.getItem('cartProducts'));
        console.log(CART_PRODUCTS, "cartProducts")
    })
    return (
        <>
            {/* <div className={`${location.pathname === "/" ? "bg-black text-white" : "bg-black"}`}>
                <Floatingnav />
            </div> */}
            <div className="bg-black text-white  rounded-sm shadow shadow-slate-800" >
                <header className="ml-16 ">

                    <nav className="flex gap-72 ">

                        <Image src={logo} alt="logo" width={200} height={400} />

                        <div className={`${same_Class}`}>
                            <Link href={"/allproductpage"}>Shop</Link>

                        </div>
                        <div className={`${same_Class}`}>cart</div>
                        <div className={`${same_Class}`}>SignUp</div>
                        <div className={`${same_Class}`}>login</div>


                    </nav>



                </header>


            </div>
        </>
    )
}
