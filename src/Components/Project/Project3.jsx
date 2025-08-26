import { Link } from "react-router-dom";
import data from '../../Data/home4/project4.json';
import SectionTitle2 from "../Common/SectionTitle2";
import parse from 'html-react-parser';

const Project3 = () => {
    return (
        <div className="project4 sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <div className="heading4">
                        <SectionTitle2
                                SubTitle="Our Project 👋"
                                Title="Transformative IT Solution Projects Driving Innovation And Growth"
                            ></SectionTitle2> 
                        </div>
                    </div>
                </div>
                <div className="space30"></div>
                <div className="row">
                {data.map((item, i) => (
                    <div key={i} className={item.addClass}>
                        <div className={item.addClassActive} data-aos="fade-up" data-aos-duration="700">
                            <div className="image">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="heading4-w">
                                <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                                <div className="space10"></div>
                                <p>{parse(item.desc)}</p>
                            </div>
                        </div>
                    </div>
))}

                </div>
            </div>
        </div>
    );
};

export default Project3;