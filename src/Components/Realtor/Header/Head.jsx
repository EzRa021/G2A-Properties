import React from "react";
import DropdownUser from "../Header/DropdownUser";
// import { SearchOutlined } from "@mui/icons-material";
import { SearchIcon } from "../../../Ui/Icons";
const Head = () => {

    return (
        <>
            <div className=" shadow-xl px-[20px] bg-[#021217] text-white flex justify-between items-center w-full py-2 xl:py-5">
                <div  className="" >
                    <img src="/Logo.png" className=" object-cover" alt="Logo" />
                </div>

                <div className="relative mr-50 xl:block  flex justify-center item-center  w-[40%]">
                    <div className="absolute top-4 left-2">
                    <SearchIcon/>
                    </div>
                    <input type="search" name="Search" id="search" className=" px-7 outline-none border-none text-black rounded-lg  w-[100%] py-3" />
                </div>
                <div className="text-black">
                    <DropdownUser />
                </div>
            </div>
        </>


    );
}

export default Head;