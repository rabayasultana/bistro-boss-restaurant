import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp');
    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;