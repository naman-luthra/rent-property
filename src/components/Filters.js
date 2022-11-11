import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs"

export const Filters = ({setFilters})=>{
    const [ location, setLocation ] = useState("");
    const [ moveInDate, setMoveInDate ] = useState("");
    const [ range, setRange ] = useState({
        label: "Select Range",
        lb:0,
        ub:Infinity,
    });
    const priceRanges = [
        {
            label: "Below $500",
            lb:0,
            ub:500,
        },
        {
            label: "$500-$2500",
            lb:500,
            ub:2500,
        },
        {
            label: "$2500-$4500",
            lb:2500,
            ub:4500,
        },
        {
            label: "Above $4500",
            lb:4500,
            ub:Infinity,
        },
    ];
    const [ priceDropDownVisible, setPriceDropDownVisible ] = useState(false);
    const propertyTypes = ["Houses", "Villas", "Appartments"];
    const [ type, setType ] = useState("");
    const [ propertyDropDownVisible, setPropertyDropDownVisible ] = useState(false);
    return (
        <div className="w-full bg-white p-6 mt-8 justify-between">
            <div className="flex justify-between">
                <div className="">
                    <div className="text-gray-400">Location</div>
                    <input value={location} onChange={e=>setLocation(e.target.value)} placeholder="Select Location" type="text" className="font-bold text-lg focus:outline-none placeholder:text-black w-36"/>
                </div>
                <div className="h-auto border-l-[0.5px] border-purple mx-4"/>
                <div className="">
                    <div className="text-gray-400">When</div>
                    <div className="font-bold text-lg focus:outline-none placeholder:text-black w-52 relative flex">
                        <div className="grow">{ moveInDate ? moveInDate : "Select Move-in Date"}</div>
                        <input value={moveInDate} onChange={e=>setMoveInDate(e.target.value)} type="date" className="absolute top-0 left-0 opacity-0 w-full" id="calander"/>
                        <div className="p-1 text-xs text-purple bg-purple-semilight rounded-full h-fit self-center">
                            <BsFillCalendarDateFill/>
                        </div>
                    </div>
                </div>
                <div className="h-auto border-l-[0.5px] border-purple mx-4"/>
                <div className="">
                    <div className="text-gray-400">Price</div>
                    <div className="flex relative cursor-pointer" onClick={()=>setPriceDropDownVisible(!priceDropDownVisible)}>
                        <div className="font-bold text-lg  w-36">{ range.label }</div>
                        <div className="p-0.5 rounded-full text-xs self-center text-purple bg-purple-semilight">
                            <AiOutlineDown />
                        </div>
                        {
                            priceDropDownVisible &&
                            <div className="absolute -left-4 top-10 bg-white w-48 px-4 pb-2 flex flex-col gap-4 rounded-md">
                                {
                                    priceRanges.map(r=>(
                                        <div onClick={()=>setRange(r)} className={`font-semibold ${range===r ? 'bg-purple-light' : 'hover:bg-purple-light'} cursor-pointer p-0.5`}>{r.label}</div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className="h-auto border-l-[0.5px] border-purple mx-4"/>
                <div className="">
                    <div className="text-gray-400">Property Type</div>
                    <div className="flex relative cursor-pointer" onClick={()=>setPropertyDropDownVisible(!propertyDropDownVisible)}>
                        <div className="font-bold text-lg  w-36">{ type ? type : "Select Type" }</div>
                        <div className="p-0.5 rounded-full text-xs self-center text-purple bg-purple-semilight">
                            <AiOutlineDown />
                        </div>
                        {
                            propertyDropDownVisible &&
                            <div className="absolute -left-4 top-10 bg-white w-48 px-4 pb-2 flex flex-col gap-4 rounded-md">
                                {
                                    propertyTypes.map(t=>(
                                        <div onClick={()=>setType(t)} className={`font-semibold ${type===t ? 'bg-purple-light' : 'hover:bg-purple-light'} cursor-pointer p-0.5`}>{t}</div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className="h-auto border-l-[0.5px] border-purple mx-4"/>
                <div onClick={()=>{
                    setFilters({
                        location:location,
                        moveInDate:moveInDate ? moveInDate :"9999-99-99",
                        priceUpperBound:range.ub,
                        priceLowerBound:range.lb,
                        type
                    })
                }} className="px-8 bg-purple rounded-md text-white flex flex-col justify-center cursor-pointer hover:opacity-80">Search</div>
            </div>
        </div>
    );
}