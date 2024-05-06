'use client'

import { useState, useEffect, Suspense } from 'react';
import Link from "next/link";
import Loading from "./loading";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { ProductType } from '@/components/types/productType';
import HeroSection from '@/components/home/HeroSection';
import FutureComponent from '@/components/home/FutureComponent';
import CardHomeComponent from '@/components/card/CardProduct';

interface Pagination {
  results: ProductType[];
  count: number; 
  next: string | null;
  previous: string | null;
}

// Function to fetch products
async function fetchProduct(page: number): Promise<Pagination> {
  const response = await fetch(
    `https://store.istad.co/api/products/?page=${page}&page_size=8`,
    { cache: "no-store" }
  );
  const data: Pagination = await response.json();
  return data;
}

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchProduct(currentPage);
      setProducts(fetchedData.results);
      setTotalPages(Math.ceil(fetchedData.count / 4));
    };
    fetchData();
  }, [currentPage]);


  return (
    <>
      <HeroSection />
      <FutureComponent />

      <h1 className="mt-12 mb-4 text-center text-3xl text-blue-500 font-medium">Product List</h1>
      <div className="w-[90%] py-2 mx-auto mt-12 z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-8 mb-10">
        <Suspense fallback={<Loading />}>
          {products.map((pro) => (
            <Link href={`/products/${pro.id}`} key={pro.id}>
              <Link href={`/products/${pro.id}`} key={pro.id}>
                <CardHomeComponent
                  image={pro.image}
                  desc={pro.desc}
                  name={pro.name}
                  key={pro.id}
                  price={pro.price}
                />
              </Link>
            </Link>
          ))}
        </Suspense>
      </div>

      <section className="flex justify-center items-center mt-10">
        <div className="flex items-center gap-4">
          <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}
            className="flex items-center gap-2 px-6 py-3 font-sans text-xl font-bold text-center text-blue-600 uppercase align-middle transition-all rounded-lg select-none hover:bg-blue-600/10 active:bg-blue-600/20 disabled:pointer-events-none disabled:opacity-50">
             <span><IoMdArrowRoundBack /></span>
             <span>Previous</span>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i+1}
              className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans font-medium uppercase text-blue-500 text-lg transition-all ${currentPage === i+1 ? 'bg-gray-900 text-white' : 'hover:bg-gray-900/10'}`}
              onClick={() => setCurrentPage(i + 1)}
              disabled={currentPage === i + 1}>
              {i + 1}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 px-6 py-3 font-sans font-bold text-center text-blue-600 uppercase align-middle transition-all rounded-lg select-none hover:bg-blue-600/10 active:bg-blue-600/20 disabled:pointer-events-none disabled:opacity-50 text-xl">
            Next <span><IoMdArrowRoundForward /></span>
          </button>
        </div>
      </section >
    </>
  );
}
