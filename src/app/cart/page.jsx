"use client";
import React, { useState } from 'react'
import useAddToCartHook from '../../../Hooks/useAddtocartHook'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    let getCartData = JSON?.parse(localStorage.getItem("productData"))
    const { cartData, handleRemove } = useAddToCartHook();
    const [name, setName] = useState()

    console.log(getCartData?.length, "cart")



    return (
        <>
            <section className='w-full h-full  p-24 ' >
                <h2 className='ml-[750px]  font-bold leading-9 '>Your Cart</h2>

                <div className='container'>
                    {
                        getCartData?.map((products) => (
                            <div className=' container flex gap-[100px] w-[1200px] h-[300px]   border mb-6   '>
                                <Image src={products.image} width={200} height={100}  ></Image>
                                <div className='mt-[80px]'>{products.name}</div>
                                <div className='mt-[80px]' >{products.price}</div>
                                <div>
                                    <button className='mt-[80px]' onClick={() => handleRemove(products)}>Remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section >






            {/* <div className='flex gap-44 mt-3 ml-96 mb-10'>
                <Link href={"/"}>
                    <button className='w-80 h-20 rounded-md bg[#020f1a]' onMouseEnter={() => setName("<<<-------Continue Shopping")} onMouseLeave={() => setName("")}> {name}</button  >
                </Link> 
                <button className='w-80 h-20 rounded-md bg-sky-900 text-white font-bold hover:bg-slate-800  hover:text-white ' onClick={() => handleCheckout()}>ChecketOut</button  >

            </div> */}

        </>

    )
}

export default page