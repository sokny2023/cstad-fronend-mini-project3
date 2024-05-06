"use client";

import { Footer } from "flowbite-react";
import { FaOpencart } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { VscStarEmpty } from "react-icons/vsc";

import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function FooterComponent() {
  return (
    <Footer className="mt-10 w-full flex flex-col mb-10">
        <section className="w-[90%] mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center sm:justify-between sm:gap-4">
            <div className="grid justify-start items-start">
                <span className="text-blue-600 text-[30px] mr-4">
                    <FaOpencart />
                </span>
                <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500">
                Blue Ecommerce
                </span>

                <div className="mt-2 text-gray-700 text-[20px]">
                    The best for you...! 
                    {/* <span><FcLike /></span> */}
                </div>

                <div className="mt-2 flex gap-2 text-pink-500 text-[20px]">
                    <VscStarEmpty />
                    <VscStarEmpty />
                    <VscStarEmpty />
                    <VscStarEmpty />
                    <VscStarEmpty />
                </div>
                
            </div>

            <div className="grid gap-3">
                <h1 className="text-xl text-gray-800">Navbar</h1>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Policy</a>
                <a href="#">My Shop</a>
            </div>

            <div className="grid gap-3">
                <h1 className="text-xl text-gray-800">Product</h1>
                <a href="#">T-Shirt</a>
                <a href="#">Shoes</a>
                <a href="#">Laptop</a>
                <a href="#">Phone</a>
            </div>

            <div className="grid gap-3">
                <h1 className="text-xl text-gray-800">Sponsor</h1>
                <a href="#">Adidas</a>
                <a href="#">Nike</a>
                <a href="#">Puma</a>
                <a href="#">Forward</a>
            </div>

            <div className="grid gap-3">
                <h1 className="text-xl text-gray-800">Contact</h1>
                <a href="#">Website</a>
                <a href="#">Telegram</a>
                <a href="#">Facebook</a>
                <a href="#">Messager</a>
            </div>
        </section>

        <section>
            {/* <div className="w-full h-2 text-blue-500 mb-4"></div> */}
            <div className="mb-6 mt-3">
                    <Footer.Copyright href="#" by="Blue Ecommerce™" year={2024} />
            </div>
        </section>
    </Footer>
  );
}
