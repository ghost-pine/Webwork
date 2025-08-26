import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const About6 = ({image1,image2,image3,experienceNum,experienceTitle,subTitle,title,content,counName1,CounNum1,counName2,CounNum2}) => {
    return (
        <div className="about2 about-page-sec sp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about2-images">
                  <div className="image1" data-aos="zoom-in-right" data-aos-duration="800">
                    <img src={image1} alt="" />
                  </div>
                  <div className="image2 image-anime">
                    <img src={image2} alt="" />
                  </div>
                  <div className="image3" data-aos="zoom-in-left" data-aos-duration="900">
                    <img src={image3} alt="" />
                  </div>
                  <div className="counter-box" data-aos="flip-left" data-aos-duration="700">
                    <h3>{experienceNum}</h3>
                    <p>{parse(experienceTitle)}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700"><img src="/assets/img/icons/span1.png" alt="" /> {subTitle}</span>
                  <h2 className="title tg-element-title">{title}</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-up-left" data-aos-duration="700">{content}</p>

                  <div className="space10"></div>

                  <div className="porgress-line-all">
                    <div className="progress-line">
                      <h6>{counName1}</h6>
                      <div id="progress1">
                      <div className="percentCount percentCount6">{CounNum1}</div>
                      <div className="progressbar"><div className="proggress2"></div></div>
                      </div>
                    </div>
                    <div className="progress-line">
                      <h6>{counName2}</h6>
                      <div id="progress2" >
                      <div className="percentCount percentCount6">{CounNum2}</div>
                      <div className="progressbar"><div className="proggress2"></div></div>
                      </div>
                    </div>
                  </div>

                  <div className="space30"></div>
                  <div className="button" data-aos="fade-up-left" data-aos-duration="800">
                  <Link className="theme-btn1" to="/about">Get A Quote <span><i className="bi bi-arrow-right"></i></span></Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default About6;