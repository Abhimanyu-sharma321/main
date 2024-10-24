"use client";
import React, { useState } from 'react'
import useAddToCartHook from '../../../Hooks/useAddtocartHook'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    const { cartData } = useAddToCartHook();
    let getCartData = JSON.parse(localStorage.getItem("productData"))

    console.log(getCartData.length, "cart")
    const [name, setName] = useState()

    return (



        < div className='w-full h-full bg-sky-50' >
            {console.log(getCartData.image, "getcartDAta.iimaaagdgs")}

            < section className='w-full h-full  p-24 bg-sky-50' >

                <figure className='flex  border shadow p-14 gap-40 text-pretty     font-bold text-blue-950' >
                    <div className='hover:bg-slate-800 bg-sky-50'>
                        <Image src={getCartData?.image} alt='cartImage' className='hover:bg-slate-700 hover:scale-110 bg-sky-50' width={150} height={150} />
                    </div>
                    <div className='mt-16  flex gap-52'>
                        <p>Name:-{`${getCartData?.name ?? getCartData?.title}`}</p>
                        <p>Quantity: 2</p>
                        <p>price:{""}{getCartData.price}</p>
                    </div>



                </figure>

            </section >
            <div className='flex gap-44 mt-3 ml-96 mb-10'>
                <Link href={"/"}>
                    <button className='w-80 h-20 rounded-md bg-sky-900 text-white font-bold hover:bg-green-600  hover:text-white ' onMouseEnter={() => setName("<<<-------Continue Shopping")} onMouseLeave={() => setName("")}> {name}</button  >
                </Link>
                <button className='w-80 h-20 rounded-md bg-sky-900 text-white font-bold hover:bg-slate-800  hover:text-white '>ChecketOut</button  >

            </div>


        </div >
    )
}

export default page