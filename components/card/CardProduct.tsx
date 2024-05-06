"use client";

import React from 'react';
import { ProductType } from '../types/productType';
import "@/app/globals.css";

const CardHomeComponent = ({ name, desc, image, price }: ProductType) => {
  return (
    <div className="container mx-auto bg-white rounded-lg overflow-hidden shadow-lg max-w-sm">
            <div className="relative">
                <img src={image} alt="product-img" className="w-full h-[400px] object-cover"/>
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">New</div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{name}</h3>
                {/* <p className="text-gray-600 text-sm mb-4">{limitedDesc}</p> */}
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${price}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded">Add to Cart</button>
                </div>
            </div>
        </div>
  );
};

export default CardHomeComponent;
