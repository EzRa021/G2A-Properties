import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
const Slider = () => {
    return (
        <>
            <div className="relative">
                <Swiper

                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className=" w-full sm:h-[700px] h-[400px]  swiper "
                >
                    <SwiperSlide className="w-[100%] h-[100%] "><img className=" object-cover " src="/image1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className="w-[100%] h-[100%] "><img className=" object-cover " src="/image2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className="w-[100%] h-[100%] "><img className=" object-cover" src="image3.jpg" alt="" /></SwiperSlide>
                </Swiper>
                <div className="w-full sm:h-[700px] h-[400px]  flex justify-center z-50 top-0  text-white bg-[black] bg-opacity-60 absolute" >
                    <div className="  lg:px-[0px] sm:px-[0] w-[80%] lg:w-[40rem] sm:w-[570px] lg:mt-32 mt-10" >
                        <div className="text-center">
                            <h1 className="lg:text-[60px] sm:text-[50px] text-[30px] font-semibold md:font-bold tracking-[1px] leading-[40px] md:leading-[70px]">Your dream home now within reach</h1>
                            <p className="text-[0.6rem] sm:text-[22px] lg:text-[22px] mt-3 font-[1px]">Welcome to G2A Real Estate, where innovation meets real estate excellence. Explore our platform designed to redefine your property experience.</p>
                        </div>
                        <div className="flex justify-between items-center mt-7">
                            <div>
                                <h1 className="lg:text-[50px] sm:text-[50px] text-[20px] font-normal lg:font-bold sm:font-semibold">5k+</h1>
                                <p className="text-[0.5rem] sm:text-[15px] lg:text-[15px]">Happy Customers</p>

                            </div>
                            <div className="border-l-[1px] lg:pl-10 sm:pl-10  pl-5">
                                <h1 className="sm:text-[50px]  text-[20px] font-normal lg:font-bold">100+</h1>
                                <p className="text-[0.5rem] sm:text-[15px]">5-star reviews</p>

                            </div>
                            <div className="border-l-[1px] lg:pl-10 sm:pl-10 pl-10">
                                <h1 className="lg:text-[50px] sm:text-[50px] sm:font-bold  text-[20px] font-normal lg:font-bold">100+</h1>
                                <p className="text-[0.5rem] sm:text-[15px] lg:text-[15px]">5-star reviews</p>

                            </div>
                        </div>
                        <div className="flex justify-center items-center sm:mt-16 mt-10">
                            <Link to="/Properties">
                                <button className="bg-orange lg:px-10 px-5  sm:px-10 sm:py-3 lg:py-3 py-3 rounded-lg text-[15px] mr-4 text-center" type="button">Buy Properties</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Slider;

