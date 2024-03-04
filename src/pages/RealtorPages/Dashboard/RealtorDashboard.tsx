
import DefaultLayout from "../../../Realtorlayout/DefaultLayout";

// import image2 from '../../images/icon.png'
import { BsBank, BsGraphUp } from "react-icons/bs";
import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";


const RealtorDashboard = () => {

    const rows = [
        {
            key: "1",
            name: "Tony Reichert",
            role: "CEO",
            status: "Active",
        },
        {
            key: "2",
            name: "Zoey Lang",
            role: "Technical Lead",
            status: "Paused",
        },
        {
            key: "3",
            name: "Jane Fisher",
            role: "Senior Developer",
            status: "Active",
        },
        {
            key: "4",
            name: "William Howard",
            role: "Community Manager",
            status: "Vacation",
        },
    ];

    const columns = [
        {
            key: "name",
            label: "NAME",
        },
        {
            key: "role",
            label: "ROLE",
        },
        {
            key: "status",
            label: "STATUS",
        },
    ];





    return (
        <DefaultLayout>
            <>
                <div className="text-[#344054]">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        <div className="flex items-center bg-[#F8F8F8] text-[#344054] py-4 px-5 rounded-xl border border-[#E4E7EC]">
                            <div>
                                <h1 className='text-[1.2rem]  font-medium'>Welcome back, Jedidiah</h1>
                                <p className="text-[1.4rem] text-[#344054] font-bold">Let’s do a great job today!</p>
                            </div>
                            <div className=" ml-15">
                                <img src="/image.png" alt="" />
                            </div>

                        </div>
                        <div className="flex items-center justify-between bg-[#fae5e5] py-4 px-7 rounded-xl border border-[#F2BCBA]">
                            <div>
                                <h1 className='text-[1rem] text-black-2 font-bold'>Update your KYC Information</h1>
                                <p className="text-[0.9rem] font-medium leading-5 ">Please update/verify your information before 13th <br />  July 2023 to unlock level benefits</p>
                                <p className='text-[1rem] text-red-600 font-bold mt-3'>Complete Verification <span></span></p>
                            </div>
                            <div>
                                {/* <img src={image2} className="relative top-4" alt="" /> */}
                            </div>

                        </div>

                    </div>
                    <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                        <div className="py-3 px-4 border rounded-xl border-[#E4E7EC] flex justify-between items-center">
                            <div >
                                <p className='text-[0.9rem]'>All Properties</p>
                                <h1 className="my-2 font-bold text-[1.2rem]">1.7k+</h1>
                                <p className='text-[0.7rem] font-bold text-[#04802E]'><span className=" bg-[#E7F6EC] px-1 pb-1 rounded-lg mr-3 "><BsGraphUp className="inline mr-2" />5%</span>Healthy</p>
                            </div>
                            <div className="p-2 rounded-full border" >
                                <BsBank />
                            </div>
                        </div>
                        <div className="py-3 px-4 border rounded-xl border-[#E4E7EC] flex justify-between items-center">
                            <div >
                                <p className='text-[0.9rem]'>Total Pending Approval</p>
                                <h1 className="font-bold my-2 text-[1.2rem]">12</h1>
                                <p className='text-[0.7rem] font-bold text-[#04802E]'><span className=" bg-[#E7F6EC] px-1 pb-1 rounded-lg mr-3 "><BsGraphUp className="inline mr-2" />5%</span>Healthy</p>
                            </div>
                            <div className="p-2 rounded-full border" >
                                <BsBank />
                            </div>
                        </div>
                        <div className="py-3 px-4 border rounded-xl border-[#E4E7EC] flex justify-between items-center">
                            <div >
                                <p className='text-[0.9rem]'>Total Blocked</p>
                                <h1 className="font-bold my-2 text-[1.2rem]">40</h1>
                                <p className='text-[0.7rem] font-bold text-[#9E0A05]'><span className=" bg-[#FBEAE9] px-1 pb-1 rounded-lg mr-3 "><BsGraphUp className="inline mr-2" />5%</span>Unhealthy</p>
                            </div>
                            <div className="p-2 rounded-full border" >
                                <BsBank />
                            </div>
                        </div>
                        <div className="py-3 px-4 border rounded-xl border-[#E4E7EC] flex justify-between items-center">
                            <div >
                                <p className='text-[0.9rem]'>Total Views</p>
                                <h1 className="font-bold my-2 text-[1.2rem]">8.7k+</h1>
                                <p className='text-[0.7rem] font-bold text-[#04802E]'><span className=" bg-[#E7F6EC] px-1 pb-1 rounded-lg mr-3 "><BsGraphUp className="inline mr-2" />5%</span>Healthy</p>
                            </div>
                            <div className="p-2 rounded-full border" >
                                <BsBank />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <div className='flex gap-5 '>
                                    <div className="p-3 border border-[#E4E7EC] rounded-xl text-[black] shadow-lg w-full">
                                        <p>Overall</p>
                                        <div className="flex mt-20 ">
                                            <div className="mr-7">
                                                <h1 className="text-[3rem] text-[#344054] font-bold"><span className="text-[1.6rem]">$</span>34.5<span className="text-[1.6rem]">M</span></h1>
                                                <p className='mt-5 text-[0.8rem] text-[#04802E] font-bold'>Total Sales</p>
                                            </div>
                                            <div>
                                                <h1 className="text-[3rem] text-[#344054] font-bold">340</h1>
                                                <p className='mt-7 text-[0.8rem] text-[#04802E] font-bold'>Properties remaining</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="p-3 border rounded-xl border-[#E4E7EC] text-[black] w-50 shadow-lg">
                                        <p>This Month</p>
                                        <div className="my-5">
                                            <h1 className="text-[2.5rem] text-[#344054] font-bold">34</h1>
                                            <p className="mt-2 text-[0.8rem] text-[#04802E] font-bold">Properties sold</p>
                                        </div>
                                        <div>
                                            <h1 className="text-[2.5rem] text-[#344054] font-bold"><span className="text-[1.6rem]">$</span>3.5<span className="text-[1.6rem]">M</span></h1>
                                            <p className="mt-2 text-[0.8rem] text-[#04802E] font-bold">In Sales</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-10'>
                                        <Table aria-label="Example table with dynamic content" >
                                            <TableHeader columns={columns} className="rounded-none  bg-black mt-10"  >
                                                {(column) => <TableColumn   key={column.key}>{column.label}</TableColumn>}
                                            </TableHeader>
                                            <TableBody items={rows}>
                                                {(item) => (
                                                    <TableRow key={item.key}>
                                                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </div>
                            </div>



                        </div>
                        <div className="w-[50%]">

                        </div>
                    </div>
                </div>
            </>
        </DefaultLayout>

    );
}

export default RealtorDashboard;




