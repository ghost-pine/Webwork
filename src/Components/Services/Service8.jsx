import { Link } from "react-router-dom";
import data from '../../Data/sercicePage.json';

const Service8 = () => {
    return (
        <div className="servcie2 pb100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading2">
                <h2>More Services</h2>
              </div>
            </div>
          </div>

          <div className="space30"></div>
          <div className="row">

          {data.slice(0,3).map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="">
                <div className="servcie2-box">
                  <div className="icon">
                  <img src="/assets/img/icons/service2-icon3.png" alt="" />
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
            <div className="col-lg-12 text-center">
            <Link className="theme-btn2" to="/service">View All Services <span><i className="bi bi-arrow-right"></i></span></Link>
            </div>
          </div>

        </div>
        <div className="space100"></div>
      </div>
    );
};

export default Service8;