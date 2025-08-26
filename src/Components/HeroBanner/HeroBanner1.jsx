import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const HeroBanner1 = ({bgImg,subTitle,title,content,btnName,btnUrl,image1,image2,shapeImage1,shapeiamge2}) => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
  setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
  setToggle(!toggle);
  };
  const handelClose = () => {
  setIframeSrc('about:blank');
  setToggle(!toggle);
  };
  
    return (
      <div className="hero_main_area1">
        <div className="hero1" data-background={bgImg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="main-headding">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700"><img src="/assets/img/icons/span1.png" alt="" /> {subTitle}</span>
                  <h1 className="title tg-element-title">{parse(title)}</h1>
                  <div className="space16"></div>
                  <p>{content}</p>

                  <div className="space30"></div>
                  <div className="buttons">
                    <Link className="theme-btn1" to={btnUrl}>{btnName} <span><i className="bi bi-arrow-right"></i>
                    </span></Link>
                    <span onClick={handelClick} className="play-btn"><span><i className="bi bi-play"></i>
                    </span> Watch Demo Video</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="hero1-all-images">
                  <div className="image1 ">
                    <img src={image1} alt="" />
                  </div>
                  <div className="image2">
                    <img src={image2} alt="" />
                  </div>
                  <div className="image3 shape-animaiton3">
                    <img src={shapeImage1} alt="" />
                  </div>
                  <div className="image4 shape-animaiton3">
                    <img src={shapeiamge2} alt="" />
                  </div>
                  <div className="shape1">
                    <img src="/assets/img/shapes/header1-shape1.png" alt="" /> 
                  </div>
                  <div className="shape2">
                    <img src="/assets/img/shapes/header1-shape2.png" alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <VideoModal
          isTrue={toggle}
          iframeSrc={iframeSrc}
          handelClose={handelClose}        
      ></VideoModal>
      </div>
    );
};

export default HeroBanner1;