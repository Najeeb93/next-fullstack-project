import Image from "next/image";
import Link from "next/link";
import React from "react";


function Navbar() {
    return (
        <header className="text-white-100 sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-violet-600 to-orange-600 body-font">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
            <Link href={"/"} className="flex title-font font-extrabold items-center upparcase text-gray-100">
            <Image alt="Navbar Logo" src={"/pizza.svg"} width={60} height={60} />
            <p className="leading-6 text-xl mx-1">Pizza Wizza</p>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

            </nav>
            </div>
        </header>
    )
}

export default Navbar;