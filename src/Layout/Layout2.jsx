import { Outlet } from 'react-router-dom';
import HeaderStyle2 from '../Components/Header/HeaderStyle2';
import Footer2 from '../Components/Footer/Footer2';

const Layout2 = () => {
    return (
        <div className='main-page-area2 body2'>
            <HeaderStyle2></HeaderStyle2>
            <Outlet></Outlet>
            <Footer2></Footer2>
        </div>
    );
};

export default Layout2;