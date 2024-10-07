"use client"
import React, { useState } from 'react'

const page = () => {
    const [first, setfirst] = useState("")
    return (
        <div>
            <button onClick={() => { setfirst(69); console.log(first, "first") }}>submit</button>
        </div>
    )
}

export default page