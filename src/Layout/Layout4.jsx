import { Outlet } from "react-router-dom";
import Header4 from "../Components/Header/HeaderStyle4";
import Footer4 from "../Components/Footer/Footer4";

const Layout4 = () => {
    return (
        <div className="home-page4">
            <Header4></Header4>
            <Outlet></Outlet>
            <Footer4></Footer4>
        </div>
    );
};

export default Layout4;