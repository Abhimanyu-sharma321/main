"use client";
import { _ACCESSORIES, _HOME_PRODUCT_IMAGES } from "@/app/productdetails";
import Image from "next/image";

const Acceessories = () => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-3 p-32 shadow-2xl shadow-slate-800 gap-28  ">
        {_ACCESSORIES.map((item) => (
          <>
          <figure className="p-10 shadow-2xl shadow-slate-800 text-center  grid grid-cols-1 w-full">
          <div className="w-1/2 h-auto  grid grid-cols-1">
            <Image src={item.image} className="border border-black"   />
            <i>{item.id}</i>
          </div>

          </figure>
          
          </>
        ))}
      </div>
    </>
  );
};

export default Acceessories;
