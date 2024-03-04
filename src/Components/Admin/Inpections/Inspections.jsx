const Inspections = () => {
    return ( <>
    <div>
        <div className="grid sm:grid-cols-2 sm:w-[700px] w-full grid-cols-1 bg-[#FAFAFA] py-10 sm:px-20 px-1 gap-7 rounded-2xl font-medium">
            <div className="border-b-2 border-[#dadada]">
                <h1>First name</h1>
                <p className="mt-8 mb-3 pl-5">Praise |</p>
            </div>
            <div className="border-b-2 border-[#dadada]">
                <h1>Last name</h1>
                <p className="mt-8 mb-3 pl-5">Praise |</p>
            </div>
            <div className="border-b-2 border-[#dadada]">
                <h1>Email Address</h1>
                <p className="mt-8 mb-3 pl-5">Praise |</p>
            </div>
            <div className="border-b-2 border-[#dadada]">
                <h1>Phone number</h1>
                <p className="mt-8 mb-3 pl-5">Praise |</p>
            </div>
            <div className=" col-span-2">
                <h1>Preferred date for inspection</h1>
                <div className="flex justify-between items-center mt-10 gap-5">
                     <p className=" text-start  pb-3 pl-5 border-b-2 w-full border-[grey]">Praise |</p>
                     <p className=" text-start  pb-3 pl-5 border-b-2 w-full border-[grey]">Praise |</p>
                     <p className=" text-start  pb-3 pl-5 border-b-2 w-full border-[grey]">Praise |</p>
                </div>
            </div>
            <div className="flex justify-center items-center col-span-2 ">
            <button type="button" className="w-[400px] py-4 text-white rounded-xl bg-[#ED1E24]">Delete</button>
            </div>
        </div>
    </div>
    </> );
}
 
export default Inspections;