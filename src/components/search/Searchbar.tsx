import React from "react";
import { FiSearch } from "react-icons/fi";



const Searchbar = () => {
    return (
        <div className="flex flex-col w-full bg-gray-300 p-2 rounded-lg">
            <form className="flex items-center">
                <FiSearch className="w-5 h-5 text-gray-500 ml-2" />
                <input
                    type="text"
                    placeholder="Search Twiddle"
                    className="bg-gray-300 text-black p-2 ml-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </form>
        </div>
    );
}


export default Searchbar;