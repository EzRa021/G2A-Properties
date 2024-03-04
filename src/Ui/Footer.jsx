import Facebook from '@mui/icons-material/Facebook';
import { Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
const Footer = () => {
    return (
        <footer className=" bg-blue text-white overflow-hidden ">
            <div className="lg:p-[60px] p-5">
                <div className="grid xl:grid-cols-3 grid-cols-2 gap-5 border-b-2 lg:pb-20 pb-2 border-[#818181]">
                    <div className="lg:w-[400px] w-full sm:text-[13px] text-[8px] mr-7">
                        <img src="/Logo.png" alt="" />
                        <p className="mt-5">G2A Properties is a leading full-service real estate and property solutions company, operating under the registered name G2A Integrated Services Limited.</p>
                    </div>
                    <div className="sm:text-[13px] text-[8px] mr-20  lg:w-[300px] w-full">
                        <p className="font-bold sm:text-[15px] text-[10px]">Information</p>
                        <ul>
                            <li className="lg:mt-5 mt-4">Home</li>
                            <li className="lg:mt-5 mt-2">About us</li>
                            <li className="lg:mt-5 mt-2">Become an ambassador</li>
                            <li  className="lg:mt-5 mt-2" >Investment and properties</li>
                            <li  className="lg:mt-5 mt-2">FAQs</li>

                        </ul>

                    </div>
                    <div className="xl:col-auto col-span-2 sm:text-[13px] text-[8px] lg:w-[450px] w-full">
                        <p  className="font-bold sm:text-[15px] text-[10px]">Subscribe</p>
                        <p className="lg:my-5 my-3">Join our newsletter to stay up to date on features and releases.</p>
                        <div className="flex  items-center">
                            <input type="text" placeholder="Enter your email"  className="sm:text-[15px] text-[10px] lg:w-[300px] text-[black] outline-none w-full lg:py-3 py-2 px-3 rounded-l-lg" />
                        <button className=" bg-orange  lg:w-[100px] lg:py-3 py-2 px-3 rounded-r-lg sm:text-[15px] text-[10px]">Subscribe</button>
                        </div>
                        
                        <p className="mt-5 sm:text-[12px] text-[8px] underline sm:w-64 w-36 ">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>

                    </div>
                </div>
                <div className='sm:text-[13px] text-[8px] lg:mt-7 mt-2 block lg:flex justify-between items-center'>
                    <div>
                        <h1>
                            2024 G2A Properties.All right reserved.
                        </h1>
                    </div>
                    <div className=' lg:mr-[450px] mr-0 flex gap-5 '>
                        <p className=' underline'>Privacy Policy</p>
                        <p className=' underline'>Terms of Service</p>
                        <p className=' underline'>Cookies Settings</p>
                    </div>
                    <div className="flex  text-center  items-center mt-2 lg:mt-0 ">
                        <div className='mr-2'>
                            <p>connect with us</p>
                        </div>
                        <div className='flex justify-center items-center '>
                            <span className='px-1'><Facebook sx={{ fontSize: "18px"}}/></span>
                            <span className='px-1'>  <LinkedIn sx={{ fontSize: "18px" }}/></span>
                            <span className='px-1'> <Instagram sx={{ fontSize: "18px" }}/></span>
                            <span className='px-1'><WhatsApp sx={{ fontSize: "18px" }}  /></span>

                        </div>


                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;