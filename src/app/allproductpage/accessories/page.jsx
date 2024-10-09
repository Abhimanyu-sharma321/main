import { _ACCESSORIES, _HOME_PRODUCT_IMAGES } from "@/app/productdetails";
import Image from "next/image";

const Acceessories=()=>{
return(

    <div className="w-full h-full">
       {
         _ACCESSORIES.map((accesories)=>{

     <Image src={accesories.image} width={1000} height={1000}/>




        })
       }
    </div>
)


}


export default Acceessories;