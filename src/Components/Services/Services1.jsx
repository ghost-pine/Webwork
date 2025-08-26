import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/Home1/services1.json';
import { Link } from "react-router-dom";

const Services1 = () => {
    return (
        <div className="service sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle="Our Services"
                        Title="Empower Your Business With Our Comprehensive Technology & IT Solutions"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className={item.addClass} data-aos="zoom-in-up" data-aos-duration="700">
                <div className="single-box">
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="heading1">
                    <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                    <div className="space16"></div>
                    <p>{item.desc}</p>
                    <div className="space16"></div>
                    <Link to={item.btnLink} className="learn">{item.btnText} <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                      </svg>
                    </span></Link>
                  </div>
                </div>
              </div>
                ))}
              
            </div>
          </div>
        </div>
    );
};

export default Services1;