"use client";

import { apple14, warehouseImage, warehouseImage2 } from "@/assets/Index";
// import VideoPlayer from "@/comman/VideoPlayer";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
    const VIDEO_4 = "https://player.vimeo.com/video/1010119713?autoplay=0&loop=1&autopause=1&muted=0&controls=true"


    return (
        <>
            <section className="bg-black   flex gap-[100px w-full h-auto p-10  ">
                {/* <div className="w-1/2 text-white font-bold   p-40 ">
                    <h3 className="text-[100px]">WE LIVE</h3>
                    <div className="flex">
                        <h3 className=" text-2xl line-[4px]">Live More. </h3><br></br><p className="text-[#6DFF40] text-2xl">Live Fully.</p>
                    </div>
                    <p className="text-3xl font-sans">Live Amplified.</p>
                </div> */}


                <Image src="/src/assets/landingImages/poshbanner.jpg" alt='banner' width={1000} height={500} />

            </section >

            <section className="w-full h-full flex bg-black text-white  p-40">

                <div className="w-1/2 h-auto">

                    <Image src={warehouseImage} className="w-auto h-auto  rounded-md" />

                </div>


                <div className="w-1/2 h-auto p-10">
                    <h2>WE THRIVE</h2>
                    <h3 className="text-blue-700">Living and Working… to Live.</h3>
                    <strong>

                        We all face the challenge of balancing work and life. We
                        work to live, yet often sacrifice life for our work. But today,
                        there's a different way forward. Your side hustle doesn’t
                        have to mean working overtime - it can mean creating
                        more time for what truly matters.

                        We helps you achieve just that: more freedom in your
                        daily life and bigger rewards for your efforts, all while
                        having fun along the way.
                    </strong>


                </div>
            </section>




            <section className="w-full h-full flex bg-black text-white  p-40">

                <div className="w-1/2 h-auto p-10">

                    <h2>WE GROW</h2>

                    <h6 className="text-blue-950 font-bold">We Are a Global Community.</h6>
                    <p>We’re a family of people from all walks of life who believe there
                        must be a better way to live each day. When we come together
                        and help each other, we move faster, achieve more, and learn to
                        thrive as one.
                    </p>

                    <p>Our most successful community members are here to share
                        insights, hacks, and 'cheat codes' to help you stretch further
                        and reach your goals faster. This is how we grow—together, as
                        one-big-team.</p>


                </div>


                <div className="w-1/2 h-auto" >

                    <Image src={warehouseImage2} className="w-auto h-auto rounded-md" />
                </div>


            </section>









        </>


    )
}

export default Landing;