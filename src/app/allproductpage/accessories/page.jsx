"use client";
import { _ACCESSORIES, _HOME_PRODUCT_IMAGES } from "@/app/productdetails";
import Image from "next/image";
import { useState } from "react";
const Acceessories = () => {
  const [mouseOver, setMouseOver] = useState(false)
  return (
    <>
      <div className="w-full h-full border  text-center ">
        <h2 className="font-bold text-2xl text-blue-900 hover:text-white hover:bg-blue-900">Accessories</h2>

        <div className="w-full h-full grid grid-cols-3 mt-10 ml-10">
          {
            _ACCESSORIES.map((products) => (
              <div className="w-[400px] p-10 border border-black rounded-[70px] overflow-hidden bg-white font-mono  font-bold  text-blue-200 shadow-md shadow-slate-700 hover:text-blue-900  mb-10" onMouseOver={(e) => console.log(e.bubbles, "khuih")} onMouseLeave={() => setMouseOver(false)}>
                <div className="p-10">
                  <Image src={products.image} width={200} height={300}></Image>
                </div>
                <h2>{products.name}</h2>
                <h2>PREVIOUS-PRICE:{products.previous_Price}</h2>
                <h2>current-price{products.price}</h2>
                <h2>{products.purchace_count} people purchased last month </h2>
                {
                  mouseOver ? (
                    <button className="  mt-10 h-16 bg-sky-700 mr-10 text-white hover:text-black round-[20px] hover:bg-white hover:border border-black w-44"  >{products.title}</button>
                  ) : (
                    null

                  )
                }
              </div>
            ))
          }

        </div>
      </div >
    </>
  );
};

export default Acceessories;
