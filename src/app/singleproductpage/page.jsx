'use client'

import Image from "next/image"
import UseSingleProductHook from "../../../Hooks/SingleProductHok"
import { ProductSlider } from "@/common/Slider"
import UseAddToCartHook from "../../../Hooks/useAddtocartHook"

const SingleProductPage = () => {
    const { AddtoCart } = UseAddToCartHook()
    let newData = JSON.parse(localStorage.getItem("singleProducts"))
    console.log(newData, "newAtv")
    let h2Class = "mb-9 text-ellipsis overflow-hidden"
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
                    <h2 className={`${h2Class}`}>{newData.description}</h2>
                    <h2 className="font-mono text-3xl">{newData.off_price}</h2>
                    <h2 className={`${h2Class}`}>{newData.taxmessage}</h2>
                    <h2 className={`${h2Class}`}>{newData.single_price}</h2>
                    <h2 className={`${h2Class}`}>{newData.emistartmessage}</h2>
                    <h2 className={`${h2Class}`}>{newData.purchace_count}</h2>
                    <h2 className={`${h2Class}`} > Price:-₹{newData.price}</h2>


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

            <section className="text-center " >

                {
                    newData.aboutthisitem.map((i) => (
                        <figure className="ml-[500px]  text-ellipsis     p-10">
                            <ul className="flex gap-10 text-center">
                                <li className="ml-[500px]">{i.name}</li>
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