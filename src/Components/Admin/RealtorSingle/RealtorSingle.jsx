import { HiOutlineUserMinus } from "react-icons/hi2";
import { PiWechatLogoBold } from "react-icons/pi";

const RealtorSingle = () => {
    return (
        <>
            <div>
                <div>
                    <div className="w-full">
                        <img src="/image1.jpg" className=" object-cover h-40 w-full" alt="" />
                    </div>
                    <div className="relative bottom-15 flex justify-center items-center w-full">
                        <div className="h-35 w-35 rounded-full border-4 border-white">
                            <img src="/image2.jpeg" className=" object-cover w-full h-full rounded-full text-center" alt="" />
                        </div>
                    </div>
                    <div className="text-center -mt-15">
                        <h1 className=" font-bold text-[1.5rem] text-black-2">Siyanbola Ogunnaike</h1>
                        <p className="mt-2 text-[0.9rem] font-medium text-black">Realtor, Adron Homes <span className="bg-[green] text-[0.5rem] py-0.5 px-1 rounded-sm text-white">Verified</span></p>
                    </div>
                    <div className="text-center flex justify-center gap-3 mt-5">
                        <button type="button" className="py-1 px-5 rounded-lg border font-semibold border-red-600 text-red-600"><span className="inline-flex align-middle" >
                            <HiOutlineUserMinus /></span>Remove</button>
                        <button type="button" className="py-1 px-5 rounded-lg border font-medium bg-black-2 text-white"><span className="inline-flex align-middle">
                            <PiWechatLogoBold  /></span>Send a Message</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default RealtorSingle;