"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import phone from "../../../public/phone.svg";

const SwiperBanner = () => {
  return (
    <div className="w-full px-4 md:px-8 mt-4 relative">
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.5);
          transform: scale(1.1);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="rounded-lg bg-[#C4EAD2] p-6 h-[180px] md:h-[200px]"
      >
        {[1, 2].map((item) => (
          <SwiperSlide key={item}>
            <div className="flex flex-col justify-center h-full gap-4 px-4 md:px-10">
              <h2 className="text-lg md:text-2xl font-bold max-w-[572px]">
                Yangi royxatdan otgan mijozlarga ilk buyurtma bepul yetkazib
                beriladi!
              </h2>
              <div className="flex items-center gap-2 text-sm">
                <Image src={phone} alt="phone" width={20} height={20} />
                <span>1833-2178</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default SwiperBanner;
