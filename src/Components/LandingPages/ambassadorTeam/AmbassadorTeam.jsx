const AmbassadorTeam = () => {
    return (
        <>
            <div>
                <div className=" relative">
                    <img src="/bg3.png" alt="Image" className="w-full" />
                    <div className="flex justify-center items-center">
                    <h1 className="sm:text-[2rem] text-[1rem] text-white font-bold text-center absolute z-9999 xl:top-20 top-5 sm:top-10 ">Become Ambassador Team</h1>
                    </div>
                </div>
                <div className="xl:px-[300px] sm:px-[100px] px-5">
                    <div className="sm:my-10 my-7">
                        <p className="font-semibold sm:text-[1rem] text-[0.5rem]">Register and become part of our marketing team, Fill up the details below
                            and wait for a reply in your whatsapp from our support wetin 24-48 hours.</p>
                    </div>
                    <div className="my-10">
                        
                        <div className="py-5 shadow-md sm:text-[0.8rem] font-medium text-[0.6rem] px-5 ">
                            <p>Email Address</p>
                            <input type="email" placeholder="Enter your email address" className="outline-none sm:w-[400px] w-full mt-3 py-2 border-b-2 border-[#c0c0c0]" />
                        </div>
                        <div className="py-5 mt-5 shadow-md  sm:text-[0.8rem] text-[0.6rem] px-5 ">
                            <p>Full Name</p>
                            <input type="text" placeholder="Enter your email address" className="outline-none sm:w-[400px] w-full mt-3 py-2 border-b-2 border-[#c0c0c0]" />
                        </div>
                        <div className="py-5 mt-5 shadow-md  sm:text-[0.8rem] text-[0.6rem] px-5 ">
                            <p>Phone number ( Whatsapp Preferably)*</p>
                            <input type="tel" placeholder="Enter your email address" className="outline-none sm:w-[400px] w-full mt-3 py-2 border-b-2 border-[#c0c0c0]" />
                        </div>
                        <div className="py-5 mt-5 shadow-md sm:text-[0.8rem] text-[0.6rem] px-5 ">
                            <p>Do u have experience as a marketer*</p>
                            <input type="text" placeholder="Enter your email address" className="outline-none sm:w-[400px] w-full mt-3 py-2 border-b-2 border-[#c0c0c0]" />
                        </div>
                        <div className="py-5 mt-5 shadow-md sm:text-[0.8rem] text-[0.6rem] px-5 ">
                            <p>Where do u live ( State, City, Address )*</p>
                            <input type="text" placeholder="Enter your email address" className="outline-none sm:w-[400px] w-full mt-3 py-2 border-b-2 border-[#c0c0c0]" />
                        </div>
                        <div className="py-5 mt-5 shadow-md sm:text-[0.8rem] text-[0.6rem] px-5 ">
                            <p>What will u be offering to be a part of us*</p>
                            <input type="text" placeholder="Enter your email address" className="outline-none sm:w-[400px] w-full mt-3 py-2 border-b-2 border-[#c0c0c0]" />
                        </div>
                        <div className="py-5 mt-5 shadow-md sm:text-[0.8rem] text-[0.6rem] px-5 ">
                            <p>List your social media handles link*</p>
                            <input type="text" placeholder="Enter your email address" className="outline-none sm:w-[400px] w-full mt-3 py-2 border-b-2 border-[#c0c0c0]" />
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default AmbassadorTeam;