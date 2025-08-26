import { Link } from 'react-router-dom';
import data from '../../Data/home4/services4.json';
import SectionTitle2 from '../Common/SectionTitle2';
import parse from 'html-react-parser';

const Services4 = () => {
    return (
        <div className="service4 sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <div className="heading4">
                            <SectionTitle2
                                SubTitle="Our Service 👋"
                                Title="Comprehensive IT Solution Services"
                            ></SectionTitle2>
                        </div>
                    </div>
                </div>

                <div className="space30"></div>
                <div className="row">

                {data.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration="800">
                        <div className={item.addClass}>
                            <div className="icon">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="heading4">
                                <h4><Link to={item.btnLink}>{parse(item.title)}</Link></h4>
                                <div className="space16"></div>
                                <p>{item.desc} </p>
                                <div className="space16"></div>
                                <Link to={item.btnLink} className="learn-btn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>

                <div className="space40"></div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="" data-aos="zoom-in-up" data-aos-duration="700">
                            <Link className="theme-btn5" to="/service">More Services <span><i className="bi bi-arrow-right"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services4;