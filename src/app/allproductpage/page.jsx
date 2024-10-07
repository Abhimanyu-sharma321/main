"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import product1 from "../../assets/ProductImages/image.png";
import product2 from "../../assets/ProductImages/product2.png";
import product3 from "../../assets/ProductImages/image.png";
import { apple_Video } from "@/videosUrl";
import mackbook from "../../assets/ProductImages/mackBook.png";
import { _Home_Page_Products } from '../productdetails';
import UseAddToCartHook from "../../../Hooks/useAddtocartHook";
import Page from "../home/page";
const Allproductpage = () => {
    const { AddtoCart } = UseAddToCartHook();
    const [action, setAction] = useState("apple")
    const [active, setActive] = useState(null)
    const _COMMONHEADING = "text-2xl h-auto w-auto font-semibold"
    const PARAGRAPH_CLASS = " font-sans"
    const NEW_IMAGE_URL = product3



    return (
        <>


            {/* <section className="w-full h-full flex">

                <div className="w-full h-full border border-black gap-40 flex">
                    <div>Z-A</div>
                    <div>A-Z</div>
                </div>
                <div className="w-1/2 h-40 mt-10 ml-80 items-center flex">

                    <input type="text" placeholder="Enter Here For Search" className="w-[1000px] ml-[300px] h-16  border mt-10 border-black text-center" />
                    <button className=" ml-16 border border-black w-96 h-10 mt-10  bg-black text-white font-bold hover:placeholder:text-blue-800 ">Search</button>


                </div>


            </section> */}

            <section className="w-full h-full  ">
                <div className="w-full h-full  grid grid-cols-3 p-32 ">

                    {
                        _Home_Page_Products.map((product) => (

                            <figure className="p-20 ">
                                <Image src={!active ? product?.image : product.hoverImage} alt="mackbook" className="bg-black hover:scale-100" />
                                <div className="ml-10">
                                    <Image src={product.brandlogo} alt="apple logo" width={50} height={50} />
                                </div>

                                <div className="p-10">
                                    <h2 className={`${_COMMONHEADING}`} >{product.title}</h2>

                                    <h1 className={`${PARAGRAPH_CLASS} mt-10`}>{product.description}</h1>
                                    <p className={`${PARAGRAPH_CLASS} mt-10`}>{product.price}</p>
                                    <p>{product.belowtext}</p>
                                    <h1 className={`${PARAGRAPH_CLASS}  `}>{product.details}</h1>
                                    <a href="">
                                        <h1 className={`${PARAGRAPH_CLASS} mt-10`}>{product.offeroncard}</h1>
                                    </a>

                                    <i className={`${PARAGRAPH_CLASS} mt-10`}>{product.suggetion}</i>
                                </div>

                                <div>

                                    <button className="w-full h-16 bg-sky-800 text-white font-bold hover:bg-white hover:text-black hover:border border-black rounded-sm" onClick={() => AddtoCart(product)}>{product.buttontext}</button>
                                </div>
                            </figure>
                        ))
                    }
                </div>

            </section>
        </>
    )
}

export default Allproductpage