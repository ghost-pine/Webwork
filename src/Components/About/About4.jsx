import { Link } from "react-router-dom";

const About4 = ({image1,image2,image3,shape1,subTitle,Title,content,expNum,expCon,featurelist,btnName,btnUrl}) => {
    return (
        <div className="about4 sp">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="images">
                            <div className="img1 shape-animaiton4">
                                <img src={"/assets/img/bg/about3-bg.png"} alt="" />
                            </div>
                            <div className="img2" data-aos="zoom-out" data-aos-duration="800">
                                <img src={image1} alt="" />
                            </div>
                            <div className="img3" data-aos="zoom-out" data-aos-duration="1000">
                                <img src={image2} alt="" />
                            </div>
                            <div className="img4" data-aos="zoom-out" data-aos-duration="1200">
                                <img src={image3} alt="" />
                            </div>
                            <div className="img5" data-aos="flip-left" data-aos-duration="800">
                                <img src={shape1} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="heading4">
                            <span className="span" data-aos="zoom-in-left" data-aos-duration="700">{subTitle}</span>
                            <h2 className="title tg-element-title">{Title}</h2>
                            <div className="space16"></div>
                            <p data-aos="fade-left" data-aos-duration="700">{content} </p>

                            <div className="space30"></div>
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <div className="counter-box" data-aos="fade-left" data-aos-duration="900">
                                        <h3>{expNum}</h3>
                                        <p>{expCon}</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list" data-aos="fade-left" data-aos-duration="800">
                                    {featurelist?.map((item, index) => (
                                        <li key={index}><span><i className="bi bi-check-lg"></i></span> {item}</li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="space30"></div>
                            <div className="" data-aos="fade-left" data-aos-duration="1100">
                                <Link className="theme-btn5" to={btnUrl}>{btnName} <span><i className="bi bi-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About4;