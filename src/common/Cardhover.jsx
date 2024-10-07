"use client"
import { HoverEffect } from '@/components/ui/card-hover-effect';
import jblimage from "../assets/ProductImages/jbl.jpg";
import React from 'react'
const HoverComponent = () => {
    const projects = [
        {
            title: "Electronics",
            // description:
            // "World-class audio solutions for creators, fans and installers. Enjoy distortion-free sound that powers professional spaces, from recording studios to concert venues and sports stadiums.",
            link: "/allproductpage",
        },
        {
            title: "Clothing",
            // description:
            // "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            link: "https://netflix.com",
        },
        {
            title: " Footwear",

            link: "https://google.com",
        },
        {
            title: "Accessories",
            // description:
            // "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
            link: "https://meta.com",
        },
        {
            title: "Trending",
            // description:
            //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
            link: "https://amazon.com",
        },
        {
            title: "Gaming accessories  ",
            // description:
            //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            link: "https://microsoft.com",
        },
    ];
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}


export default HoverComponent;