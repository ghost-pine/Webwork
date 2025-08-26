import { Link } from "react-router-dom";

const Vission1 = () => {
    return (
        <div className="solution about-solution sp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="images">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="image">
                      <img src="/assets/img/about/visiton-img1.png" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="space30"></div>
                    <div className="image">
                      <img src="/assets/img/about/visiton-img2.png" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="space30"></div>
                    <div className="image">
                      <img src="/assets/img/about/visiton-img3.png" alt="" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading1">
                <span className="span"><img src="/assets/img/icons/span1.png" alt="" /> Our Vision</span>
                <h2>Driving Innovation: Our Vision at TechXen</h2>
                <div className="space16"></div>
                <p>At TechXen, our vision is to be the leading force driving digital transformation and innovation worldwide. We envision a future where businesses of all sizes have the tools and expertise they need to thrive in an increasingly digital world.</p>

                <div className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src="/assets/img/icons/about-solution-iocn1.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#">Network Infrastructure Solutions</a></h3>
                    <div className="space10"></div>
                    <p>Build a reliable and secure network infrastructure that <br/> supports your business operations enables seamless</p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src="/assets/img/icons/about-solution-iocn2.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#">Managed It Services</a></h3>
                    <div className="space10"></div>
                    <p>Focus on your core business activities while we take <br/> care of your IT needs with our managed IT services.</p>
                  </div>
                </div>

                <div className="space30"></div>
                <div className="">
                  <Link className="theme-btn1" to="/contact">Get A Quote <span><i className="bi bi-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
};

export default Vission1;