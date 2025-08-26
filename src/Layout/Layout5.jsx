import { Outlet } from "react-router-dom";
import HeaderStyle5 from "../Components/Header/HeaderStyle5";
import Footer5 from "../Components/Footer/Footer5";

const Layout5 = () => {
    return (
        <div>
            <HeaderStyle5></HeaderStyle5>
            <Outlet></Outlet>
            <Footer5></Footer5>
        </div>
    );
};

export default Layout5;