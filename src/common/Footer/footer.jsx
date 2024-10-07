import Image from 'next/image'
import React from 'react'
import footerLogo from "../../assets/Logos/footerLogo.png";

const Footer = () => {
    let h2className = "mb-6 text-sm font-semibold font-bold uppercase dark:text-white"
    let ulclassName = "text-gray-500    font-bold  dark:text-gray-400 font-medium"
    return (
        <footer className=" dark:bg-gray-900 shadow shadow-slate-800 bg-[#ffffff] ">
            <div className="mx-auto w-full max-w-screen-xl  ">
                <div className="grid grid-cols-2 gap-8 px-3 py-5 lg:py-8 md:grid-cols-4">


                    <div className='mr-16'>
                        <Image src={footerLogo} alt='imagesa' className='mr-16' />
                    </div>
                    <div>
                        <h2 className={`${h2className}`}>Company</h2>
                        <ul className={`${ulclassName}`}>
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={`${h2className}`}>Help center</h2>
                        <ul className={`${ulclassName}`}>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={`${h2className}`}>Legal</h2>
                        <ul className={`${ulclassName}`}>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer