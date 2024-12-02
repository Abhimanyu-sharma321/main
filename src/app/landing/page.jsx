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
                <div className="w-1/2 text-white font-bold   p-40 ">
                    <h3 className="text-[100px]">WE LIVE</h3>
                    <div className="flex">
                        <h3 className=" text-2xl line-[4px]">Live More. </h3><br></br><p className="text-[#6DFF40] text-2xl">Live Fully.</p>
                    </div>
                    <p className="text-3xl font-sans">Live Amplified.</p>
                </div>

                <div className="flex mt-40  w-1/2 ">

                    <div className="flex">
                        <div className="hover:border border-sky-600   h-[60px] w-[20] items-center  justify-center rounded-full" style={{
                            display: "block",
                            background: "black",
                            borderRadius: "50 %",
                            margin: "0",
                        }} >

                            <Link href={"https://vimeo.com/seacretdirect"} className="items-center  " >
                                <Image src=" https://i.vimeocdn.com/portrait/104864758_60x60?subrect=21%2C21%2C730%2C730&r=cover&sig=39b50f02c5f717560cb8b49a510f4c6ce8b8c35764f1d2a23b9f32c239d9d0fe&v=1" width={60} height={60} className="   p-3" />
                            </Link>
                        </div>
                        <div className="ml-8 mb-3">
                            <Link href={" https://vimeo.com/996383457"} className="hover:bg-sky-600 hover:text-black text-white ">
                                All Agent Global Ambassador Call - 08.06.2024 1
                            </Link>

                            <div className="hover:bg-sky-600 text-white  hover:text-white  ml-7 w-[56px]">
                                <a href="" className="hover:text-white">Viago</a>
                            </div>
                        </div>


                        <div>

                        </div>

                    </div>


                </div>
            </section >

            <section className="w-full h-full flex bg-black text-white  p-40">

                <div className="w-1/2 h-auto">

                    <Image src={warehouseImage} className="w-auto h-auto" />

                </div>


                <div className="w-1/2 h-auto">
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

                    <div className=" bg-[#6DFF40] h-14 mt-10 w-[300px] ml-[300px] align-middle rounded-2xl text-center">
                        <a href="" className="   text-black  align-middle mt-1"> See How We Thrive</a>
                    </div>
                </div>
            </section>




            <section className="w-full h-full flex bg-black text-white  p-40">

                <div className="w-1/2 h-auto">

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

                    <div className=" bg-[#6DFF40] h-14 mt-10 w-[300px] ml-[300px] align-middle rounded-2xl text-center">
                        <a href="" className="   text-black  align-middle mt-1"> See How We Thrive</a>
                    </div>
                </div>


                <div className="w-1/2 h-auto" >

                    <Image src={warehouseImage2} className="w-auto h-auto" />
                </div>


            </section>



            <section className="w-full h-full flex bg-black text-white  p-40">

                <div className="w-1/2 h-auto">


                </div>


                <div className="w-1/2 h-auto" >


                    <h2>WHAT WE OFFER</h2>

                    <h3>Curated experiences, rewards,
                        and a financial boost.</h3>

                    <p>Viago offers a variety of tools and services to
                        enhance your lifestyle: travel perks, entertainment
                        savings, and unique fInancial opportunities. Whether
                        you’re seeking adventure or financial growth,
                        we’ve got something for you
                    </p>



                    <div className=" bg-[#6DFF40] h-14 mt-10 w-[300px] ml-[300px] align-middle rounded-2xl text-center">
                        <a href="" className="   text-black  align-middle mt-1"> See How We Thrive</a>
                    </div>
                </div>


            </section>



            <section className="w-full h-full flex bg-black text-white  p-40">

                <div className="content-wrapper">
                    <div className="bg-img"></div>
                    <div className="bg-overlay"></div>
                    <div className="content">
                        <h1 className="h-text tt-u">We Thrive</h1>
                        <p className="sh-text">
                            Living and Working... to Live.
                        </p>
                        <p>
                            We all face the challenge of balancing work and life.
                            We work to live, yet often sacrifice life for our work.
                            But today, there's a different way forward.
                            Your side hustle doesn’t have to mean working overtime—it can mean creating more time for what truly matters.
                        </p>
                        <p>
                            <span className="fs-i">Viago helps you achieve just that:</span> more freedom in your daily life and bigger rewards for your efforts,
                            all while having fun along the way.
                        </p>
                    </div>
                </div>

                <div className="w-1/2 h-auto" >



                </div>


            </section>

        </>


    )
}

export default Landing;