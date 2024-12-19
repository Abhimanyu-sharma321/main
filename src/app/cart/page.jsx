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
                <h2 className='ml-[750px]'>Your Cart</h2>

                <div className=' container  mt-16  shadow-sm '>
                    {
                        getCartData?.map((products) => (
                            <div className='flex gap-80 w-[1200px] h-[300px] shadow-xl border border-[2px decoration-solid]    mt-10'>
                                <Image src={products.image} width={200} height={100}  ></Image>
                                <div className='mt-[80px]'>{products.name}</div>
                                <div className='mt-[80px]' >{products.price}</div>
                                <button onClick={() => handleRemove(products)}>Remove</button>
                            </div>
                        ))
                    }
                </div>





                <div className='mt-[500px] ml-[900px] mb-[50px]'>
                    <div className='shadow ' >
                        <h2>Order Summary</h2>
                        <div className='flex gap-[90px]'>
                            <h2>Price</h2>
                            <p>900$</p>
                        </div>

                        <div className='flex gap-[90px]'>
                            <h1>ShippingEstimate</h1>
                            <h1>1500$</h1>
                        </div>
                    </div>
                </div>


            </section >



            <div className='flex gap-44 mt-3 ml-96 mb-10'>
                <Link href={"/"}>
                    <button className='w-80 h-20 rounded-md bg-sky-900 text-white font-bold hover:bg-green-600  hover:text-white ' onMouseEnter={() => setName("<<<-------Continue Shopping")} onMouseLeave={() => setName("")}> {name}</button  >
                </Link>
                <button className='w-80 h-20 rounded-md bg-sky-900 text-white font-bold hover:bg-slate-800  hover:text-white ' onClick={() => handleCheckout()}>ChecketOut</button  >

            </div>

        </>

    )
}

export default page