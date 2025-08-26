import { Link } from 'react-router-dom';
import data from '../../Data/home5/services5.json';
import SectionTitle3 from '../Common/SectionTitle3';

const Services5 = () => {
    return (
        <div className="service7 sp bg5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto text-center">
                        <div className="heading7">
                            <SectionTitle3
                                SubTitle="Service"
                                Title="Our Comprehensive <span>IT Solutions</span>"
                                content="Whether you are looking to enhance productivity, improve efficiency, or stay ahead of technological advancements, we've got you covered."
                            ></SectionTitle3>
                        </div>
                    </div>
                </div>
                <div className="space30"></div>
                <div className="row">
                {data.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1200">
                        <div className="service7-box">
                            <div className="heading-area">
                                <div className="icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <div className="heading7">
                                    <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                                    <p> {item.desc}</p>
                                    <Link to={item.btnLink} className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                            <div className="image image-anime">
                                <img src={item.image1} alt="" />
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Services5;