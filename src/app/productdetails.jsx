import mackbookImage from "../assets/ProductImages/mackBook.png"
import brandlogo from "../assets/Logos/ applechiplogo.png"
import apple14 from "../assets/ProductImages/apple14.png"
import apple15 from "../assets/ProductImages/iphone15.png"
import apple16 from "../assets/ProductImages/iphone16.png"
import apple16Pro from "../assets/ProductImages/iphone16pro.png"
import iphoneSe from "../assets/ProductImages/iphonese.png"

/************************************************FLOATING-MENUEBAR*****************************************************************************************************************************************/
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";

export const _Home_Page_Products = [
    {
        id: 1,
        image: apple14,
        brandlogo: brandlogo,
        title: " 8-Core CPU8-Core GPU8GB Unified Memory256GB SSD Storage footnote ¹",
        description: "16-core Neural Engine13.6-inch Liquid Retina display with True Tone²1080p FaceTime HD cameraMagSafe 3 charging portTwo Thunderbolt / USB 4portsSupport for up to two external displays (with laptop lid closed)Magic Keyboard with Touch IDForce Touch trackpad30W USB-C Power Adapter",
        price: "$1,099.00",
        emiOption: "$91.58/mo.per month for 12 mo.monthsFootnote*",
        offeroncard: "Get 3% Daily Cash with Apple Card:-",
        suggetion: "Apple Trade InGet credit toward a new Mac when you trade in your eligible computer. Or recycle it for free.Footnote◊◊",
        buttontext: "Select",
        hoverImage: apple14,
        belowtext: "(OR)"

    },

    {
        id: 2,
        image: apple14,
        brandlogo: brandlogo,
        title: "I phone 14",
        description: "The Ultimate Iphone",
        price: "From:-$700",
        details: "6.9″ or 6.3″Super Retina XDR display footnote ¹ProMotion technologyAlways- On display",
        belowtext: "(Details)",
        buttontext: "Select",

    },
    {
        id: 3,
        image: apple14,
        brandlogo: brandlogo,
        title: "I phone 15",
        description: "The Ultimate Iphone",
        price: "From:-$100000",
        details: "6.9″ or 6.3″Super Retina XDR display footnote ¹ProMotion technologyAlways- On display",
        belowtext: "(Details)",
        buttontext: "Select"


    },
    {
        id: 4,
        image: apple15,
        brandlogo: brandlogo,
        title: "I phone 16",
        description: "The Ultimate Iphone",
        price: "From:-Rupees 80000",
        details: "6.9″ or 6.3″Super Retina XDR display footnote ¹ProMotion technologyAlways- On display",
        belowtext: "(Details)",
        buttontext: "Select"


    },


    {
        id: 6,
        image: apple16,
        brandlogo: brandlogo,
        title: "I phone Se 2020",
        description: "The Ultimate Iphone",
        price: "From:-  40000",
        details: "6.9″ or 6.3″Super Retina XDR display footnote ¹ProMotion technologyAlways- On display",
        belowtext: "(Details)",
        buttontext: "Select"


    },

    {
        id: 7,
        image: apple16Pro,
        brandlogo: brandlogo,
        title: "I phone Se 2020",
        description: "The Ultimate Iphone",
        price: "From:-120000",
        details: "6.9″ or 6.3″Super Retina XDR display footnote ¹ProMotion technologyAlways- On display",
        belowtext: "(Details)",
        buttontext: "Select"


    },
];
/****************************************************Header-Floating-Menues*********************************************************************************************************************/
export const links = [


    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },

    {
        title: "Products",
        icon: (
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Components",
        icon: (
            <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Aceternity UI",
        icon: (
            <Image
                src="https://assets.aceternity.com/logo-dark.png"
                width={20}
                height={20}
                alt="Aceternity Logo" />
        ),
        href: "#",
    },
    {
        title: "Changelog",
        icon: (
            <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },

    {
        title: "Twitter",
        icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
];



