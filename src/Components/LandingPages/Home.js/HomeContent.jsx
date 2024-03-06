import { Favorite, NorthEastOutlined, } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { LuBath } from "react-icons/lu";
import { PiSquareHalfBold } from "react-icons/pi";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineNorthEast } from "react-icons/md";
import { NavLink } from "react-router-dom";


import Rating from '@mui/material/Rating';


// import required modules
import { Autoplay, } from 'swiper/modules';
import { Link } from "react-router-dom";


const HomeContent = () => {

    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        navText: ["<", ">"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },

        },
    };

    return (
        <div className="">
            <div className=" mx-[15px] sm:mx-[30px] xl:mx-[4rem] sm:my-[3rem] my-10 grid lg:grid-cols-2 grid-cols-1 gap-7 ">
                <div className="w-full  flex justify-center items-center ">
                    <div>
                        <img src="/image1.jpg" className="w-full sm:h-[600px] rounded-xl h-[300px] object-cover" alt="House" srcset="" />
                    </div>

                </div>
                <div className="flex justify-center w-full items-center ">
                    <div className="lg:mt-[70px] sm:mt-[130px] mt-[30px]" >
                        <h3 className="font-bold bg-gradient-to-r from-[black] via-[black] to-[white] inline-block text-transparent bg-clip-text">First feature</h3>
                        <h1 className="sm:text-[47px] text-[1.7rem] font-bold mt-[20px] tracking-[1px] sm:leading-[45px] leading-[30px]  ">Medium length section heading goes here</h1>
                        <p className="sm:text-[19.5px] text-[1rem] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        <button className="bg-orange cursor-pointer text-white px-5 py-4 rounded-lg text-[1rem] mt-5" type="button">Get Started Here</button>

                    </div>

                </div>
            </div>
            <div className="  xl:mx-[2rem] sm:px-[40px] mx-[15px] lg:mt-[8rem]  lg:flex justify-center block  items-center gap-10 ">
                <div className="flex justify-center xl:w-[50%] w-full ">
                    <div className="" >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold bg-gradient-to-r text-[20px] from-[black] via-[black] to-[white] inline-block text-transparent bg-clip-text">Second feature</h3>
                            <img src="/Image5.png" alt="" srcset="" />
                        </div>
                        <h1 className="sm:text-[47px] text-[1.7rem] font-bold mt-[-20px] tracking-[1px] sm:leading-[60px] leading-[40px]  ">Best homes, <br />
                            <span className=" font-normal italic">perfect</span> Match for you</h1>
                        <p className="sm:text-[19.5px] text-[1rem] mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        <div className="lg:flex block  mt-5 lg:p-7 p-5 bg-blue text-white rounded-xl">
                            <div className="mt-3 lg:mt-0">
                                <img src="/graph.png" alt="" srcset="" />
                                <h1 className="sm:text-[20px] text-[1.1rem] mt-3 sm:font-medium font-normal">Vetted Properties</h1>
                                <p className="mt-3 sm:text-[1rem] text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                            </div>
                            <div className="sm:mt-10 mt-5 lg:mt-0">
                                <img src="/graph.png" alt="" srcset="" />
                                <h1 className="sm:text-[20px] text-[1.1rem] mt-3 sm:font-medium font-normal">Vetted Properties</h1>
                                <p className="mt-3 sm:text-[1rem] text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                            </div>
                        </div>
                        <button className="bg-orange cursor-pointer text-white px-5 py-4 rounded-lg text-[1rem] mt-5" type="button">Get Started Here</button>

                    </div>

                </div>
                <div className="lg:w-[50%] w-full ">
                    <div className=" lg:col-span-2 col-span-1 w-full">
                        <img src="/image4.png" className="mt-5 w-full h-full object-cover" alt="" srcset="" />
                    </div>

                </div>
            </div>
            <div className=" lg:m-[4rem] m-[15px] mt-[3rem] lg:mt-[9rem] ">
                <div className="flex justify-between items-center">
                    <h1 className="lg:text-[50px] sm:text-[50px] text-[30px] font-semibold">Properties for sale</h1>
                    <Link to="/Properties">
                        <button className="lg:block  hidden bg-[black] cursor-pointer text-white px-5 py-4 rounded-lg text-[1rem] " type="button">Browse Properties</button>
                    </Link>

                </div>
                <div className="grid lg:flex justify-center items-center flex-wrap grid-cols-2 sm:grid-cols-2 gap-2  md:gap-10 content-center justify-items-center ">
                    <div className=" mt-10 sm:h-[540px] h-[auto] card lg:w-[23.3rem] sm:w-[full] w-full  text-[#252525B2] shadow-xl">
                        <div>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}

                                modules={[Autoplay]}
                                className="W-full sm:h-[280px] lg:h-[280px] h-[150px] relative"
                            >
                                <SwiperSlide><img src="/image1.jpg" alt="" srcset="" /></SwiperSlide>
                                <SwiperSlide><img src="/image2.jpg" alt="" srcset="" /></SwiperSlide>
                                <SwiperSlide><img src="/image3.jpg" alt="" srcset="" /></SwiperSlide>
                            </Swiper>
                            <div className="relative sm:bottom-[260px]  bottom-[130px] z-10 left-5 ">
                                <button className=" sm:text-[14px] text-[12px] font-semibold px-3 py-[2px] bg-white rounded-xl">FOR SALE</button>
                            </div>
                        </div>
                        <div className=" sm:px-5 lg:px-5 px-2 mt-[-1rem] sm:mt-0">
                            <div className="flex justify-between items-center">
                                <h1 className="sm:text-[25px] line-clamp-1  text-[10px] font-bold" >
                                    White House Villa
                                </h1>
                                <Favorite className="text-[red] " sx={{ fontSize: "1rem" }} />
                            </div>
                            <div className="mt-1">
                                <p className=" sm:text-[15px] text-[10px] line-clamp-3">Property address, No 12, Shop U16, Joke plaza, Bodija</p>
                            </div>
                            <div className=" sm:flex block sm:mt-5  justify-between items-center py-2 border-b-1  border-[#bebdbd]">
                                <p className=" sm:text-[15px] lg:text-[15px] text-[10px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBedDouble /></span>4 beds</p>
                                <p className="sm:text-[14px] text-[10px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBath /></span> 2 bathrooms</p>
                                <p className=" sm:text-[14px] text-[10px]"><span className="inline-block align-middle text-[0.8rem] sm:text-[1rem] mr-2"><PiSquareHalfBold /></span>2137 sqft</p>

                            </div>
                            <div className="sm:flex justify-between items-center sm:py-5 py-2  block">
                                <h1 className="lg:text-[25px] sm:text-[25px] text-[15px] font-bold">
                                    $45,000

                                </h1>
                                <NavLink to="/Propertiesdetails">
                                    <button className="bg-[black] cursor-pointer text-white  sm:px-8 px-0 mt-2  sm:py-2 py-[0.5rem] rounded-lg lg:text-[15px] sm:text-[15px] text-[10px] w-full sm:w-[180px]" type="button"> <span className="mr-2"><NorthEastOutlined sx={{ fontSize: "17px" }} /></span>View More</button>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                    <div className=" mt-10 sm:h-[540px] h-[auto] card lg:w-[23.3rem] sm:w-[full] w-full  text-[#252525B2] shadow-xl">
                        <div>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}

                                modules={[Autoplay]}
                                className="W-full sm:h-[280px] lg:h-[280px] h-[150px] relative"
                            >
                                <SwiperSlide><img src="/image1.jpg" alt="" srcset="" /></SwiperSlide>
                                <SwiperSlide><img src="/image2.jpg" alt="" srcset="" /></SwiperSlide>
                                <SwiperSlide><img src="/image3.jpg" alt="" srcset="" /></SwiperSlide>
                            </Swiper>
                            <div className="relative sm:bottom-[260px]  bottom-[130px] z-10 left-5 ">
                                <button className=" sm:text-[14px] text-[12px] font-semibold px-3 py-[2px] bg-white rounded-xl">FOR SALE</button>
                            </div>
                        </div>
                        <div className=" sm:px-5 lg:px-5 px-2 mt-[-1rem] sm:mt-0">
                            <div className="flex justify-between items-center">
                                <h1 className="sm:text-[25px] line-clamp-1  text-[10px] font-bold" >
                                    White House Villa
                                </h1>
                                <Favorite className="text-[red] " sx={{ fontSize: "1rem" }} />
                            </div>
                            <div className="mt-1">
                                <p className=" sm:text-[15px] text-[10px] line-clamp-3">Property address, No 12, Shop U16, Joke plaza, Bodija</p>
                            </div>
                            <div className=" sm:flex block sm:mt-5  justify-between items-center py-2 border-b-1  border-[#bebdbd]">
                                <p className=" sm:text-[15px] lg:text-[15px] text-[10px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBedDouble /></span>4 beds</p>
                                <p className="sm:text-[14px] text-[10px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBath /></span> 2 bathrooms</p>
                                <p className=" sm:text-[14px] text-[10px]"><span className="inline-block align-middle text-[0.8rem] sm:text-[1rem] mr-2"><PiSquareHalfBold /></span>2137 sqft</p>

                            </div>
                            <div className="sm:flex justify-between items-center sm:py-5 py-2  block">
                                <h1 className="lg:text-[25px] sm:text-[25px] text-[15px] font-bold">
                                    $45,000

                                </h1>
                                <NavLink to="/Propertiesdetails">
                                    <button className="bg-[black] cursor-pointer text-white  sm:px-8 px-0 mt-2  sm:py-2 py-[0.5rem] rounded-lg lg:text-[15px] sm:text-[15px] text-[10px] w-full sm:w-[180px]" type="button"> <span className="mr-2"><NorthEastOutlined sx={{ fontSize: "17px" }} /></span>View More</button>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                    <div className=" mt-10 sm:h-[540px] h-[auto] card lg:w-[23.3rem] sm:w-[full] w-full  text-[#252525B2] shadow-xl">
                        <div>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}

                                modules={[Autoplay]}
                                className="W-full sm:h-[280px] lg:h-[280px] h-[150px] relative"
                            >
                                <SwiperSlide><img src="/image1.jpg" alt="" srcset="" /></SwiperSlide>
                                <SwiperSlide><img src="/image2.jpg" alt="" srcset="" /></SwiperSlide>
                                <SwiperSlide><img src="/image3.jpg" alt="" srcset="" /></SwiperSlide>
                            </Swiper>
                            <div className="relative sm:bottom-[260px]  bottom-[130px] z-10 left-5 ">
                                <button className=" sm:text-[14px] text-[12px] font-semibold px-3 py-[2px] bg-white rounded-xl">FOR SALE</button>
                            </div>
                        </div>
                        <div className=" sm:px-5 lg:px-5 px-2 mt-[-1rem] sm:mt-0">
                            <div className="flex justify-between items-center">
                                <h1 className="sm:text-[25px] line-clamp-1  text-[10px] font-bold" >
                                    White House Villa
                                </h1>
                                <Favorite className="text-[red] " sx={{ fontSize: "1rem" }} />
                            </div>
                            <div className="mt-1">
                                <p className=" sm:text-[15px] text-[10px] line-clamp-3">Property address, No 12, Shop U16, Joke plaza, Bodija</p>
                            </div>
                            <div className=" sm:flex block sm:mt-5  justify-between items-center py-2 border-b-1  border-[#bebdbd]">
                                <p className=" sm:text-[15px] lg:text-[15px] text-[10px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBedDouble /></span>4 beds</p>
                                <p className="sm:text-[14px] text-[10px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBath /></span> 2 bathrooms</p>
                                <p className=" sm:text-[14px] text-[10px]"><span className="inline-block align-middle text-[0.8rem] sm:text-[1rem] mr-2"><PiSquareHalfBold /></span>2137 sqft</p>

                            </div>
                            <div className="sm:flex justify-between items-center sm:py-5 py-2  block">
                                <h1 className="lg:text-[25px] sm:text-[25px] text-[15px] font-bold">
                                    $45,000

                                </h1>
                                <NavLink to="/Propertiesdetails">
                                    <button className="bg-[black] cursor-pointer text-white  sm:px-8 px-0 mt-2  sm:py-2 py-[0.5rem] rounded-lg lg:text-[15px] sm:text-[15px] text-[10px] w-full sm:w-[180px]" type="button"> <span className="mr-2"><NorthEastOutlined sx={{ fontSize: "17px" }} /></span>View More</button>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                    <div className=" mt-10 sm:h-[540px] h-[auto] card lg:w-[23.3rem] sm:w-[full] w-full  text-[#252525B2] shadow-xl">
                        <div>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}

                                modules={[Autoplay]}
                                className="W-full sm:h-[280px] lg:h-[280px] h-[150px] relative"
                            >
                                <SwiperSlide><img src="/image1.jpg" alt="" srcset="" /></SwiperSlide>
                                <SwiperSlide><img src="/image2.jpg" alt="" srcset="" /></SwiperSlide>
                                <SwiperSlide><img src="/image3.jpg" alt="" srcset="" /></SwiperSlide>
                            </Swiper>
                            <div className="relative sm:bottom-[260px]  bottom-[130px] z-10 left-5 ">
                                <button className=" sm:text-[14px] text-[12px] font-semibold px-3 py-[2px] bg-white rounded-xl">FOR SALE</button>
                            </div>
                        </div>
                        <div className=" sm:px-5 lg:px-5 px-2 mt-[-1rem] sm:mt-0">
                            <div className="flex justify-between items-center">
                                <h1 className="sm:text-[25px] line-clamp-1  text-[10px] font-bold" >
                                    White House Villa
                                </h1>
                                <Favorite className="text-[red] " sx={{ fontSize: "1rem" }} />
                            </div>
                            <div className="mt-1">
                                <p className=" sm:text-[15px] text-[10px] line-clamp-3">Property address, No 12, Shop U16, Joke plaza, Bodija</p>
                            </div>
                            <div className=" sm:flex block sm:mt-5  justify-between items-center py-2 border-b-1  border-[#bebdbd]">
                                <p className=" sm:text-[15px] lg:text-[15px] text-[10px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBedDouble /></span>4 beds</p>
                                <p className="sm:text-[14px] text-[10px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBath /></span> 2 bathrooms</p>
                                <p className=" sm:text-[14px] text-[10px]"><span className="inline-block align-middle text-[0.8rem] sm:text-[1rem] mr-2"><PiSquareHalfBold /></span>2137 sqft</p>

                            </div>
                            <div className="sm:flex justify-between items-center sm:py-5 py-2  block">
                                <h1 className="lg:text-[25px] sm:text-[25px] text-[15px] font-bold">
                                    $45,000

                                </h1>
                                <NavLink to="/Propertiesdetails">
                                    <button className="bg-[black] cursor-pointer text-white  sm:px-8 px-0 mt-2  sm:py-2 py-[0.5rem] rounded-lg lg:text-[15px] sm:text-[15px] text-[10px] w-full sm:w-[180px]" type="button"> <span className="mr-2"><NorthEastOutlined sx={{ fontSize: "17px" }} /></span>View More</button>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                    <div className=" mt-10 sm:h-[540px] h-[auto] card lg:w-[23.3rem] sm:w-[full] w-full  text-[#252525B2] shadow-xl">
                        <div>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}

                                modules={[Autoplay]}
                                className="W-full sm:h-[280px] lg:h-[280px] h-[150px] relative"
                            >
                                <SwiperSlide><img src="/image1.jpg" alt="" srcset="" /></SwiperSlide>
                                <SwiperSlide><img src="/image2.jpg" alt="" srcset="" /></SwiperSlide>
                                <SwiperSlide><img src="/image3.jpg" alt="" srcset="" /></SwiperSlide>
                            </Swiper>
                            <div className="relative sm:bottom-[260px]  bottom-[130px] z-10 left-5 ">
                                <button className=" sm:text-[14px] text-[12px] font-semibold px-3 py-[2px] bg-white rounded-xl">FOR SALE</button>
                            </div>
                        </div>
                        <div className=" sm:px-5 lg:px-5 px-2 mt-[-1rem] sm:mt-0">
                            <div className="flex justify-between items-center">
                                <h1 className="sm:text-[25px] line-clamp-1  text-[10px] font-bold" >
                                    White House Villa
                                </h1>
                                <Favorite className="text-[red] " sx={{ fontSize: "1rem" }} />
                            </div>
                            <div className="mt-1">
                                <p className=" sm:text-[15px] text-[10px] line-clamp-3">Property address, No 12, Shop U16, Joke plaza, Bodija</p>
                            </div>
                            <div className=" sm:flex block sm:mt-5  justify-between items-center py-2 border-b-1  border-[#bebdbd]">
                                <p className=" sm:text-[15px] lg:text-[15px] text-[10px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBedDouble /></span>4 beds</p>
                                <p className="sm:text-[14px] text-[10px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBath /></span> 2 bathrooms</p>
                                <p className=" sm:text-[14px] text-[10px]"><span className="inline-block align-middle text-[0.8rem] sm:text-[1rem] mr-2"><PiSquareHalfBold /></span>2137 sqft</p>

                            </div>
                            <div className="sm:flex justify-between items-center sm:py-5 py-2  block">
                                <h1 className="lg:text-[25px] sm:text-[25px] text-[15px] font-bold">
                                    $45,000

                                </h1>
                                <NavLink to="/Propertiesdetails">
                                    <button className="bg-[black] cursor-pointer text-white  sm:px-8 px-0 mt-2  sm:py-2 py-[0.5rem] rounded-lg lg:text-[15px] sm:text-[15px] text-[10px] w-full sm:w-[180px]" type="button"> <span className="mr-2"><NorthEastOutlined sx={{ fontSize: "17px" }} /></span>View More</button>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=" flex justify-center items-center lg:hidden visible mt-10">
                    <button className=" bg-[black] cursor-pointer text-white px-5 py-4 rounded-lg text-[15px] " type="button">Browse Properties</button>
                </div>

            </div>
            <div className="flex justify-center items-center text-center">
                <div className="lg:w-[55%] w-[90%]">
                    <h1 className="lg:text-[45px] text-[30px] leading-[50px] lg:mt-5 mt-12 font-bold">Our Business Partners</h1>
                    <p className="sm:text-[18px] text-[1rem] lg:mt-10 mt-5">At G2A Properties, we are proud to collaborate with trusted business partners who share our commitment to excellence. Together, we create exceptional real estate solutions that redefine industry standards.</p>
                    <div className="flex justify-center items-center mt-10 ">
                        <img className="lg:w-[40%] w-[40%]" src="/Image6.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className=" lg:m-[3rem] my-[25px] mx-[15px] mt-[3rem] ">
                <div className="flex lg:justify-between justify-center items-center mx-[20px]  ">
                    <h1 className="lg:text-[50px] text-center text-[30px] font-semibold">Our Blog</h1>
                    <button className="lg:block hidden bg-[white] border-[1px] border-[black] cursor-pointer text-[black] px-5 py-4 rounded-lg text-[15px] " type="button"><span className="mr-2"><NorthEastOutlined sx={{ fontSize: "20px" }} /></span>Explore All</button>

                </div>
                <div className=" sm:mx-[2rem] mx-2 grid xl:grid-cols-3 sm:grid-cols-2 content-center gap-5 mt-5 grid-cols-1  ">
                    <div className=" shadow-xl  sm:w-full w-full bg-white z-auto p-3">
                        <div className="" >
                            <img src="/Image7.png" className="w-full h-52 sm:h-full" alt="" />
                        </div>
                        <div className="py-5">
                            <div className="flex items-center">
                                <p className="text-[1rem] font-semibold">Authors Name Pcube</p>
                                <p className="ml-3 sm:text-[0.9rem] text-[0.8rem]">5 min read</p>
                            </div>
                            <div className="flex py-3 ">
                                <h1 className=" sm:text-[1.5rem] text-[1rem]  mr-20 font-bold line-clamp-2">Strategies to Elevate Your Property Listings in 2024</h1>
                                <span className="h-8 pt-2 rounded-lg px-3 text-white bg-blue"><MdOutlineNorthEast /></span>
                            </div>
                            <p className="sm:text-[0.95rem] text-[1rem] sm:line-clamp-2 line-clamp-4">From leveraging cutting-edge technologies to mastering the art of compelling storytelling, this post will</p>
                        </div>
                    </div>
                    <div className=" shadow-xl  sm:w-full w-full bg-white z-auto p-3">
                        <div className="" >
                            <img src="/Image7.png" className="w-full h-52 sm:h-full" alt="" />
                        </div>
                        <div className="py-5">
                            <div className="flex items-center">
                                <p className="text-[0.8rem] font-semibold">Authors Name Pcube</p>
                                <p className="ml-3 sm:text-[0.9rem] text-[0.8rem]">5 min read</p>
                            </div>
                            <div className="flex py-3 ">
                                <h1 className=" sm:text-[1.5rem] text-[1rem]  mr-20 font-bold line-clamp-2">Strategies to Elevate Your Property Listings in 2024</h1>
                                <span className="h-8 pt-2 rounded-lg px-3 text-white bg-blue"><MdOutlineNorthEast /></span>
                            </div>
                            <p className="sm:text-[0.95rem] text-[1rem] sm:line-clamp-2 line-clamp-4">From leveraging cutting-edge technologies to mastering the art of compelling storytelling, this post will</p>
                        </div>
                    </div>
                    <div className=" shadow-xl  sm:w-full w-full bg-white z-auto p-3">
                        <div className="" >
                            <img src="/Image7.png" className="w-full h-52 sm:h-full" alt="" />
                        </div>
                        <div className="py-5">
                            <div className="flex items-center">
                                <p className="text-[0.8rem] font-semibold">Authors Name Pcube</p>
                                <p className="ml-3 sm:text-[0.9rem] text-[0.8rem]">5 min read</p>
                            </div>
                            <div className="flex py-3 ">
                                <h1 className=" sm:text-[1.5rem] text-[1rem]  mr-20 font-bold line-clamp-2">Strategies to Elevate Your Property Listings in 2024</h1>
                                <span className="h-8 pt-2 rounded-lg px-3 text-white bg-blue"><MdOutlineNorthEast /></span>
                            </div>
                            <p className="sm:text-[0.95rem] text-[0.7rem] sm:line-clamp-2 line-clamp-4">From leveraging cutting-edge technologies to mastering the art of compelling storytelling, this post will</p>
                        </div>
                    </div>
                    <div className=" shadow-xl  sm:w-full w-full bg-white z-auto p-3">
                        <div className="" >
                            <img src="/Image7.png" className="w-full h-52 sm:h-full" alt="" />
                        </div>
                        <div className="py-5">
                            <div className="flex items-center">
                                <p className="text-[0.8rem] font-semibold">Authors Name Pcube</p>
                                <p className="ml-3 sm:text-[0.9rem] text-[0.8rem]">5 min read</p>
                            </div>
                            <div className="flex py-3 ">
                                <h1 className=" sm:text-[1.5rem] text-[1rem]  mr-20 font-bold line-clamp-2">Strategies to Elevate Your Property Listings in 2024</h1>
                                <span className="h-8 pt-2 rounded-lg px-3 text-white bg-blue"><MdOutlineNorthEast /></span>
                            </div>
                            <p className="sm:text-[0.95rem] text-[0.7rem] sm:line-clamp-2 line-clamp-4">From leveraging cutting-edge technologies to mastering the art of compelling storytelling, this post will</p>
                        </div>
                    </div>
                    <div className=" shadow-xl  sm:w-full w-full bg-white z-auto p-3">
                        <div className="" >
                            <img src="/Image7.png" className="w-full h-52 sm:h-full" alt="" />
                        </div>
                        <div className="py-5">
                            <div className="flex items-center">
                                <p className="text-[0.8rem] font-semibold">Authors Name Pcube</p>
                                <p className="ml-3 sm:text-[0.9rem] text-[0.8rem]">5 min read</p>
                            </div>
                            <div className="flex py-3 ">
                                <h1 className=" sm:text-[1.5rem] text-[1rem]  mr-20 font-bold line-clamp-2">Strategies to Elevate Your Property Listings in 2024</h1>
                                <span className="h-8 pt-2 rounded-lg px-3 text-white bg-blue"><MdOutlineNorthEast /></span>
                            </div>
                            <p className="sm:text-[0.95rem] text-[0.7rem] sm:line-clamp-2 line-clamp-4">From leveraging cutting-edge technologies to mastering the art of compelling storytelling, this post will</p>
                        </div>
                    </div>
                    <div className=" shadow-xl sm:w-full w-full bg-white z-auto p-3">
                        <div className="" >
                            <img src="/Image7.png" className="w-full h-52 sm:h-full" alt="" />
                        </div>
                        <div className="py-5">
                            <div className="flex items-center">
                                <p className="text-[0.8rem] font-semibold">Authors Name Pcube</p>
                                <p className="ml-3 sm:text-[0.9rem] text-[0.8rem]">5 min read</p>
                            </div>
                            <div className="flex py-3 ">
                                <h1 className=" sm:text-[1.5rem] text-[1rem]  mr-20 font-bold line-clamp-2">Strategies to Elevate Your Property Listings in 2024</h1>
                                <span className="h-8 pt-2 rounded-lg px-3 text-white bg-blue"><MdOutlineNorthEast /></span>
                            </div>
                            <p className="sm:text-[0.95rem] text-[0.7rem] sm:line-clamp-2 line-clamp-4">From leveraging cutting-edge technologies to mastering the art of compelling storytelling, this post will</p>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center lg:hidden visible mt-5">
                    <button className=" bg-[black] cursor-pointer text-white px-5 py-4 rounded-lg text-[15px] " type="button">Browse all</button>
                </div>
            </div>
            <div className="lg:m-[100px] m-[15px] mt-[3rem]">
                <div className="">
                    <h1 className="lg:text-[45px] text-[30px] font-semibold">Customers testimonials</h1>
                    <p className="lg:text-[18px] text-center text-[1rem] lg:mt-5 mt-3">Testimonials that Speak of G2A Properties' Exceptional Real Estate Experience.</p>
                </div>
                <div className=" mt-20">

                    <div>
                        {/* <OwlCarousel className="slider-items owl-carousel" {...options}  >
                            <div className="item lg:w-[360px] sm:w-[360px] w-full">
                                <div className=" p-6 border-[1px] rounded-xl border-[black]">
                                    <div>
                                        <Rating name="read-only" value="9" readOnly />

                                    </div>
                                    <div className="my-4">
                                        <p className="text-[15px]">Working with G2A Properties in Nigeria was a game-changer for us. Their professionalism, and commitment getting us the perfect property surpassed all our expectations. I recommend them </p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="">
                                            <img src="/Image7.png" className="rounded-full w-14 h-14" alt="" srcset="" />

                                        </div>
                                        <div className="ml-5">
                                            <h1 className="font-semibold">Segun Afolyan</h1>
                                            <p>Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item lg:w-[360px] sm:w-[360px] w-full">
                                <div className=" p-6 border-[1px] rounded-xl border-[black]">
                                    <div>
                                        <Rating name="read-only" value="9" readOnly />

                                    </div>
                                    <div className="my-4">
                                        <p className="text-[15px]">Working with G2A Properties in Nigeria was a game-changer for us. Their professionalism, and commitment getting us the perfect property surpassed all our expectations. I recommend them </p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="">
                                            <img src="/Image7.png" className="rounded-full w-14 h-14" alt="" srcset="" />

                                        </div>
                                        <div className="ml-5">
                                            <h1 className="font-semibold">Segun Afolyan</h1>
                                            <p>Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item lg:w-[360px] sm:w-[360px] w-full">
                                <div className=" p-6 border-[1px] rounded-xl border-[black]">
                                    <div>
                                        <Rating name="read-only" value="9" readOnly />

                                    </div>
                                    <div className="my-4">
                                        <p className="text-[15px]">Working with G2A Properties in Nigeria was a game-changer for us. Their professionalism, and commitment getting us the perfect property surpassed all our expectations. I recommend them </p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="">
                                            <img src="/Image7.png" className="rounded-full w-14 h-14" alt="" srcset="" />

                                        </div>
                                        <div className="ml-5">
                                            <h1 className="font-semibold">Segun Afolyan</h1>
                                            <p>Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item lg:w-[360px] sm:w-[360px] w-full">
                                <div className=" p-6 border-[1px] rounded-xl border-[black]">
                                    <div>
                                        <Rating name="read-only" value="9" readOnly />

                                    </div>
                                    <div className="my-4">
                                        <p className="text-[15px]">Working with G2A Properties in Nigeria was a game-changer for us. Their professionalism, and commitment getting us the perfect property surpassed all our expectations. I recommend them </p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="">
                                            <img src="/Image7.png" className="rounded-full w-14 h-14" alt="" srcset="" />

                                        </div>
                                        <div className="ml-5">
                                            <h1 className="font-semibold">Segun Afolyan</h1>
                                            <p>Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> */}

                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center bg-[#ECF1F2] lg:pt-28 pt-10 pb-20">
                <div className="lg:w-[70%] w-[90%] ">
                    <h1 className=" lg:text-[50px] text-[30px] font-medium text-center">Medium length section heading goes here</h1>
                    <p className=" text-center lg:leading-leading leading-[20px] mt-2 lg:mx-[4rem] mx-0 lg:text-[18px] text-[1rem]"> Hold and temporarily lock STX, Stacks’ native currency, and support the network’s security and consensus. As a reward, you’ll earn BTC.</p>
                    <div className="flex justify-center items-center">
                        <button className="bg-blue cursor-pointer text-white px-5 py-4 rounded-lg text-[16px] mt-5" type="button">Start Here</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HomeContent;