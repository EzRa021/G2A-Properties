import React from "react";
// import image2 from '../../images/icon.png'
import { BsBank, BsGraphUp } from "react-icons/bs";
// import AllRealtorsTable from "./AllRealtorsTable";

// import AllRealtorsTable from "./AllRealtorsTable";


const AllRealtors = () => {
  
    return (
        <>
            <div>
                <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 grid-cols-1 xl:grid-cols-4 gap-5 mt-5">
                    <div className="py-3 px-4 border rounded-xl border-[#E4E7EC] flex justify-between items-center">
                        <div >
                            <p className='text-[0.9rem]'>Total No. of Realtors</p>
                            <h1 className="my-2 font-bold text-[1.2rem]">3000</h1>
                            <p className='text-[0.7rem] font-bold text-[#04802E]'><span className=" bg-[#E7F6EC] px-1 pb-1 rounded-lg mr-3 "><BsGraphUp className="inline mr-2" />5%</span>Healthy</p>
                        </div>
                        <div className="p-2 rounded-full border" >
                            <BsBank />
                        </div>
                    </div>
                    <div className="py-3 px-4 border rounded-xl border-[#E4E7EC] flex justify-between items-center">
                        <div >
                            <p className='text-[0.9rem]'>New Registration</p>
                            <h1 className="font-bold my-2 text-[1.2rem]">12</h1>
                            <p className='text-[0.7rem] font-bold text-[#04802E]'><span className=" bg-[#E7F6EC] px-1 pb-1 rounded-lg mr-3 "><BsGraphUp className="inline mr-2" />5%</span>Healthy</p>
                        </div>
                        <div className="p-2 rounded-full border" >
                            <BsBank />
                        </div>
                    </div>
                    <div className="py-3 px-4 border rounded-xl border-[#E4E7EC] flex justify-between items-center">
                        <div >
                            <p className='text-[0.9rem]'>Pending Approval </p>
                            <h1 className="font-bold my-2 text-[1.2rem]">40</h1>
                            <p className='text-[0.7rem] font-bold text-[#9E0A05]'><span className=" bg-[#FBEAE9] px-1 pb-1 rounded-lg mr-3 "><BsGraphUp className="inline mr-2" />5%</span>Unhealthy</p>
                        </div>
                        <div className="p-2 rounded-full border" >
                            <BsBank />
                        </div>
                    </div>
                    <div className="py-3 px-4 border rounded-xl border-[#E4E7EC] flex justify-between items-center">
                        <div >
                            <p className='text-[0.9rem]'>No of Blocked Realtors</p>
                            <h1 className="font-bold my-2 text-[1.2rem]">8.7k+</h1>
                            <p className='text-[0.7rem] font-bold text-[#04802E]'><span className=" bg-[#E7F6EC] px-1 pb-1 rounded-lg mr-3 "><BsGraphUp className="inline mr-2" />5%</span>Healthy</p>
                        </div>
                        <div className="p-2 rounded-full border" >
                            <BsBank />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-5 pb-6 text-[0.9rem] border-t-1 border-b-1 border-[#E4E7EC]">
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                        <p className="pt-5">Elon Musks</p>
                    </div>
                </div>
               
            </div>
        </>
    );
}

export default AllRealtors;