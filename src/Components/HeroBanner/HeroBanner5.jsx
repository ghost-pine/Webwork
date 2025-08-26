import { Link } from "react-router-dom";

const HeroBanner5 = ({subtitle,title,content,btnone,btnoneurl,btntwo,btntwourl,image1,shape2,shape3,shape4,shape5}) => {
    return (
        <div className="hero7">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="main-heading">
                            <span className="span" data-aos="zoom-in-left" data-aos-duration="700">{subtitle}</span>
                            <h1>{title}</h1>
                            <div className="space16"></div>
                            <p>{content}</p>
                            <div className="space30"></div>
                            <div className="buttons">
                                <Link className="theme-btn13" to={btnoneurl}><span className="text">{btnone}</span> <span className="arrows"><span className="arrow1"><i className="bi bi-arrow-right"></i></span><span className="arrow2"><i className="bi bi-arrow-right"></i></span></span></Link>
                                <Link className="theme-btn12" to={btntwourl}><span className="text">{btntwo}</span> <span className="arrows"><span className="arrow1"><i className="bi bi-arrow-right"></i></span><span className="arrow2"><i className="bi bi-arrow-right"></i></span></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="images-all">
                            <div className="image1">
                                <img src={image1} alt="" />
                            </div>
                            <div className="shape1 round-circle2">
                                <img src={shape2} alt="" />
                            </div>
                            <div className="shape2 shape-animaiton3">
                                <img src={shape3} alt="" />
                            </div>
                            <div className="shape3 animate3">
                                <img src={shape4} alt="" />
                            </div>
                            <div className="shape4 animate1">
                                <img src={shape5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner5;