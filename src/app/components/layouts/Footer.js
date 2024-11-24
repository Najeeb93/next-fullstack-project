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
        </div>
        </footer>
    )
}

export default Footer;