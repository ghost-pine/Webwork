import { Link } from "react-router-dom";

const About3 = () => {
    return (
        <div className="about3 sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="heading3">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700">About Us</span>
                  <h2 className="title tg-element-title">Empowering Solutions For Tomorrows Challenges</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-right" data-aos-duration="700">Our journey began with a simple vision: to revolutionize how businesses and individuals interact with technology. Today, we stand proud as a leading force in the industry, driven by innovation, integrity, and a commitment to excellence.</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="about3-box" data-aos="fade-right" data-aos-duration="900">
                        <h5>Our Story</h5>
                        <div className="space10"></div>
                        <p>Established in 1975, TechXen was born out of a passion for pushing the boundaries of what is possible.</p>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="about3-box" data-aos="fade-right" data-aos-duration="700">
                        <h5>Our Mission</h5>
                        <div className="space10"></div>
                        <p>Our mission is clear: to empower organizations and individuals with transformative technology solutions.</p>
                      </div>
                    </div>

                  </div>
                  <div className="space30"></div>
                  <div className="" data-aos="fade-right" data-aos-duration="1100">
                    <Link className="theme-btn4 btn--ripple ripple" to="/about">Get Started Now <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about3-images">

                  <div className="cs_height_118 cs_height_lg_70"></div>
                  <div className="cs_case_study_1_list">
                    <div className="cs_case_study cs_style_1 cs_hover_active">
                      <div className="cs_case_study_thumb cs_bg_filed" data-src="/assets/img/about/about1-img1.png"></div>
                    </div>
                    <div className="cs_case_study cs_style_1 cs_hover_active">
                      <div className="cs_case_study_thumb cs_case_study_thumb2 cs_bg_filed" data-src="/assets/img/about/about1-img1.png"></div>
                    </div>
                    <div className="cs_case_study cs_style_1 cs_hover_active">
                      <div className="cs_case_study_thumb cs_case_study_thumb3 cs_bg_filed" data-src="/assets/img/about/about1-img1.png"></div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

    );
};

export default About3;