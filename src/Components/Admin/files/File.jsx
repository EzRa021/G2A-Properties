import { BsCameraVideoFill, BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import React from "react";
import FileTable from "./FileTable";


const Files = () => {
    return ( <>

    <div>
        <div className="p-3  border rounded-xl border-[#E4E7EC]">
            <div className="flex justify-between items-center">
                <h1>Folder:4</h1>
                <button type="button" className="p-1 text-[0.8rem] border border-[#E4E7EC] rounded-lg"><BsPlus className="inline text-[1.5rem]"/>New Folder</button>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-5">
                <div className="border border-[#E4E7EC] p-3 rounded-xl">
                    <div className="flex justify-between items-center">
                        <span className="p-1 rounded-full text-[black] bg-[#f0efef]"><BsCameraVideoFill className="text-[0.8rem]"/></span>
                        <span className="p-1 rounded-full text-[black] bg-[#f0efef]"><BsThreeDotsVertical className="text-[0.8rem]"/></span>
                    </div>
                    <div className="mt-4">
                        <h1 className=" font-bold text-[0.9rem] text-[black]">Video</h1>
                        <p className=" font-bold text-[0.8rem] text-[black]">63 Files</p>
                    </div>
                </div>
                <div className="border border-[#E4E7EC] p-3 rounded-xl">
                    <div className="flex justify-between items-center">
                        <span className="p-1 rounded-full text-[black] bg-[#f0efef]"><BsCameraVideoFill className="text-[0.8rem]"/></span>
                        <span className="p-1 rounded-full text-[black] bg-[#f0efef]"><BsThreeDotsVertical className="text-[0.8rem]"/></span>
                    </div>
                    <div className="mt-4">
                        <h1 className=" font-bold text-[0.9rem] text-[black]">Video</h1>
                        <p className=" font-bold text-[0.8rem] text-[black]">63 Files</p>
                    </div>
                </div>
                <div className="border border-[#E4E7EC] p-3 rounded-xl">
                    <div className="flex justify-between items-center">
                        <span className="p-1 rounded-full text-[black] bg-[#f0efef]"><BsCameraVideoFill className="text-[0.8rem]"/></span>
                        <span className="p-1 rounded-full text-[black] bg-[#f0efef]"><BsThreeDotsVertical className="text-[0.8rem]"/></span>
                    </div>
                    <div className="mt-4">
                        <h1 className=" font-bold text-[0.9rem] text-[black]">Video</h1>
                        <p className=" font-bold text-[0.8rem] text-[black]">63 Files</p>
                    </div>
                </div>
                <div className="border border-[#E4E7EC] p-3 rounded-xl">
                    <div className="flex justify-between items-center">
                        <span className="p-1 rounded-full text-[black] bg-[#f0efef]"><BsCameraVideoFill className="text-[0.8rem]"/></span>
                        <span className="p-1 rounded-full text-[black] bg-[#f0efef]"><BsThreeDotsVertical className="text-[0.8rem]"/></span>
                    </div>
                    <div className="mt-4">
                        <h1 className=" font-bold text-[0.9rem] text-[black]">Video</h1>
                        <p className=" font-bold text-[0.8rem] text-[black]">63 Files</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-20">
            <FileTable/>
        </div>
    </div>
    </> );
}
 
export default Files;