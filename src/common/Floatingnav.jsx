"use client";
import React from 'react'

import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
const Floatingnav = () => {
    const links = [


        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/home",

        },

        {
            title: "Products",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/allproductpage",
        },
        {
            title: "contact Us",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Cart",
            icon: (
                <Image
                    src="https://assets.aceternity.com/logo-dark.png"
                    width={20}
                    height={20}
                    alt="Aceternity Logo" />
            ),
            href: "#",
        },
    ];
    return (
        (<div className="flex items-center justify-center w-full h-full border-border-black p-16    ">
            <FloatingDock
                // only for demo, remove for production
                mobileClassName="translate-y-20"
                items={links} />
        </div>)
    )
}

export default Floatingnav