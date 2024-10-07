"use client";
import React from 'react'
import useAddToCartHook from '../../../Hooks/useAddtocartHook'
import Image from 'next/image';

const page = () => {
    const { cartData } = useAddToCartHook();

    console.log(cartData.image, "cart")

    return (
        <div className='w-full h-full'>


            <section className='flex  '>

                <figure className='p-20'>
                    <Image src={cartData?.image} alt='cart Image' />
                </figure>


                <div className='ml-32'>
                    <p>{cartData.title}</p>
                    <p>{cartData.description}</p>
                    <p>{cartData.price}</p>

                </div>

                <div className='ml-60'>
                    <p>Quantity:-1</p>
                </div>




            </section>
            <div className='flex gap-44 mt-10 ml-10'>
                <button className='w-80 h-20 rounded-md bg-sky-900 text-white font-bold hover:bg-white hover:text-blue-900 '>Continue Shopping</button  >
                <button className='w-80 h-20 rounded-md bg-sky-900 text-white font-bold hover:bg-white hover:text-blue-900  '>Buy Now</button>
            </div>


        </div>
    )
}

export default page