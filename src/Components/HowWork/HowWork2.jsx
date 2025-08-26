import { Link } from "react-router-dom";

const HowWork2 = () => {
    return (
        <div className="work3 sp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="heading3">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700">How We Work</span>
                  <h2 className="title tg-element-title">Simplifying Complex Solution</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-right" data-aos-duration="700">At TechXen technology & It  we believe in making technology accessible and easy to understand.</p>
                  <div className="space30"></div>
                  <div className="" data-aos="fade-right" data-aos-duration="900">
                    <Link className="theme-btn4 btn--ripple ripple" to="/service">Get Started Now <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="big-image image-anime">
                  <img src="/assets/img/work/work3-img.png" alt="" />
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="700">
                <div className="work3-box">
                  <div className="heading3">
                    <span className="stap">STEP 01</span>
                    <h3><Link to="/service/service-details">Consultation and Assessment </Link></h3>
                    <p>The journey begins with a comprehensive consultation where we take the time.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1100">
                <div className="work3-box">
                  <div className="heading3">
                    <span className="stap">STEP 02</span>
                    <h3><Link to="/service/service-details">Customised Solution Design </Link></h3>
                    <p>Based on the insights gathered during the consultation phase, we will work closely with you.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="900">
                <div className="work3-box">
                  <div className="heading3">
                    <span className="stap">STEP 03</span>
                    <h3><Link to="/service/service-details">Development and Implementation </Link></h3>
                    <p>Once the solution design is finalized and approved, our experienced developers.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="800">
                <div className="work3-box">
                  <div className="heading3">
                    <span className="stap">STEP 04</span>
                    <h3><Link to="/service/service-details">Deployment and Integration</Link></h3>
                    <p>With testing complete and your solution fully optimized, we will proceed with deployment.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

    );
};

export default HowWork2;