"use client"
import { HoverEffect } from "../ui/card-hover-effect"

export const NewHeader = () => {


    const projects = [
        // {
        //     title: "Home",
        //     // description:
        //     // "World-class audio solutions for creators, fans and installers. Enjoy distortion-free sound that powers professional spaces, from recording studios to concert venues and sports stadiums.",
        //     link: "/",
        // },
        {
            title: "Shop",
            // description:
            // "World-class audio solutions for creators, fans and installers. Enjoy distortion-free sound that powers professional spaces, from recording studios to concert venues and sports stadiums.",
            link: "/allproductpage",
        },
        {
            title: "cart",
            // description:
            // "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            link: "/cart",
        },
        {
            title: " SignUp",
            link: "/",


        },

    ];

    return (
        <div className=" bg-black">

            <div className="max-w-[1000px] mx-auto px-8" >
                <HoverEffect items={projects} />
            </div>
        </div>


    )

}