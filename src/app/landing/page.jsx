"use client";

import Image from "next/image";
import { LandingPageProducts } from "../productdetails";
import Link from "next/link";
import { banner2, image, logo1, logo2, logo3, logo4, logo5 } from "@/assets/Index";
import { Video } from "lucide-react";
import UseSingleProductHook from "../../../Hooks/SingleProductHok";

const Landing = () => {

    const { handleClick } = UseSingleProductHook();


    const logos = [logo1, logo2, logo3, logo4, logo5]



    return (
        <>
            <section>
                <div>
                    <iframe src="//westernrise.com/cdn/shop/videos/c/vp/91ad1e69ace34a17832e4303be298a38/91ad1e69ace34a17832e4303be298a38.HD-1080p-2.5Mbps-29000830.mp4?v=0" className="w-[1600px] h-[900px] ml-36"></iframe>

                </div>
            </section>


            <section className=" container mt-28" >

                <h2 className=" text-xl ml-[550px] mb-16 font-medium  ">Featured In </h2>



                <div className="flex gap-[140px] mb-10 ">
                    {
                        logos.map((item) => (
                            <div>
                                <Image src={item} />
                            </div>
                        ))
                    }
                </div>
            </section>

            <h2 className="text-3xl   font-medium  ml-28      mt-36 ">Traveler Favorites</h2>

            <section className="w-full h-full flex  p-10 bg-[ #8cc0e9 ]  ">



                {LandingPageProducts?.map((product) => (
                    <div className=" container w-[1200px] h-[700px] cursor-pointer shadow-sm border " key={product?.id}
                        onClick={() => handleClick(product)}>
                        <Image className="p-10"
                            src={product.image}
                            width={400}
                            height={300}
                        />

                        <div>

                            <h className="font-bold font-sans text-xl ml-10">{product.name}</h>
                        </div>

                        <div className="mt-5  ml-10">

                            <p className="text">{product.description}</p>

                        </div>
                        {/* <div className="mt-7 ml-10  ">

                            <Link href="/">ShopNow</Link>
                        </div> */}
                    </div>
                ))
                }

            </section >


            <section className="container w-full  h-full flex mt-10 ml-[200px]    shadow-2xl border mb-10  ">

                <div className=" h-auto   w-1/2  ">
                    <Image src={image} width={600} className="p-4 mr-1" />
                </div>


                <div className="mt-[180px] w-1/2 h-auto ml-10">

                    <h2 className="text-2xl">Life’s an adventure. Dress accordingly.</h2>


                    <p className=" mt-6 leading-7">Overpacking has ruined too many great trips. Our durable, stain-resistant pants are designed for the modern traveler, offering stretch, versatility, and long-lasting comfort so they can be worn for days. Learn more about our fabrics.</p>

                </div>

            </section >


        </>

    )
}

export default Landing;