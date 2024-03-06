import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
const SignIn = () => {
    return ( 
        <>
         <div className="grid lg:grid-cols-2 grid-cols-1 content-center justify-items-center">
                <div className="w-full flex justify-center items-center  text-center lg:px-[100px] sm:px-[100px] px-[30px] xl:mt-[-200px] mt-[200px]  ">
                    <div className="w-full">
                        <div>
                            <h1 className=" mb-4 font-bold sm:text-[3rem] text-[2rem]">Sign In</h1>
                            <p className="mb-7 sm-text-[1rem] text-[0.9rem]">Create Your Account to Begin Your Real Estate Journey</p>
                        </div>
                        <div className="relative w-full flex items-center">
                            <MdOutlineEmail className="absolute ml-4 text-[1.4rem] " />
                            <input className=" w-full sm:py-3 py-2 outline-none rounded-lg pl-12 border-1 border-[#e2e2e2] placeholder:text-[black] placeholder:text-[12px]" placeholder="Email Address" type="text" />
                        </div>
                        <div className="mt-5 pb-7 border-b-1 border-[#e2e2e2]">
                         <NavLink to="/realtor">
                            <button className=" w-full sm:py-3 py-2 bg-orange text-[white] rounded-lg">
                                Continue
                            </button>
                         </NavLink>
                            
                        </div>
                        <div className="mt-7">
                            <p>Already have an account? <NavLink to="/SignUp"><span className="text-orange">Sign Up</span></NavLink></p>
                        </div>
                    </div>

                </div>
                <div className="w-full lg:block hidden">
                    <img src="/Image8.png" alt="" />
                </div>
            </div>
        </>
     );
}
 
export default SignIn;