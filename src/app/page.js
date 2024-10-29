"use client";
import Image from "next/image";

import "react-slideshow-image/dist/styles.css";

import { useState } from "react";
import { _HOME_PRODUCT_IMAGES } from "./productdetails";
import UseAddToCartHook from "../../Hooks/useAddtocartHook";
import UseSingleProductHook from "../../Hooks/SingleProductHok";
import HoverComponent from "../common/Cardhover";
import { Slides } from "@/common/Slider";
import Link from "next/link";
// import IDmeButton from "@/components/idme/Idme";

export function Home() {
  const { AddtoCart, message } = UseAddToCartHook();
  const { handleClick } = UseSingleProductHook();
  const [active, setActive] = useState(null);

  const _COMMONHEADING = "text-2xl h-auto w-auto font-semibold";
  const PARAGRAPH_CLASS = " font-sans";
  const [mouseEnter, setMouseEnter] = useState(false);


  const _IDME_LINK = "https://groups.id.me/?&scopes=military,responder&client_id=8d2bd46045ef66793c589f9fc7d0a0b1&redirect_uri=https://perfectlyposh.vercel.app/idme/callback&response_type=code&type=button&source=idme_widget_old&current_url=http://localhost:3000/checking"

  return (
    <>
      <section>
        <Slides />
      </section>
      <section className="w-full   h-full">
        <div
          className="w-full  grid grid-cols-3 p-32  gap-32 border border-black text-center    text-ellipsis overflow-hidden bg-sky-100 "


        >
          {_HOME_PRODUCT_IMAGES.map((product) => (
            <>
              <div

                className="w-full h-auto  bg-sky-50 "
                key={product?.id}
                onClick={() => handleClick(product)}
              >
                <Image
                  src={product?.image}
                  className=" hover:scale-100 w-full h-[900px] max-h-60 max-w-96 object-contain "
                />
                <div className="mt-8">
                  <h2 className={`${_COMMONHEADING}`}>
                    {mouseEnter ? product.name : null}
                  </h2>
                  <p className={`${PARAGRAPH_CLASS}`}>
                    {product.purchace_count}K+ bought in last month
                  </p>

                  <p className={`${PARAGRAPH_CLASS} mt-10`}>
                    <i>Previous_Price</i> {product.previous_Price}
                  </p>
                  <p className={`${PARAGRAPH_CLASS} mt-10`}>
                    Today_Price:-{product.price}
                  </p>
                </div>
                <button
                  className="grayscale-0  mt-5 w-52 h-16 bg-sky-800 text-white font-bold hover:bg-white hover:text-black hover:border border-black rounded-sm"
                  onClick={() => AddtoCart(product)}
                >
                  {product.title}
                </button>


                <div className="w-full h-full ">

                  <a href={

                    _IDME_LINK
                  } className="w-full h-full border border-black bg-sky-300 font-bold text-white rounded-s-md ">

                    <button className="w-[300px] h-96">Click  here to verify </button>
                  </a>
                </div>


                <h6 className="mt-10">
                  Extra 20% Off  For Army Officer
                </h6>



              </div >
            </>
          ))
          }
        </div>
      </section >

      <section className="bg-black ">
        <HoverComponent />
      </section>

      <section>{message === true ? <div>helllo</div> : null}</section>
    </>
  );
}
export default Home;
