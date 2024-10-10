'use client'

import Image from "next/image"
import UseSingleProductHook from "../../../Hooks/SingleProductHok"
import { ProductSlider } from "@/common/Slider"
import UseAddToCartHook from "../../../Hooks/useAddtocartHook"

const SingleProductPage = () => {
    const { AddtoCart } = UseAddToCartHook()
    let newData = JSON.parse(localStorage.getItem("singleProducts"))
    console.log(newData, "newAtv")
    let bottomclss = "mb-9 text-2xl font-sans-serif"
    return (
        <>
            <section className="flex w-full h-full mt-10 object-contain">
                <div className="w-full h-full">
                    <div className="w-[900px] h-1/2">
                        <ProductSlider className="w-96 h-auto" />
                    </div>
                </div>
                <div className="w-full    ml-10">
                    <h2 className={`${newData.id === 1 ? "text-blue-950 font-bold text-3xl mt-10" : newData.id === 2 ? "text-2xl text-black" : newData.id === 3 ? "text-4xl text-red-950 font-bold" : "text-black font-bold text-4xl mb-10 "}`}>{newData.name}</h2>
                    <h2 className={`${bottomclss}`}>{newData.description}</h2>
                    <h2 className="font-mono text-3xl">{newData.off_price}</h2>
                    <h2 className={`${bottomclss}`}>{newData.taxmessage}</h2>
                    <h2 className={`${bottomclss}`}>{newData.single_price}</h2>
                    <h2 className={`${bottomclss}`}>{newData.emistartmessage}</h2>
                    <h2 className={`${bottomclss}`}>{newData.purchace_count}</h2>
                    <h2 className={`${bottomclss}`} > Price:-₹{newData.price}</h2>


                    <div className="flex text-center ">

                        <button className="border border-black w-20 bg-sky-600 mr-2 hover:bg-sky-800">-</button>
                        <input type="text" value={1} className="border border-black text-center h-10" />

                        <button className="border border-black w-20 bg-sky-600 ml-2 hover:bg-sky-800">+</button>
                    </div>
                    <button className="w-52 h-16 bg-sky-800 hover:bg-white text-white hover:text-black font-bold mt-16 ml-28 rounded-xl  hover:border border-black" onClick={() => AddtoCart(newData)}>Add To Cart</button>
                    <div className="flex mt-10">
                        {
                            newData.serviceslogo.map((logos) => (
                                <div className="flex">
                                    <Image src={logos} alt="service logo" />
                                </div>
                            ))
                        }
                    </div>


                </div>


            </section>

            <section className="ml-[700px] w-full h-full text-center flex-row   font-bold text-sky-800 ">

                {
                    newData.aboutthisitem.map((i) => (
                        <figure>
                            <ul className="flex gap-96">
                                <li>{i.name}</li>
                                <li>{i.value}</li>
                            </ul>


                        </figure>
                    ))
                }


            </section>

        </>
    )
}

export default SingleProductPage