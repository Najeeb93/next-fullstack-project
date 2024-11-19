
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "@/app/page";


function Layout({Children}) {
    return (
        <>
        <Navbar/>
        
        {Children}
        <Footer/>
        </>
    )
}

export default Layout;