import { Metadata } from 'next'
import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export const metadata: Metadata = {
	title: "ISTAD Ecommerce About Us",
	description: "We are providing the best service for you!",
}

export default function page() {
  return (
    <main className='w-[90%] mx-auto my-6 '>
      <section style={{
        height: '400px', 
        //backgroundImage: "url('/assets/about3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '3px',
        backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/assets/about3.jpg')",
      }}>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-1/3 bg-gray-100 px-10 py-8 border border-blue-300 rounded-[5px]'>
            <h2 className='text-center text-3xl text-blue-600 text-normal'>About Us</h2>
          </div>
        </div>
      </section>

      <section className='flex justify-between items-center'>
        <div className='w-1/2 flex justify-start'>
            <img src="/assets/about4.png" alt="about us" className='w-[92%] rounded-[5px] border-ss1'/>
        </div>
        <div className='w-1/2'>
          <div className='w-[92%] mx-auto grid gap-4'>
            <h2 className='text-3xl text-blue-500 font-normal'>Why We?</h2>
            <p className='text-gray-700 text-[20px] leading-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo totam minus reprehenderit numquam, doloremque, itaque voluptas iste vitae blanditiis consequuntur asperiores placeat fugit illum error quidem, fuga soluta aliquam veniam?
            </p>
            <p className='text-gray-700 text-[20px] leading-8 italic'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo totam minus reprehenderit.
            </p>

            <div className="mt-8 pt-2 flex space-x-6 sm:mt-0 text-2xl sm:justify-start">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
