import { Outlet } from "react-router-dom";
import HeaderStyle3 from "../Components/Header/HeaderStyle3";
import Footer3 from "../Components/Footer/Footer3";


const Layout3 = () => {
    return (
        <div className="main-page-area3">
            <HeaderStyle3></HeaderStyle3>
            <Outlet></Outlet>
            <Footer3></Footer3>
        </div>
    );
};

export default Layout3;