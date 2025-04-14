"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import newImage from "../../../public/new.svg"
import shop from "../../../public/shop.svg";
import ww from "../../../public/w.svg";
import wwB from "../../../public/w2.svg";

export interface ProductType {
  id: string;
  img: string;
  title: string;
  price: number;
  currentPrice: number;
  discount: number;
  halal: string;
  btn: string;
  quantity?: number;
  stock?: number;
}

const Products = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const fetchData = async () => {
      const res = await fetch(
        "https://676e39ccdf5d7dac1cca000c.mockapi.io/products"
      );
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  if (!isClient) return null;

  return (
    <div className="py-7 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h3 className="flex items-center gap-3 font-bold text-2xl mb-8 text-gray-800">
        <Image src={newImage} alt="new" width={24} height={24} /> Yangi mahsulotlar
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((value) => (
          <div
            key={value.id}
            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 relative"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={value.img}
                alt={value.title}
                fill
                className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
              />

              <div className="absolute top-0 left-0 right-0 flex justify-between p-3">
                {value.discount > 0 && (
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                    {value.discount}%
                  </div>
                )}
                
                {value.halal && (
                  <div className="w-10 h-10 ml-auto">
                    <Image
                      src={value.halal}
                      alt="halal"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Product info */}
            <div className="p-4 flex flex-col gap-3">
              <h3 className="text-gray-800 font-medium text-sm line-clamp-2 min-h-[40px]">
                {value.title}
              </h3>

              {/* Price with slide-in animation */}
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="flex items-center font-bold text-lg text-green-600 group-hover:translate-x-0.5 transition-transform duration-300">
                  {value.price.toLocaleString()}
                  <Image src={wwB} alt="so'm" width={16} height={16} className="ml-0.5" />
                </span>
                {value.currentPrice && (
                  <del className="flex items-center text-gray-400 text-sm group-hover:-translate-x-0.5 transition-transform duration-300">
                    {value.currentPrice.toLocaleString()}
                    <Image src={ww} alt="so'm" width={14} height={14} className="ml-0.5" />
                  </del>
                )}
              </div>

              {/* Interactive button section */}
              <div className="mt-2">
                {value.btn === "counter" ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-green-50 rounded-xl px-3 py-2 group-hover:bg-green-100 transition-colors duration-300">
                      <button className="text-lg font-bold text-gray-600 hover:text-green-600 transition-colors duration-200 w-6 h-6 flex items-center justify-center rounded-full hover:bg-green-200">
                        −
                      </button>
                      <span className="text-lg font-semibold text-gray-700">20</span>
                      <button className="text-lg font-bold text-gray-600 hover:text-green-600 transition-colors duration-200 w-6 h-6 flex items-center justify-center rounded-full hover:bg-green-200">
                        +
                      </button>
                    </div>
                    <p className="text-xs text-red-500 text-center">
                      Omborda mavjud: {value.stock || 0}
                    </p>
                  </div>
                ) : (
                  <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl font-medium text-green-700 hover:text-green-800 transition-all duration-300 group-hover:shadow-inner">
                    <Image 
                      src={shop} 
                      alt="shop" 
                      width={18} 
                      height={18} 
                      className="group-hover:rotate-12 transition-transform duration-300" 
                    />
                    Savatga qo'shish
                  </button>
                )}
              </div>
            </div>

            {/* Ribbon for new items */}
            <div className="absolute top-3 right-3 rotate-12 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              Yangi
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;