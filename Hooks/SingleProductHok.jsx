"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const UseSingleProductHook = () => {

    const [singleProductData, setSingleDAta] = useState([])
    const router = useRouter();
    
    const handleClick = (product) => {
        localStorage.setItem("singleProducts", JSON.stringify(product))
        router.push("/singleproductpage")

    }



    return { handleClick, singleProductData, setSingleDAta }
}
export default UseSingleProductHook;