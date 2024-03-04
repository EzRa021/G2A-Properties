import { FaRegEye } from "react-icons/fa";
import { FaEye, FaUserPlus } from "react-icons/fa6";
import { LuUserPlus } from "react-icons/lu";
import Rating from '@mui/material/Rating';

const OurPage = () => {

    return (
        <>
            <div className="xl:mx-[5rem] mb-[10rem] sm:mx-[2rem] mx-6 ">
                <div className="bg-[url('/public/bg4.jpg')] bg-cover bg-no-repeat w-full lg:h-[100vh] h-[350px] flex justify-center rounded-2xl mt-20">
                    <div className="w-[50rem] text-center sm:mt-20 mt-10">
                        <h1 className="sm:text-[3rem] text-[1.5rem] px-2 font-bold sm:leading-[60px] leading-[30px] ">We are the best when it
                            comes to seeing what u see.</h1>
                        <p className="lg:text-[1.5rem] text-[0.8rem] my-5">Welcome to G2A Real Estate, where innovation meets real estate excellence. Explore our platform designed to redefine your property experience. </p>
                        <button className="bg-orange text-white px-10 py-3 rounded-lg text-[15px] mr-4" type="button">Get Started Here</button>
                    </div>
                </div>es
                <div className="flex justify-center items-center text-center mt-10">
                    <div className="lg:w-[55%] w-[90%]">
                        <h1 className="lg:text-[45px] text-[30px] lg:leading-[50px] leading-[30px] lg:mt-5 mt-12 font-bold">Our Business Partners</h1>
                        <p className="sm:text-[18px] text-[11px] lg:mt-10 mt-4">At G2A Properties, we are proud to collaborate with trusted business partners who share our commitment to excellence. Together, we create exceptional real estate solutions that redefine industry standards.</p>
                        <div className="flex justify-center items-center lg:mt-10 mt-5 ">
                            <img className="lg:w-[60%] w-[50%]" src="/Image6.png" alt="" srcset="" />
                        </div>

                    </div>

                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-20">
                    <div>
                        <img src="/image4.png" alt="" />

                    </div>
                    <div className="mt-10">
                        <h3 className="font-bold text-[#b3b2b2]">Who we are</h3>
                        <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">
                            Welcome to <span className="text-orange"> <br className="sm:hidden block" /> G2A Properties</span>
                        </h1>
                        <p className="sm:text-[1rem] text-[0.6rem]">G2A Properties is a leading full-service real estate and property solutions enterprise, operating under the name G2A Integrated Services Limited. Since our inception in 2014, our primary vision has been to provide affordable housing opportunities that empower individuals, enhance lives, and foster vibrant communities. <br /><br /><br /><br />


                            With a strong commitment to excellence, we have been instrumental in supporting Nigerians in realizing their dreams of property acquisition, housing development, property valuation, title processing, property verification, and offering a range of allied support and consultancy services.</p>
                    </div>
                </div>
                <div className=" mt-20 ">
                    <div className="grid xl:grid-cols-3 grid-cols-1 gap-5">

                        <div className="item lg:w-[360px]  w-full">
                            <div className=" p-6 border-[1px] rounded-xl border-[black]">
                                <div>
                                    <Rating name="read-only" value="9" readOnly />

                                </div>
                                <div className="my-4">
                                    <p className="sm:text-[1rem] text-[0.5rem] ">Working with G2A Properties in Nigeria was a game-changer for us. Their professionalism, and commitment getting us the perfect property surpassed all our expectations. I recommend them </p>
                                </div>
                                <div className="flex items-center">
                                    <div className="">
                                        <img src="/Image7.png" className="rounded-full w-14 h-14" alt="" srcset="" />

                                    </div>
                                    <div className="ml-5">
                                        <h1 className="font-semibold sm:text-[1rem] text-[0.7rem] ">Segun Afolyan</h1>
                                        <p className="sm:text-[1rem] text-[0.7rem] ">Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item lg:w-[360px]  w-full">
                            <div className=" p-6 border-[1px] rounded-xl border-[black]">
                                <div>
                                    <Rating name="read-only" value="9" readOnly />

                                </div>
                                <div className="my-4">
                                    <p className="sm:text-[1rem] text-[0.5rem] ">Working with G2A Properties in Nigeria was a game-changer for us. Their professionalism, and commitment getting us the perfect property surpassed all our expectations. I recommend them </p>
                                </div>
                                <div className="flex items-center">
                                    <div className="">
                                        <img src="/Image7.png" className="rounded-full w-14 h-14" alt="" srcset="" />

                                    </div>
                                    <div className="ml-5">
                                        <h1 className="font-semibold sm:text-[1rem] text-[0.7rem] ">Segun Afolyan</h1>
                                        <p className="sm:text-[1rem] text-[0.7rem] ">Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item lg:w-[360px]  w-full">
                            <div className=" p-6 border-[1px] rounded-xl border-[black]">
                                <div>
                                    <Rating name="read-only" value="9" readOnly />

                                </div>
                                <div className="my-4">
                                    <p className="sm:text-[1rem] text-[0.5rem] ">Working with G2A Properties in Nigeria was a game-changer for us. Their professionalism, and commitment getting us the perfect property surpassed all our expectations. I recommend them </p>
                                </div>
                                <div className="flex items-center">
                                    <div className="">
                                        <img src="/Image7.png" className="rounded-full w-14 h-14" alt="" srcset="" />

                                    </div>
                                    <div className="ml-5">
                                        <h1 className="font-semibold sm:text-[1rem] text-[0.7rem] ">Segun Afolyan</h1>
                                        <p className="sm:text-[1rem] text-[0.7rem] ">Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mt-32">
                    <div className="w-full">
                        <div className="flex justify-center items-center gap-3 ">
                            <FaRegEye className="text-orange text-[2rem]" />
                            <h1 className="text-[1.2rem] font-bold">Our Vision</h1>
                        </div>
                        <div className="lg:mt-10 mt-5">
                            <p className=" text-center sm:text-[1rem] text-[0.5rem] ">Our corporate vision is to provide affordable housing, opportunities for people, improve their lives and strengthen the community.</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-center items-center gap-3">
                            <LuUserPlus className="text-orange text-[2rem]" />
                            <h1 className="text-[1.2rem] font-bold">OUR CORE VALUES</h1>
                        </div>
                        <div className="lg:mt-10 mt-5">
                            <p className=" text-center sm:text-[1rem] text-[0.5rem]">Our business practice, philosophy and orientation revolves around these espoused cardinal value and belief systems with which we initiate, execute, implement and accomplish our vision, projects and solutions. Our watchword is SAFETY, PROFITABILITY AND TRANSPARENCY.</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-center items-center gap-3">
                            <FaRegEye className="text-orange text-[2rem]" />
                            <h1 className="text-[1.2rem] font-bold">OUR MISSION</h1>
                        </div>
                        <div className="lg:mt-10 mt-5">
                            <p className=" sm:text-[1rem] text-[0.5rem] text-center">Our Corporate mission is to explait our expertise and knowledge to help people become home owners by building smart society and solutions each day brick by brick</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center bg-[#ECF1F2] lg:pt-28 pt-10 pb-20">
                <div className="lg:w-[70%] w-[90%] ">
                    <h1 className=" lg:text-[50px] text-[30px] font-medium text-center">Medium length section heading goes here</h1>
                    <p className=" text-center lg:leading-leading leading-[20px] mt-2 lg:mx-36 mx-0 lg:text-[18px] text-[10px]"> Hold and temporarily lock STX, Stacks’ native currency, and support the network’s security and consensus. As a reward, you’ll earn BTC.</p>
                    <div className="flex justify-center items-center">
                        <button className="bg-blue cursor-pointer text-white px-5 py-4 rounded-lg text-[15px] mt-5" type="button">Start Here</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurPage;