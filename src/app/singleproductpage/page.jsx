'use client'

import Image from "next/image"
import { ProductSlider } from "@/common/Slider"
import UseAddToCartHook from "../../../Hooks/useAddtocartHook"
import { useState } from "react"
const SingleProductPage = ({ props }) => {
    const { AddtoCart, IncreaseQuantity, DecreaseQuantity, cartQuantity } = UseAddToCartHook()
    const [image, setImage] = useState("")
    let newData = JSON.parse(localStorage.getItem("singleProducts"))
    console.log(newData, "newAtv")
    let h2Class = "mb-9 text-ellipsis overflow-hidden"
    console.log(image, "imahe ")

    console.log(newData.colours?.map((item) => console.log(item, "colours>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")))

    // const settingImage = (e) => {
    //     console.log(e, "prodycnjnwjkd")
    //     setImage(e.target.src)
    //     console.log(e.screenX, "eeeeeeeeeeeeeeeeeee")

    // }


    return (

        <>


            < section className="container flex w-full h-full mt-10 object-contain  " >
                <div className={`  {w-full  h-1/2 `} onClick={(e) => (e)}  >
                    <ProductSlider className={`{w-96 h-auto  backdrop-grayscale-0`} />
                </div>

                <div >
                    <h2 className="text-slate-800 dark:text-gray-800font-bold text-4xl mb-10 ">{newData.name}</h2>
                    <h2 className={`${h2Class}`}>{newData.description}</h2>
                    <h2 className="font-mono text-3xl">{newData.off_price}</h2>
                    <h2 className={`${h2Class}`} > Price:-₹{newData.price}</h2>
                    <h2 className={`${h2Class}`} > {newData.color}</h2>


                    <div className="flex text-center ">
                        <button className="border border-black w-20  " onClick={DecreaseQuantity} >-</button>
                        <input type="text" value={cartQuantity} className="border border-black text-center h-10" />

                        <button className="border border-black w-20   " onClick={IncreaseQuantity}>+</button>
                    </div>


                    <button className="w-52 h-16 bg-[#8cc0e9]  font-bold mt-16 ml-28  text-white rounded-md" onClick={() => AddtoCart(newData)}>Add To Cart</button>







                </div>









            </section >
        </>



    )






}

export default SingleProductPage