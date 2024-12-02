"use client"
import { useRouter } from "next/router";
import { useEffect } from "react";

const Checkout = () => {
    const router = useRouter()
    const { id } = router.query


    useEffect(() => {
        console.log(id, "iddddddddddddddddd")
    })
}
export default Checkout;