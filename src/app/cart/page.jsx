"use client";
import React from 'react'
import useAddToCartHook from '../../../Hooks/useAddtocartHook'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    const { cartData } = useAddToCartHook();
    let getCartData=JSON.parse(localStorage.getItem("productData"))
    
 console.log(getCartData, "cart")

    return (
        <div className='w-full h-full'>


            <section className='w-full h-full  p-24' >

                <figure className='flex shadow-2xl shadow-slate-950 p-10 gap-40 text-2xl font-bold text-blue-950' >
                    <div>
                    <Image src={getCartData?.image} alt='cartImage' className='  hover:scale-110'width={200} height={600} />
                    </div>
                    <div className='mt-16  flex gap-52'>
                    <p>Name:-{`${getCartData?.name??getCartData?.title}`}</p>
                    <p>Quantity: 2</p>
                    <p>price:{""}{getCartData.price}</p>
                    </div>
                  
                 
    
                </figure>

        </section>
            <div className='flex gap-44 mt-3 ml-96 mb-10'>
                <Link href={"/"}>
                <button className='w-80 h-20 rounded-md bg-sky-900 text-white font-bold hover:bg-green-600  hover:text-white '>Continue Shopping</button  >
                </Link>
                <button className='w-80 h-20 rounded-md bg-sky-900 text-white font-bold hover:bg-red-950  hover:text-white '>ChecketOut</button  >
                
            </div> 


        </div>
    )
}

export default page