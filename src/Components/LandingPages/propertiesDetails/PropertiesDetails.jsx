import { FavoriteBorderOutlined, FavoriteOutlined, LocalParkingOutlined, SearchOutlined } from "@mui/icons-material";
import { Favorite, NorthEastOutlined} from "@mui/icons-material";

import { LuBath, LuParkingSquare } from "react-icons/lu";
import { PiSquareHalfBold, PiSwimmingPool } from "react-icons/pi";
import { LuBedDouble } from "react-icons/lu";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Link, NavLink } from "react-router-dom";
const PropertiesDetails = () => {
    return (
        <>
            <div className="mx-[3rem] my-20">
                <div className="flex justify-between ">
                    <div className="">
                        <h1 className="text-[2.7rem] font-bold">White House Villa</h1>
                        <p className="text-[1.3rem]">Property address, No 12, Shop U16, <br /> Joke plaza, Bodija, Ibadan</p>

                    </div>
                    <div>
                        <button className="bg-none border-1 border-[black] px-5 py-3 rounded-lg text-[15px] mr-4" type="button"><span><FavoriteBorderOutlined style={{ fontSize: "15px", marginRight: "10px", color: "orange" }} /></span>Mark as favourite</button>
                        <button className="bg-orange text-white px-5 py-3 rounded-lg text-[15px] mr-4" type="button"><span><SearchOutlined /></span>Start a new Search</button>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="w-full h-[600px]">
                        <img loading="lazy" src="/image1.jpg" className="w-full h-full object-cover" srcset="" />
                    </div>
                    <div className="grid grid-cols-4 gap-5 mt-5">
                        <img src="/image1.jpg" loading="lazy" className="h-60 object-cover w-full " alt="" />
                        <img src="/image2.jpg" loading="lazy" className="h-60 object-cover w-full " alt="" />
                        <img src="/image3.jpg" loading="lazy" className="h-60 object-cover w-full " alt="" />
                        <img src="/image4.png" loading="lazy" className="h-60 object-cover w-full " alt="" />

                    </div>
                </div>
                <div className="flex justify-between  gap-20 mt-20">
                    <div className="w-full">
                        <div className="flex justify-between border-b border-[#e2e2e2] items-center pb-5 text-[0.8rem]">
                            <div>
                                <LuBedDouble className="text-[1.2rem]" />
                                <p>3bedrooms</p>
                            </div>
                            <div>
                                <LuBath className="text-[1.2rem]" />
                                <p>2bathrooms</p>
                            </div>
                            <div>
                                <PiSquareHalfBold className="text-[1.2rem]" />
                                <p>234 Sqft</p>
                            </div>
                            <div>
                                <PiSwimmingPool className="text-[1.2rem]" />
                                <p>3bedroom</p>
                            </div>
                            <div>
                                <LocalParkingOutlined className="text-[1.2rem]" />
                                <p>1 parking lot</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div>
                                <h1 className="text-[1.5rem] font-bold">About this property</h1>
                                <p className="text-[0.9rem] mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est exercitationem illo adipisci ducimus accusantium recusandae perspiciatis quaerat in molestiae provident? Enim culpa deleniti repellat rerum aut aspernatur error odit necessitatibus.</p>
                            </div>
                            <div className="mt-5 border-b-1 border-[#e6e6e6] pb-4">
                                <div className="grid grid-cols-2 justify-items-start text-[0.9rem]">
                                    <div>
                                        <h1 className="font-semibold">Lekki Scheme 2</h1>
                                        <p className="mt-2">PROPERTY ADDRESS</p>
                                    </div>
                                    <div>
                                        <h1 className="font-semibold" >Yes</h1>
                                        <p>PARKING SPACE</p>
                                    </div>
                                    <div className="mt-5">
                                        <h1 className="font-semibold">4 Bedroom Duplex</h1>
                                        <p className="mt-2">SUBTYPE</p>
                                    </div>
                                    <div className="mt-5">
                                        <h1 className="font-semibold">Yes</h1>
                                        <p className="mt-2">FURNISHED</p>
                                    </div>
                                    <div className="mt-5">
                                        <h1 className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus illo doloremque, officiis ut deserunt non numquam voluptatibus et reprehenderit? Asperiores necessitatibus, ea aliquid obcaecati quia aliquam a dolor ab suscipit!</h1>
                                        <p className="mt-2">FACILITIES</p>
                                    </div>
                                    <div className="mt-5">
                                        <h1 className="font-semibold">Newly Built</h1>
                                        <p className="mt-2">Property Address</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-1 border-[#e6e6e6] mt-5 p-3 rounded-lg">
                                    <div className="flex items-center">
                                        <img src="/image1.jpg" className="w-10 h-10 rounded-full" alt="" />
                                        <div className="ml-3">
                                            <h1 className=" font-bold">Badejo Olamide</h1>
                                            <p className="text-[0.7rem]">Risk Manager</p>
                                        </div>

                                    </div>
                                    <h1 className="mt-2 font-medium">Listed By Bodija Properties LLC</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" w-[370px] shadow-lg">
                            <div className="h-[330px]">
                                <img src="/image1.jpg"className=" object-cover h-full w-full" alt="" />
                            </div>
                            <div className="px-7 py-5">
                                <div>
                                    <div className="flex justify-between items-center ">
                                        <h1 className="text-[2rem] font-bold">$450000</h1>
                                        <FavoriteOutlined />
                                    </div>
                                    <div className="pt-3 pb-5 border-b-1 border-[#cacaca]">
                                        <p>Property address, No 12, Shop U16, Joke plaza, Bodija</p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                <Link to="/InspectPage">
                                    <input className=" cursor-pointer  py-4 rounded-lg bg-[black] text-white mt-5 border-1 border-[#cacaca] w-full block" type="button" value="Request Inspection" />
                                </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="mt-20">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[2rem] font-medium">From the same Realtor</h1>
                        <button className="bg-[black] text-white px-5 py-3 rounded-lg text-[15px] mr-4" type="button">Browse More Properties</button>
                    </div>
                    <div className="grid lg:flex justify-center items-center flex-wrap grid-cols-2 sm:grid-cols-2 gap-2  md:gap-10 content-center justify-items-center ">
                        <div className=" mt-10 sm:h-[540px] h-[350px] card lg:w-[23.3rem] sm:w-[full] w-full  text-[#252525B2] shadow-xl">
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
                                    <h1 className="sm:text-[25px]  text-[10px] font-bold" >
                                        White House Villa
                                    </h1>
                                    <Favorite className="text-[red] " sx={{ fontSize: "1rem" }} />
                                </div>
                                <div className="mt-1">
                                    <p className=" sm:text-[15px] text-[8px]">Property address, No 12, Shop U16, Joke plaza, Bodija</p>
                                </div>
                                <div className=" sm:flex block sm:mt-5  justify-between items-center py-2 border-b-1  border-[#bebdbd]">
                                    <p className=" sm:text-[15px] lg:text-[15px] text-[8px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBedDouble /></span>4 beds</p>
                                    <p className="sm:text-[14px] text-[8px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBath /></span> 2 bathrooms</p>
                                    <p className=" sm:text-[14px] text-[8px]"><span className="inline-block align-middle text-[0.8rem] sm:text-[1rem] mr-2"><PiSquareHalfBold /></span>2137 sqft</p>

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
                        <div className=" mt-10 sm:h-[540px] h-[350px] card lg:w-[23.3rem] sm:w-[full] w-full  text-[#252525B2] shadow-xl">
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
                                    <h1 className="sm:text-[25px]  text-[10px] font-bold" >
                                        White House Villa
                                    </h1>
                                    <Favorite className="text-[red] " sx={{ fontSize: "1rem" }} />
                                </div>
                                <div className="mt-1">
                                    <p className=" sm:text-[15px] text-[8px]">Property address, No 12, Shop U16, Joke plaza, Bodija</p>
                                </div>
                                <div className=" sm:flex block sm:mt-5  justify-between items-center py-2 border-b-1  border-[#bebdbd]">
                                    <p className=" sm:text-[15px] lg:text-[15px] text-[8px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBedDouble /></span>4 beds</p>
                                    <p className="sm:text-[14px] text-[8px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBath /></span> 2 bathrooms</p>
                                    <p className=" sm:text-[14px] text-[8px]"><span className="inline-block align-middle text-[0.8rem] sm:text-[1rem] mr-2"><PiSquareHalfBold /></span>2137 sqft</p>

                                </div>
                                <div className="sm:flex justify-between items-center sm:py-5 py-2  block">
                                    <h1 className="lg:text-[25px] sm:text-[25px] text-[15px] font-bold">
                                        $45,000

                                    </h1>
                                    <button className="bg-[black] cursor-pointer text-white  sm:px-8 px-0 mt-2  sm:py-2 py-[0.5rem] rounded-lg lg:text-[15px] sm:text-[15px] text-[10px] w-full sm:w-[180px]" type="button"> <span className="mr-2"><NorthEastOutlined sx={{ fontSize: "17px" }} /></span>View More</button>
                                </div>
                            </div>

                        </div>
                        <div className=" mt-10 sm:h-[540px] h-[350px] card lg:w-[23.3rem] sm:w-[full] w-full  text-[#252525B2] shadow-xl">
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
                                    <h1 className="sm:text-[25px]  text-[10px] font-bold" >
                                        White House Villa
                                    </h1>
                                    <Favorite className="text-[red] " sx={{ fontSize: "1rem" }} />
                                </div>
                                <div className="mt-1">
                                    <p className=" sm:text-[15px] text-[8px]">Property address, No 12, Shop U16, Joke plaza, Bodija</p>
                                </div>
                                <div className=" sm:flex block sm:mt-5  justify-between items-center py-2 border-b-1  border-[#bebdbd]">
                                    <p className=" sm:text-[15px] lg:text-[15px] text-[8px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBedDouble /></span>4 beds</p>
                                    <p className="sm:text-[14px] text-[8px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBath /></span> 2 bathrooms</p>
                                    <p className=" sm:text-[14px] text-[8px]"><span className="inline-block align-middle text-[0.8rem] sm:text-[1rem] mr-2"><PiSquareHalfBold /></span>2137 sqft</p>

                                </div>
                                <div className="sm:flex justify-between items-center sm:py-5 py-2  block">
                                    <h1 className="lg:text-[25px] sm:text-[25px] text-[15px] font-bold">
                                        $45,000

                                    </h1>
                                    <button className="bg-[black] cursor-pointer text-white  sm:px-8 px-0 mt-2  sm:py-2 py-[0.5rem] rounded-lg lg:text-[15px] sm:text-[15px] text-[10px] w-full sm:w-[180px]" type="button"> <span className="mr-2"><NorthEastOutlined sx={{ fontSize: "17px" }} /></span>View More</button>
                                </div>
                            </div>

                        </div>
                        <div className=" mt-10 sm:h-[540px] h-[350px] card lg:w-[23.3rem] sm:w-[full] w-full  text-[#252525B2] shadow-xl">
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
                                    <h1 className="sm:text-[25px]  text-[10px] font-bold" >
                                        White House Villa
                                    </h1>
                                    <Favorite className="text-[red] " sx={{ fontSize: "1rem" }} />
                                </div>
                                <div className="mt-1">
                                    <p className=" sm:text-[15px] text-[8px]">Property address, No 12, Shop U16, Joke plaza, Bodija</p>
                                </div>
                                <div className=" sm:flex block sm:mt-5  justify-between items-center py-2 border-b-1  border-[#bebdbd]">
                                    <p className=" sm:text-[15px] lg:text-[15px] text-[8px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBedDouble /></span>4 beds</p>
                                    <p className="sm:text-[14px] text-[8px]"><span className="inline-block align-middle sm:text-[1rem] text-[0.8rem] mr-2"><LuBath /></span> 2 bathrooms</p>
                                    <p className=" sm:text-[14px] text-[8px]"><span className="inline-block align-middle text-[0.8rem] sm:text-[1rem] mr-2"><PiSquareHalfBold /></span>2137 sqft</p>

                                </div>
                                <div className="sm:flex justify-between items-center sm:py-5 py-2  block">
                                    <h1 className="lg:text-[25px] sm:text-[25px] text-[15px] font-bold">
                                        $45,000

                                    </h1>
                                    <button className="bg-[black] cursor-pointer text-white  sm:px-8 px-0 mt-2  sm:py-2 py-[0.5rem] rounded-lg lg:text-[15px] sm:text-[15px] text-[10px] w-full sm:w-[180px]" type="button"> <span className="mr-2"><NorthEastOutlined sx={{ fontSize: "17px" }} /></span>View More</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default PropertiesDetails;