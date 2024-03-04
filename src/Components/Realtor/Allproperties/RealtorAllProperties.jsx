import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { BsBank, BsGraphUp } from "react-icons/bs";
import AllPropertiesTable from "./AllPropertiesTable";

const RealtorAllProperties = () => {
    
    // const rows = [
    //     {
    //         key: "1",
    //         name: "Tony Reichert",
    //         role: "CEO",
    //         status: "Active",
    //     },
    //     {
    //         key: "2",
    //         name: "Zoey Lang",
    //         role: "Technical Lead",
    //         status: "Paused",
    //     },
    //     {
    //         key: "3",
    //         name: "Jane Fisher",
    //         role: "Senior Developer",
    //         status: "Active",
    //     },
    //     {
    //         key: "4",
    //         name: "William Howard",
    //         role: "Community Manager",
    //         status: "Vacation",
    //     },
    // ];

    // const columns = [
    //     {
    //         key: "name",
    //         label: "NAME",
    //     },
    //     {
    //         key: "role",
    //         label: "ROLE",
    //     },
    //     {
    //         key: "status",
    //         label: "STATUS",
    //     },
    // ];

    return (
        <>
            {/* <div className='mt-10'>
                <Table aria-label="Example table with dynamic content" >
                    <TableHeader columns={columns} className="rounded-none  bg-black mt-10"  >
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div> */}
              <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 grid-cols-1 xl:grid-cols-4 gap-5 mt-5">
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
                <div>
                    <AllPropertiesTable/>
                </div>
        </>
    );
}

export default RealtorAllProperties;