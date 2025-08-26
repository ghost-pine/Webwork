import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";


const HeroBanner3 = ({bgImg,title,conetnt,mainImage,shape1,shape2,footerTitle,footerContent}) => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="hero3" data-background={bgImg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 m-auto text-center">
                <div className="main-heading _relative">
                    <h1 className="title tg-element-title">{parse(title)}<span><img src="/assets/img/icons/main-heading-span3.png" alt="" /></span> </h1>
                    <div className="space16"></div>
                    <p>{parse(conetnt)}</p>

                    <img className="arrow-shape" src="/assets/img/shapes/hero3-arrow-shape.png" alt="" />
                    <div className="space50"></div>
                    <div className="hero3-main-images _relative"> 
                        <div className="main-image">
                            <img src={mainImage} alt="" />
                        </div>
                            <div className="circle-shape">
                                <img className="shape1 shape-animaiton4" src={shape1} alt="" />
                                <a href="#"><img className="shape2" src="/assets/img/shapes/hero2-shape2.png" alt="" /></a>
                            </div>
                            <div className="image-shape shape-animaiton3">
                                <img src={shape2} alt="" />
                            </div>
                            <div className="support-box">
                                <div className="icon">
                                    <Link to="/service/service-details"><i className="bi bi-arrow-right"></i></Link>
                                </div>
                                <div className="heading3-w">
                                    <h4><Link to="/service/service-details">{footerTitle}t</Link></h4>
                                    <p>{parse(footerContent)}</p>
                                </div>
                            </div>

                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
};

export default HeroBanner3;