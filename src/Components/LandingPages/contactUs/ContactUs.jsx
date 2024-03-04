import { RiMailSendLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



const ContactUs = () => {
    return (
        <>
            <div className="sm:bg-[#f8f8f8] bg-white sm:pb-36 pb-5 overflow-hidden">
                <div className=" sm:h-96 h-32  bg-cover bg-[url('/bg1.png')] flex justify-center items-center ">
                    <h1 className="sm:text-[3.5rem] text-[1rem]  font-semibold text-white">You want to <br /> contact us?</h1>
                </div>
                <div className="sm:pt-20 pt-10 lg:px-[5.5rem] px-[1rem] pb-10 xl:flex justify-center items-center gap-6 block ">
                    <div className="flex justify-center bg-white rounded-lg items-center xl:w-[22.5rem] w-full border-1 sm:py-12 py-7 border-[black]">
                        <div className=" rounded-full sm:text-[2rem] text-[1rem] text-white bg-orange sm:bg-blue sm:h-20 h-14 sm:w-20 w-14 flex justify-center items-center">
                            <RiMailSendLine />

                        </div>
                        <div className="ml-3">
                            <h1 className=" sm:text-[1.2rem] text-[0.7rem] font-bold">Email address</h1>
                            <p className=" sm:text-[1.2rem] text-[0.7rem] text-[#808080] font-normal">badejoezra0@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-3 xl:mt-0 bg-white rounded-lg items-center xl:w-[22.5rem] w-full border-1 sm:py-12 py-7 border-[black]">
                        <div className=" rounded-full sm:text-[2rem] text-[1rem] text-white bg-orange sm:h-20 h-14 sm:w-20 w-14 flex justify-center items-center">
                            <RiMailSendLine />

                        </div>
                        <div className="ml-3">
                            <h1 className=" sm:text-[1.2rem] text-[0.7rem] font-bold">Our address</h1>
                            <p className=" sm:text-[1.2rem] text-[0.7rem] text-[#808080] font-normal">16, Gwani street,Wuse<br /> Zone 4, Abuja, Nigeria</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-3 xl:mt-0 bg-white rounded-lg items-center xl:w-[22.5rem] w-full border-1 sm:py-12 py-7 border-[black]">
                        <div className=" rounded-full sm:text-[2rem] text-[1rem] text-white bg-orange sm:h-20 h-14 sm:w-20 w-14 flex justify-center items-center">
                            <RiMailSendLine />

                        </div>
                        <div className="ml-3">
                            <h1 className=" sm:text-[1.2rem] text-[0.7rem] font-bold">Hours</h1>
                            <p className=" sm:text-[1.2rem] text-[0.7rem] text-[#808080] font-normal">Mon – Sat: 9am – 5pm <br />Sun: closed</p>
                        </div>
                    </div>
                </div>
                <div className="xl:mx-[5.5rem] mx-[1rem] sm:py-20 py-0 block xl:flex justify-center gap-10 items-center  sm:px-20 px-0 bg-white rounded-lg ">
                    <div className="xl:w-[40%] w-full ">
                        <p className="sm:text-[1.5rem] text-[0.8rem]  text-[#808080] font-bold">Message us</p>
                        <h1 className="sm:text-[2.5rem] text-[1.5rem] font-medium mt-5">Do you have any Question? feel free to contact with us.</h1>
                        <p className="sm:text-[0.9rem] text-[0.6rem] mt-5">Contact us today and let our team assist you in starting your real estate journey.</p>
                        <div className=' hidden mt-36 xl:flex justify-start items-center text-[2rem] text-orange '>
                            <span className='px-1 te '>
                                <FaFacebookSquare /></span>
                            <span className='px-1'>
                                <FaLinkedin /></span>
                            <span className='px-1'>
                                <FaInstagram /></span>
                            <span className='px-1'><FaWhatsapp />
                            </span>
                        </div>
                    </div>
                    <div className="xl:w-[60%] w-full lg:mt-[-120px] mt-10 xl:ml-20 ml-0">
                        <form className="grid grid-cols-2 sm:gap-5 gap-3">
                            <div className="sm:mt-7 mt-3">
                                <input placeholder="Full Name" className=" rounded-lg text-[black] outline-none px-5 placeholder:text-[black]  w-full placeholder:sm:text-[14px] placeholder:text-[10px] sm:py-5 py-2 bg-[#e0e0e0]" type="text" />
                            </div>
                            <div className="sm:mt-7 mt-3">
                                <input placeholder="Full Name" className=" rounded-lg text-[black] outline-none px-5 placeholder:text-[black] w-full placeholder:sm:text-[14px] placeholder:text-[10px] sm:py-5 py-2 bg-[#e0e0e0]" type="text" />
                            </div>
                            <div className="sm:mt-7 mt-3">
                                <input placeholder="Full Name" className=" rounded-lg text-[black] outline-none px-5 placeholder:text-[black] w-full placeholder:sm:text-[14px] placeholder:text-[10px] sm:py-5 py-2 bg-[#e0e0e0]" type="text" />
                            </div>
                            <div className="sm:mt-7 mt-3">
                                <input placeholder="Full Name" className=" rounded-lg text-[black] outline-none px-5 placeholder:text-[black] w-full placeholder:sm:text-[14px] placeholder:text-[10px] sm:py-5 py-2 bg-[#e0e0e0]" type="text" />
                            </div>
                            <div className="sm:mt-7 mt-3 col-span-2">
                                <textarea placeholder="Message" className=" resize-none w-full h-36 rounded-lg  text-[black] outline-none px-5 placeholder:text-[black] placeholder:sm:text-[14px] placeholder:text-[10px]  sm:py-5 py-2 bg-[#e0e0e0]" ></textarea>

                            </div>
                            <div className="mt-3">
                                <button className=" bg-blue cursor-pointer text-white sm:px-5  px-2 py-3 rounded-lg text-[10px] sm:text-[15px]  " type="button">Send message</button>

                            </div>
                        </form>
                        <div className=' xl:hidden mt-10 flex justify-start items-center text-[1.5rem] text-orange '>
                            <span className='px-1  '>
                                <FaFacebookSquare /></span>
                            <span className='px-1'>
                                <FaLinkedin /></span>
                            <span className='px-1'>
                                <FaInstagram /></span>
                            <span className='px-1'><FaWhatsapp />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;