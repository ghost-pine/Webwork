import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import data from '../../Data/home5/counter.json';

const About5 = ({image1,experienceNum,experienceTitle,subTitle,title,content,featurelist,btnname,btnurl}) => {
    return (
        <div className="about7 sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="images-all" data-aos="zoom-out" data-aos-duration="800">
                            <div className="image1">
                                <img src={image1} alt="" />
                            </div>
                            <div className="image2">
                                <h4>{experienceNum}</h4>
                                <p>{experienceTitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="heading7">
                            <span className="span" data-aos="zoom-in-left" data-aos-duration="700">{subTitle}</span>
                            <h2 className="tg-element-title">{parse(title)}</h2>
                            <div className="space16"></div>
                            <p data-aos="fade-left" data-aos-duration="800">{content}</p>

                            <div className="space10"></div>
                            <div className="about-list" data-aos="fade-left" data-aos-duration="1000">
                                <ul>
                                {featurelist?.map((item, index) => (
                                  <li key={index}><span className="check"><i className="bi bi-check-lg"></i></span> {item}</li>
                                ))}
                                </ul>
                              </div>
                              <div className="space30"></div>
                              <div className="button" data-aos="fade-left" data-aos-duration="1200">
                                <Link className="theme-btn13" to={btnurl}><span className="text">{btnname}</span> <span className="arrows"><span className="arrow1"><i className="bi bi-arrow-right"></i></span><span className="arrow2"><i className="bi bi-arrow-right"></i></span></span></Link>
                              </div>

                        </div>
                    </div>
                </div>

                <div className="space30"></div>
                <div className="row">

                {data.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6">
                        <div className="about-counter">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default About5;