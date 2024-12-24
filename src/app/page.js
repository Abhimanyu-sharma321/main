"use client";
import Image from "next/image";

import "react-slideshow-image/dist/styles.css";

import { useState } from "react";
import { _HOME_PRODUCT_IMAGES, LandingPageProducts } from "./productdetails";
import UseAddToCartHook from "../../Hooks/useAddtocartHook";
import UseSingleProductHook from "../../Hooks/SingleProductHok";
import HoverComponent from "../common/Cardhover";
import { Slides } from "@/common/Slider";
import Link from "next/link";
import SideCart from "@/components/sidecart/SideCart";
import Landing from "./landing/page";
import { FirstComponent } from "@/components/LandingPage/First";
import { landingImage } from "@/assets/Index";
// import IDmeButton from "@/components/idme/Idme";

export function Home() {
  const { AddtoCart, message } = UseAddToCartHook();
  const { handleClick } = UseSingleProductHook();
  const [active, setActive] = useState(null);

  const _COMMONHEADING = "text-2xl h-auto w-auto font-semibold";
  const PARAGRAPH_CLASS = " font-sans";
  const [mouseEnter, setMouseEnter] = useState(false);


  const _IDME_LINK = "https://groups.id.me/?&scopes=military,responder&client_id=8d2bd46045ef66793c589f9fc7d0a0b1&redirect_uri=https://perfectlyposh.vercel.app/idme/callback&response_type=code&type=button&source=idme_widget_old&current_url=http://localhost:3000/checking"
  console.log(window.location.pathname, "pathname")

  let pathName = window.location.pathname

  return (
    <>



      <FirstComponent />
      <Landing />

      {/* <section className="bg-black ">
        <HoverComponent />
      </section> */}
      {/* <SideCart /> */}

    </>
  );
}
export default Home;
