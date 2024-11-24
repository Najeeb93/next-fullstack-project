import Image from "next/image";
import Link from "next/link";
import React from "react";


function Footer() {
    return (
        <footer className="text-white-100  bg-orange-500 body-font"> 
        <div className="container mx-auto text-white flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-extrabold items-center upparcase text-gray-100"
        >
          <Image alt="Navbar Logo" src={"/pizza.svg"} width={60} height={60} />
          <p className="leading-6 text-xl mx-1">Pizza Wizza</p>
        </Link>
        <p className="text-sm text-gray-100 sm:ml-4 sm:border-1-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        Copyright © 2024 Pizza Wizza
        </p>
        </div>
        </footer>
    )
}

export default Footer;