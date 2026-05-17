"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className=" pt-20 pb-10 bg-gray-50 ">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >

        <SwiperSlide>
          <div className="flex flex-col gap-5 p-5 md:flex-row pb-15 container mx-auto justify-between items-center">
            <div>
              <h1 className="text-5xl font-bold"> <span className="text-green-800">Where Champions </span> <br /> Reserve Their Arena.</h1>
              <p className="text-xl text-muted mt-3">Easy booking for premium sports facilities, tournaments, <br /> and training sessions.</p>

              <Link href={'/all-facilities'}>
                <Button variant="outline" className={'rounded-xs group px-5 py-5 font-semibold bg-green-800 text-white  mt-3'}>
                  See All Venue <FaArrowRightLong
                    className="group-hover:translate-x-2 duration-300" />
                </Button>
              </Link>
            </div>

            <div className="">
              <Image
                className="w-140 h-120 rounded-xs object-cover"
                src={'/assets/hero.jpg'}
                alt="Hero Image"
                width={1000}
                height={1000}
              />
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>

          {/* Football  */}
          <div className="flex  flex-col gap-5 p-5 md:flex-row  pb-15 container mx-auto justify-between items-center">
            <div>
              <h1 className="text-5xl font-bold"> <span className="text-green-800">Book Football Turf  </span> <br /> for Your Next Match</h1>
              <p className="text-xl text-muted mt-3">Gather your squad. Dominate the field.</p>

               <Link href={'/all-facilities'}>
                <Button variant="outline" className={'rounded-xs group px-5 py-5 bg-green-800 text-white  mt-3'}>
                  See Football Venue <FaArrowRightLong
                    className="group-hover:translate-x-2 duration-300" />
                </Button>
              </Link>
            </div>

            <div className="">
              <Image
                className="w-140 h-120 rounded-xs object-cover"
                src={'/assets/football.jpg'}
                alt="Hero Image"
                width={1000}
                height={1000}
              />
            </div>

          </div>

        </SwiperSlide>

        <SwiperSlide>

          {/* cricekt */}

          <div className="flex  flex-col gap-5 p-5 md:flex-row  pb-15 container mx-auto justify-between items-center">
            <div>
              <h1 className="text-5xl font-bold"> <span className="text-green-800">Your Cricket Ground </span> <br /> is Just a Click Away</h1>
              <p className="text-xl text-muted mt-3">From casual matches to tournaments — book easily</p>

               <Link href={'/all-facilities'}>
                <Button variant="outline" className={'rounded-xs group px-5 py-5 bg-green-800 text-white  mt-3'}>
                  See Cricket Venue <FaArrowRightLong
                    className="group-hover:translate-x-2 duration-300" />
                </Button>
              </Link>
            </div>

            <div className="">
              <Image
                className="w-140 h-120 rounded-xs object-cover"
                src={'/assets/cricket.jpg'}
                alt="Hero Image"
                width={1000}
                height={1000}
              />
            </div>

          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Hero;