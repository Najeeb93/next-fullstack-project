import React, { Children } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Layout() {
    return (
        <>
        <Navbar/>
        <main>{Children}</main>
        <Footer/>
        </>
    )
}

export default Layout;