import { Outlet } from 'react-router-dom';
import HeaderStyle2 from '../Components/Header/HeaderStyle2';
import Footer2 from '../Components/Footer/Footer2';

const Layout6 = () => {
    return (
        <div className='comon-body tg-heading-subheading animation-style3'>
            <HeaderStyle2></HeaderStyle2>
            <Outlet></Outlet>
            <Footer2></Footer2>
        </div>
    );
};

export default Layout6;