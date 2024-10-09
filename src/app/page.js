"use client";
import Image from "next/image";
import bannerImage from "../assets/ProductImages/iphone.jpg";
import shoes from "../assets/ProductImages/shoes1.jpg";
import HoverComponent from "@/common/Cardhover";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slide1 from "../assets/sliderImages/firstSlide.png";
import slide2 from "../assets/sliderImages/secondslide.png";
import slide3 from "../assets/sliderImages/thirdslide.png";
import { Section } from "lucide-react";
import { Slides } from "@/common/Slider";
import { useState } from "react";
import { _HOME_PRODUCT_IMAGES } from "./productdetails";
import UseAddToCartHook from "../../Hooks/useAddtocartHook";
import UseSingleProductHook from "../../Hooks/SingleProductHok";
export function Home() {
  const { AddtoCart, message } = UseAddToCartHook();
  const { handleClick } = UseSingleProductHook();
  const [active, setActive] = useState(null);
  const _COMMONHEADING = "text-2xl h-auto w-auto font-semibold";
  const PARAGRAPH_CLASS = " font-sans";

  return (
    <>
      <section>
        <Slides />
      </section>
      <section className="w-full h-full  ">
        <div className=" w-full h-full     ">
          {_HOME_PRODUCT_IMAGES.map((product) => (
            <>
              <div className="flex">
                <figure
                  className="w-full  h-full grid grid-cols-3 p-32 gap-32 border border-black text-center "
                  key={product?.id}
                  onClick={() => handleClick(product)}
                >
                  <Image
                    src={product?.image}
                    className="bg-white hover:scale-100 w-full h-full max-h-60 max-w-96 object-contain"
                  />
                  <div className="mt-8">
                    <h2 className={`${_COMMONHEADING}`}>{product.name}</h2>
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
                </figure>
                <footer>
                  <button
                    className="mt-5 w-52 h-16 bg-sky-800 text-white font-bold hover:bg-white hover:text-black hover:border border-black rounded-sm"
                    onClick={() => AddtoCart(product)}
                  >
                    {product.title}
                  </button>
                </footer>
              </div>
            </>
          ))}
        </div>
      </section>
      <section className="bg-black ">
        <HoverComponent />
      </section>

      <section>{message === true ? <div>helllo</div> : null}</section>
    </>
  );
}
export default Home;
