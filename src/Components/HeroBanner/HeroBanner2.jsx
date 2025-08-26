import { Link } from "react-router-dom";

const HeroBanner2 = ({subTitle,title,featureList,image1,image2,image3}) => {
    return (
        <div className="hero2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="main-heading">
                    <span className="span" data-aos="zoom-in-right" data-aos-duration="700"><img src="/assets/img/icons/span2.png" alt="" /> {subTitle}</span>
                    <h1 className="title tg-element-title">{title}</h1>
                </div>

                <div className="row _relative">
                    <div className="col-lg-9">
                        <div className="hero2-tags">
                            <ul>
                            {featureList?.map((item, index) => (
                                <li key={index}><Link to="#">{item}</Link></li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="circle-shapes">
                            <div className="shape1 shape-animaiton4">
                                <img src={image1} alt="" />
                            </div>
                            <div className="shape2">
                                <Link to="/service"><img src="/assets/img/shapes/hero2-shape2.png" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero2-main-imges">
                    <div className="image1">
                        <img src={image2} alt="" />
                    </div>
                </div>
              </div>

            </div>
          </div>

          <div className="hero2-main-imge2">
            <img src={image3} alt="" />
          </div>
        </div>

    );
};

export default HeroBanner2;