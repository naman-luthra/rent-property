import {HiSparkles} from "react-icons/hi";
import {AiOutlineHeart} from "react-icons/ai";
import {MdBed} from "react-icons/md";
import {TbBath} from "react-icons/tb";
import {BiArea} from "react-icons/bi";


export const PropertyCard = ({
    image,
    popular,
    rent,
    name,
    address,
    beds,
    bathrooms,
    length,
    breadth,
    type,
    location,
    availableFrom
}) => {
    return (
        <div className="bg-white pb-4 rounded-md shadow-lg">
            <div className="flex flex-col w-full h-48 overflow-hidden justify-center rounded-md">
                <img src={image} alt="" className="w-full"/>
            </div>
            <div className="relative">
                {
                    popular &&
                    <div className="absolute top-0 -left-2 -translate-y-1/2">
                        <div className="bg-purple text-xs flex gap-1 text-white py-1 px-2 rounded-md">
                            <HiSparkles />
                            <div className="text-[10px] font-bold self-center">POPULAR</div>
                        </div>
                        <div className="absolute top-5 left-0 -z-10">
                            <svg height={8} width={8}>
                                <polygon points="0,0 8,0 8,8" className="fill-purple-dark"/>
                            </svg>
                        </div>
                    </div>
                }
                <div className="p-4 pt-6">
                    <div className="flex gap-px">
                        <div className="self-end text-lg leading-[18px] font-semibold text-purple">${rent}</div>
                        <div className="self-end text-gray-500 text-xs grow">/month</div>
                        <div className="p-1 rounded-full shadow-md text-purple">
                            <AiOutlineHeart />
                        </div>
                    </div>
                    <div className="text-xl font-bold mt-1.5">{name}</div>
                    <div className="text-sm text-gray-500 mt-1">{address}</div>
                    <div className="w-full h-[0.5px] bg-gray-500 mt-4"/>
                    <div className="mt-4 flex justify-between">
                        <div className="flex gap-1 text-sm">
                            <MdBed className="text-purple text-xl"/>
                            <div className="self-center">{beds} Beds</div>
                        </div>
                        <div className="flex gap-1 text-sm">
                            <TbBath className="text-purple text-xl"/>
                            <div className="self-center">{bathrooms} Bathrooms</div>
                        </div>
                        <div className="flex gap-1 text-sm">
                            <BiArea className="text-purple text-xl"/>
                            <div className="self-center">{length}<span className="text-xs mx-px">x</span>{breadth} m<sup>2</sup></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}