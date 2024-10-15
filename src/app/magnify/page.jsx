"use client"

import { jackandjones3, pumashoe1, trending2 } from "@/assets/Index";
import { ProductSlider } from "@/common/Slider";
import { GlassMagnifier, Magnifier, MagnifierContainer, MagnifierZoom, SideBySideMagnifier } from "react-image-magnifiers";
import ReactImageMagnify from "react-image-magnify";

const Magnify = () => {


  return (
    <div className="w-full h-full">

      <SideBySideMagnifier className="w-full h-auto "
        imageSrc="https://m.media-amazon.com/images/I/51tSfGLJiwL._SX522_.jpg" style={{ width: "400px", height: "400px" }}
        fillGapRight
        overlayBoxOpacity={1}
        overlayOpacity={1}
      />

    </div>
  )
}
export default Magnify