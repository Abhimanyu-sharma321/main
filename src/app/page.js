import Image from "next/image"
import bannerImage from "../assets/ProductImages/iphone.jpg"
import shoes from "../assets/ProductImages/shoes1.jpg"
import Cardhovers from "@/common/Cardhover"
import HoverComponent from "@/common/Cardhover"
import { ImageSlider } from "@/common/ImageSlider"
import Slikslider from "@/common/Slikslider"


export function Home() {
    return (
        <>

            <section className="w-full">
                <ImageSlider />
            </section>


            <section className="bg-black mt-10">

                <HoverComponent />
            </section>





        </>
    )
}
export default Home


