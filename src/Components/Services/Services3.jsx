import { Link } from "react-router-dom";

const Services3 = () => {
    return (
        <div className="service3 sp">
          <div className="container">

            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="heading3">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700">Our Services</span>
                  <h2 className="title tg-element-title">Empowering Solutions For Tomorrows Challenges</h2>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="" data-aos="fade-right" data-aos-duration="700">
                  <div className="service3-box">
                    <div className="">
                      <div className="icon">
                        <img src="/assets/img/icons/service3-iocn1.png" alt="" />
                      </div>
                    </div>
                    <div className="heading3">
                      <h4><Link to="/service/service-details">Consulting Service</Link></h4>
                      <div className="space16"></div>
                      <p>Strategic IT planning and roadmap development Business process analysis and improvement for It.</p>
                    </div>
                  </div>
                </div>

                <div className="" data-aos="fade-right" data-aos-duration="1100">
                  <div className="service3-box">
                    <div className="">
                      <div className="icon">
                        <img src="/assets/img/icons/service3-iocn2.png" alt="" />
                      </div>
                    </div>
                    <div className="heading3">
                      <h4><Link to="/service/service-details">Cloud Solution</Link></h4>
                      <div className="space16"></div>
                      <p>Infrastructure as a Service (IaaS), Platform as a Service (PaaS),  and Software as a Service (SaaS).</p>
                    </div>
                  </div>
                </div>

                <div className="" data-aos="fade-right" data-aos-duration="900">
                  <div className="service3-box">
                    <div className="">
                      <div className="icon">
                        <img src="/assets/img/icons/service3-iocn3.png" alt="" />
                      </div>
                    </div>
                    <div className="heading3">
                      <h4><Link to="/service/service-details">Data Analytics</Link></h4>
                      <div className="space16"></div>
                      <p>Data visualization and business intelligence solutions Predictive analytics and machine learning </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-4">
                <div className="main-image image-anime">
                  <img src="/assets/img/service/service3-img.png" alt="" />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="" data-aos="fade-left" data-aos-duration="700">
                  <div className="service3-box">
                    <div className="">
                      <div className="icon">
                        <img src="/assets/img/icons/service3-iocn4.png" alt="" />
                      </div>
                    </div>
                    <div className="heading3">
                      <h4><Link to="/service/service-details">Software Development</Link></h4>
                      <div className="space16"></div>
                      <p>Mobile app development for iOS, Android, and cross-platform solutions & web application.</p>
                    </div>
                  </div>
                </div>

                <div className="" data-aos="fade-left" data-aos-duration="1100">
                  <div className="service3-box">
                    <div className="">
                      <div className="icon">
                        <img src="/assets/img/icons/service3-iocn5.png" alt="" />
                      </div>
                    </div>
                    <div className="heading3">
                      <h4><Link to="/service/service-details">Cyber Security</Link></h4>
                      <div className="space16"></div>
                      <p>Threat assessment and vulnerability analysis. Security strategy development and implementation</p>
                    </div>
                  </div>
                </div>

                <div className="" data-aos="fade-left" data-aos-duration="900">
                  <div className="service3-box">
                    <div className="">
                      <div className="icon">
                        <img src="/assets/img/icons/service3-iocn6.png" alt="" />
                      </div>
                    </div>
                    <div className="heading3">
                      <h4><Link to="/service/service-details">Manage It Service</Link></h4>
                      <div className="space16"></div>
                      <p>Proactive IT monitoring and management Network infrastructure setup and maintenance</p>
                    </div>
                  </div>
                </div>
                
              </div>


            </div>
          </div>
        </div>
    );
};

export default Services3;