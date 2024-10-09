
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import slide1 from "../assets/sliderImages/firstSlide.png";
import slide2 from "../assets/sliderImages/secondslide.png";
import slide3 from "../assets/sliderImages/thirdslide.png";
import slide4 from "../assets/ProductImages/apple14.png"
import logo from "../assets/Logos/logo2.png";
import Image from 'next/image';
export const Slides = () => {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',

    }
    const slideImages = [

        {
            image: slide1,
            caption: 'Slide 1'
        },

        {
            image: slide2,
            caption: 'Slide 1'
        },
        {
            image: slide3,
            caption: 'Slide 1'
        },
        
    ];  
    return (
        <>
            <div className="slide-container    ">
                <Slide autoplay={true} canSwipe={true} responsive={true} indicators={true}  >
                    {slideImages.map((slideImage, index) => (
                        <div style={{ ...divStyle }}  >
                            <Image src={slideImage.image} />
                        </div>
                    ))}
                </Slide>
            </div>
        </>
    )
}