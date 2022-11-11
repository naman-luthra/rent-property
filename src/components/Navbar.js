import { RiHomeSmileFill } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";

export const Navbar = ()=>{
    return (
        <div className="fixed top-0 w-full px-16 py-6 bg-white flex gap-8 z-50">
            <div className="flex gap-2 self-center mr-16">
                <RiHomeSmileFill className="text-3xl text-purple"/>
                <div className="font-bold text-xl text-purple-dark">Estatery</div>
            </div>
            <div className="self-center py-1.5 px-3 font-semibold bg-purple-semilight text-purple rounded-sm">Rent</div>
            <div className="self-center py-1.5 px-3 font-semibold rounded-sm">Buy</div>
            <div className="self-center py-1.5 px-3 font-semibold rounded-sm">Sell</div>
            <div className="self-center py-1.5 px-3 font-semibold rounded-sm flex gap-2">
                <span className="self-center">Manage Property</span>
                <AiOutlineDown className="self-center"/>
            </div>
            <div className="self-center py-1.5 px-3 font-semibold rounded-sm flex gap-2 grow">
                <span className="self-center">Resources</span>
                <AiOutlineDown className="self-center"/>
            </div>
            <div className="flex self-center gap-4">
                <div className="py-2 px-4 border-purple border rounded-md font-semibold text-purple">Login</div>
                <div className="py-2 px-4 bg-purple border rounded-md font-semibold text-white">Sign up</div>
            </div>
        </div>
    );
}