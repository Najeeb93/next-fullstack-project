
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "@/app/page";
import Login from "@/app/pages/cart/login";


function Layout({Children}) {
    return (
        <>
        <Navbar/>
        <Home/>
        {Children}
        <Footer/>
        </>
    )
}

export default Layout;