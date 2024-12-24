
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from "../assets/sliderImages/firstSlide.png";
import slide2 from "../assets/sliderImages/secondslide.png";
import slide3 from "../assets/sliderImages/thirdslide.png";
import slide4 from "../assets/ProductImages/apple14.png"
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Page from '@/app/home/page';
import SingleProductPage from '@/app/singleproductpage/page';
import ReactImageMagnify from 'react-image-magnify';
import Magnifier from 'react-magnifier';
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
                <Slide autoplay={true} canSwipe={true} responsive={true} indicators={false}  >
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


export const ProductSlider = ({ image, indicators, imagesrc = {} }) => {
    var divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',

    }
    let productSliders = JSON.parse(localStorage.getItem("singleProducts"))

    let images = productSliders?.sliderImages?.map((item => item
    ))
    console.log(images, "images")

    return (
        <div className='w-auto h-auto       mb-20 border-black object-cover flex bg-white'>
            <div className='flex w-auto bg-white'>
                <ImageGallery items={images} thumbnailPosition={"left"} showFullscreenButton={false} showBullets={true} showNav={false}
                    renderItem={(item) => (
                        <div id='imageMagnifyer' className='flex  w-full' >
                            <Magnifier src={item.original} width={500} zoomFactor={1} mgShape={"square"} mgBorderWidth={3} />;
                        </div>
                    )}
                />

            </div>

        </div >
    )


}