import { _HOME_PRODUCT_IMAGES } from "@/app/productdetails";
import Connect from "@/lib/db"
import User from "@/lib/modals/users";
import { NextResponse } from "next/server"

export const GET = async () => {


    try {
        await Connect();
        const users = await User.find();
        return new NextResponse(
            "my  apis "
        )

    } catch (error) {
        return new NextResponse("Error in fetching Users " + error.message, { status: 500 })

    }
}   