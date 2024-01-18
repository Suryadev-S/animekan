import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;