import React, { Children } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Layout({Children}) {
    return (
        <>
        <Navbar/>
        <main>{Children}</main>
        <Footer/>
        </>
    )
}

export default Layout;