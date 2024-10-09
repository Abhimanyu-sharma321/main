
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

    var divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',

    }
    const slideImages = [

        {
            id: 1,
            image: slide1,
            caption: 'Slide 1'
        },

        {
            id: 2,
            image: slide2,
            caption: 'Slide 1'
        },
        {
            id: 3,
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


export const ProductSlider = ({ image, indicators }) => {



    var divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',

    }
    let productSliders = JSON.parse(localStorage.getItem("singleProducts"))
    return (

        <div>


            <Slide autoplay={true} indicators={true}>

                {
                    productSliders?.sliderImages?.map((item, index) => (
                        <div style={{ ...divStyle }} key={index + 1}>
                            <figure className='w-full h-full p-32'>
                                <Image src={item} alt='imaging' className='w-1/2 h-auto object-cover' />
                            </figure>
                        </div>
                    ))
                }

            </Slide>
        </div>
    )


}