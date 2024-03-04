import React from "react";

import {CheckboxGroup, Checkbox} from "@nextui-org/react";


const RealtorAddProperties = () => {
    const [selected, setSelected] = React.useState(["buenos-aires", "sydney"]);
    return (<>
        <div>
            <div className="border border-[#E4E7EC] p-5 rounded-xl">
                <h1 className="font-bold text-[0.8rem] mb-3">Overview</h1>
                <form action="" method="get" className="grid grid-cols-2 gap-5">

                    <div>
                        <p className="font-bold text-[0.8rem]">Property Title</p>
                        <input className="w-full py-1 px-4 mt-2 outline-none border rounded-lg border-[#E4E7EC]" type="text" />
                    </div>
                    <div>
                        <p className="font-bold text-[0.8rem]">Property Title</p>
                        <input className="w-full py-1 px-4 mt-2 outline-none border rounded-lg border-[#E4E7EC]" type="text" />
                    </div>
                    <div>
                        <p className="font-bold text-[0.8rem]">Property Title</p>
                        <input className="w-full py-1 px-4 mt-2 outline-none border rounded-lg border-[#E4E7EC]" type="text" />
                    </div>
                    <div>
                        <p className="font-bold text-[0.8rem]">Property Title</p>
                        <input className="w-full py-1 px-4 mt-2 outline-none border rounded-lg border-[#E4E7EC]" type="text" />
                    </div>
                    <div className=" col-span-2">
                        <p className="font-bold text-[0.8rem]">Description</p>
                        <textarea className="w-full px-4 resize-none h-34 py-4 outline-none border rounded-lg border-[#E4E7EC]"></textarea>
                    </div>
                </form>
            </div>
            <div className="border border-[#E4E7EC] p-5 rounded-xl mt-10">
                <h1 className="font-bold text-[0.8rem] mb-3">Photo & Video</h1>
                <form action="" method="get" className="grid grid-cols-2 gap-5">
                    <div>
                        <p className="font-bold text-[0.8rem]">Image</p>
                        <input type="file" name="" id="" className="w-full" />
                    </div>
                    <div>
                        <p className="font-bold text-[0.8rem]">Video Link</p>
                        <input className="w-full px-4 mt-2 p-1 items-center outline-none border rounded-lg border-[#E4E7EC]" type="text" />
                    </div>

                </form>
            </div>
            <div className="border border-[#E4E7EC] p-4 mt-10  rounded-xl">
                <div className="flex flex-col gap-3">
                    <CheckboxGroup className="font-semibold text-[0.8rem] text-[#969696]"
                        label="Select Available Features"
                        color="primary"
                        value={selected}
                        onValueChange={setSelected}
                    >
                        <div className="grid lg:grid-cols-4 grid-cols-2 mt-3 gap-5 text-[0.8rem] text-[#969696]">
                         <Checkbox value="Swimming Pool">Swimming pool</Checkbox>
                        <Checkbox value="Garage">Garage</Checkbox>
                        <Checkbox value="Refrigirator">Refrigirator</Checkbox>
                        <Checkbox value="Swimming Pool">Swimming pool</Checkbox>
                        <Checkbox value="Garage">Garage</Checkbox>
                        <Checkbox value="san-francisco">Refrigirator</Checkbox>
                        <Checkbox value="buenos-aires">Swimming pool</Checkbox>
                        <Checkbox value="sydney">Garage</Checkbox>
                        <Checkbox value="san-francisco">Refrigirator</Checkbox>
                        <Checkbox value="san-francisco">Refrigirator</Checkbox>
                        <Checkbox value="buenos-aires">Swimming pool</Checkbox>
                        <Checkbox value="sydney">Garage</Checkbox>
                        <Checkbox value="san-francisco">Refrigirator</Checkbox>
                        </div>
                        
                    </CheckboxGroup>
                    <p className="text-default-500 text-small">Selected: {selected.join(", ")}</p>
                </div>
            </div>

        </div>
    </>);
}

export default RealtorAddProperties;