import { AiOutlineDown } from "react-icons/ai";

export const Searchbar = ({searchKey, setSearchKey}) => {
    return (
        <div className="px-3 py-1.5 border-purple border rounded-md bg-white flex">
            <input value={searchKey} onChange={e=>setSearchKey(e.target.value)} type="text" placeholder="Search with Search Bar" className="focus:outline-none"/>
            <div className="p-0.5 rounded-full text-xs self-center text-purple bg-purple-semilight">
                <AiOutlineDown />
            </div>
        </div>
    );
}