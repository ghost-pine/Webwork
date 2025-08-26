import { Link } from 'react-router-dom';
import data from '../../Data/home2/services2.json';
import SectionTitle from '../Common/SectionTitle';

const Service2 = () => {
    return (
        <div className="servcie2 pt100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading2">
                <SectionTitle
                        SubTitle="Our Service"
                        Title="Empower Your Business with Our Comprehensive IT Solutions"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="" data-aos="zoom-in-up" data-aos-duration="700">
                  <div className={item.addClass}>
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <Link to={item.btnLink} className="arrow"><i className="bi bi-arrow-right"></i></Link>
                    <div className="heading2">
                      <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                      <div className="space16"></div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            </div>

            <div className="space40"></div>
            <div className="row">
              <div className="col-lg-12 text-center" data-aos="zoom-in-up" data-aos-duration="700">
                <Link className="theme-btn2" to="/service">View All Services <span className="arrow1"><i className="bi bi-arrow-right"></i></span><span className="arrow2"><i className="bi bi-arrow-right"></i></span></Link>
              </div>
            </div>

          </div>
        </div>
    );
};

export default Service2;