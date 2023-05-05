import React from "react";

function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap p-6 mb-0">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">OneNorth</span>
            </div>
            <div className="flex items-center">
                <div className="text-sm mr-4">
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                        Womens
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                        Mens
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                        Latest Styles
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                        About Us
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;