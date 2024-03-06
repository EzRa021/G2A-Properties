import { FilterListOutlined, KeyboardArrowDown, SearchOutlined } from "@mui/icons-material";
import { Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Favorite, NorthEastOutlined} from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { LuBath } from "react-icons/lu";
import { PiSquareHalfBold } from "react-icons/pi";
import { LuBedDouble } from "react-icons/lu";
import Pagination from '@mui/material/Pagination';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { NavLink } from "react-router-dom";

const Properties = () => {
    return (
        <>
            <div className="lg:mx-[3rem] mx-[1rem]  my-20 overflow-hidden">
                <div>
                    <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">Properties for Sale</h1>
                </div>
                <div className="sm:mt-[7rem]  mt-[1rem] xl:p-5 py-5 shadow-xl rounded-2xl">
                    <div className="xl:flex justify-center  items-center">
                        <div className="xl:border-r-2 px-5 border-[#B3C2C7]">
                            <div className="py-2">
                                <h1 className="text-[0.8rem] sm:text-[1rem] text-[#252525]">I am looking to</h1>
                            </div>
                            <div className="">
                                <Dropdown backdrop="blur">
                                    <DropdownTrigger>
                                        <Button className=" bg-white sm:text-[1.1rem] text-[0.9rem] font-medium p-0 m-0">
                                            <h1 className="">Buy apartments</h1>
                                            <span className=" text-[1.7rem] text-[#B3C2C7] ml-20">
                                                <KeyboardArrowDown sx={{ fontSize: "2.4rem" }} />
                                            </span>
                                        </Button>

                                    </DropdownTrigger>
                                    <DropdownMenu variant="faded" aria-label="Static Actions">
                                        <DropdownItem key="new">New file</DropdownItem>
                                        <DropdownItem key="copy">Copy link</DropdownItem>
                                        <DropdownItem key="edit">Edit file</DropdownItem>
                                        <DropdownItem key="delete" className="text-danger" color="danger">
                                            Delete file
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                        </div>
                        <div className=" xl:border-r-2 px-5 border-[#B3C2C7]">
                            <div className="py-2">
                                <h1 className="text-[0.8rem] sm:text-[1rem] text-[#252525]">Location</h1>
                            </div>
                            <div className="">
                                <Dropdown backdrop="blur">
                                    <DropdownTrigger>
                                        <Button className=" bg-white sm:text-[1.1rem] text-[0.9rem] font-medium p-0 m-0">
                                            <h1 className=" text-[#252525]">Gwarinpa, Abuja</h1>
                                            <span className=" text-[1.7rem] text-[#B3C2C7] ml-20">
                                                <KeyboardArrowDown sx={{ fontSize: "2.4rem" }} />
                                            </span>
                                        </Button>

                                    </DropdownTrigger>
                                    <DropdownMenu variant="faded" aria-label="Static Actions">
                                        <DropdownItem key="new">New file</DropdownItem>
                                        <DropdownItem key="copy">Copy link</DropdownItem>
                                        <DropdownItem key="edit">Edit file</DropdownItem>
                                        <DropdownItem key="delete" className="text-danger" color="danger">
                                            Delete file
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                        </div>
                        <div className="xl:border-r-2 px-5 border-[#B3C2C7]">
                            <div className="py-2">
                                <h1 className="text-[0.8rem] text-[#252525]">Price Range</h1>
                            </div>
                            <div className="">
                                <Dropdown backdrop="blur">
                                    <DropdownTrigger>
                                        <Button className=" bg-white sm:text-[1.1rem] text-[0.9rem] font-medium p-0 m-0">
                                            <h1 className="">$40,000 - $300,000</h1>
                                            <span className=" text-[1.7rem] text-[#B3C2C7] ml-14">
                                                <KeyboardArrowDown sx={{ fontSize: "2.4rem" }} />
                                            </span>
                                        </Button>

                                    </DropdownTrigger>
                                    <DropdownMenu variant="faded" aria-label="Static Actions">
                                        <DropdownItem key="new">New file</DropdownItem>
                                        <DropdownItem key="copy">Copy link</DropdownItem>
                                        <DropdownItem key="edit">Edit file</DropdownItem>
                                        <DropdownItem key="delete" className="text-danger" color="danger">
                                            Delete file
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                        </div>
                        <div className="sm:grid grid-cols-2 sm:mt-5 px-4 block">
                            <button type="button" className="sm:py-3 py-2 px-2 mt-3 sm:mt-0  lg:w-full w-full text-[0.7rem]  border-1 border-[black] mr-2 font-semibold rounded-lg"><span className="mr-2"><FilterListOutlined /></span>Advance Search</button>
                            <button type="button" className="sm:py-3 py-2 px-2  mt-3 sm:mt-0 lg:w-full w-full text-[0.7rem]   bg-orange text-white sm:ml-2 ml-0 font-semibold rounded-lg"><span><SearchOutlined /> Search</span></button>
                        </div>
                    </div>

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
                <div className="flex justify-end mt-10">
                    <Pagination count={100} color="primary" shape="rounded" size="large" />
                </div>

            </div>

        </>

    );
}

export default Properties;



