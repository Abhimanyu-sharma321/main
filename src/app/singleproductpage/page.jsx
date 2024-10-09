'use client'

import Image from "next/image"
import UseSingleProductHook from "../../../Hooks/SingleProductHok"
import { ProductSlider } from "@/common/Slider"

const SingleProductPage = () => {

    let newData = JSON.parse(localStorage.getItem("singleProducts"))


    return (
        <>
            <section className="flex gap-16 w-full h-full">
                <div className="w-1/2">
                    {/* <Image src={newData.image} className="min-w-96" /> */}
                    <ProductSlider />

                </div>
                <div className="w-1/2">
                    <h2 className={`${newData.id === 1 ? "text-blue-950 font-bold text-3xl" : newData.id === 2 ? "text-2xl text-black" : newData.id === 3 ? "text-4xl text-red-950 font-bold" : "text-black font-bold text-4xl"}`}>{newData.name}</h2>
                    <i>{newData.descripion}</i>
                </div>

            </section>



        </>
    )
}

export default SingleProductPage