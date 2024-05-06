import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center w-[93.5%] py-8 px-4 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light grid gap-4 text-gray-500 sm:text-lg md:text-xl dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-medium text-black dark:text-white">
            Welcome to <span className="text-blue-600">Blue Ecommerce</span>
          </h2>
          <div>
            <p className="mb-4 text-gray-700">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="flex gap-x-8 mt-4 font-normal">
            <a
              href="#"
              className="flex place-items-center gap-2 px-4 text-lg py-2 rounded-[5px] bg-blue-600 text-gray-100 hover:bg-blue-700"
            >
              {" "}
              View Product
              <GoArrowRight /> 
            </a>
            <a
              href="#"
              className="flex place-items-center gap-2 px-4 text-lg py-2 rounded-[5px] text-red-600 border border-red-600 hover:text-gray-100 hover:bg-red-500 hover:border-red-500"
            >
              Learn More
              {" "}
              <GoArrowRight /> 
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 relative">
          <div className="w-full rounded-lg overflow-hidden">
            <Image
              src="/assets/hero3.jpg"
              width={500} 
              height={600} 
              layout="responsive"
              className="rounded-lg"
              alt="Hero 1"
            />
          </div>
          <div className="mt-4 w-full lg:mt-10 rounded-lg overflow-hidden">
            <Image
              src="/assets/hero4.jpg"
              width={500}
              height={600}
              layout="responsive"
              className="rounded-lg"
              alt="Hero 2"
            />
          </div>
          <div className="w-full rounded-lg z-20 overflow-hidden mt-[-90px] ml-[80px]">
            <Image
              src="/assets/hero1.jpg"
              width={500}
              height={600}
              layout="responsive"
              className="rounded-lg"
              alt="Hero 3"
            />
          </div>
          <div className="w-full rounded-lg z-10 overflow-hidden ">
            <Image
              src="/assets/hero2.jpg"
              width={500}
              height={600}
              layout="responsive"
              className="rounded-lg"
              alt="Hero 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
