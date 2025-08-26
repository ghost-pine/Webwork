import { Link } from 'react-router-dom';
import data from '../../Data/home4/work4.json';
import SectionTitle2 from '../Common/SectionTitle2';

const HowWork3 = () => {
    return (
        <div className="work4 sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <div className="heading4">
                            <SectionTitle2
                                SubTitle="How It Works 👋"
                                Title="Unlocking Success: The Step-by-Step Guide to Our IT Solution Process"
                            ></SectionTitle2>                          
                        </div>
                    </div>
                </div>

                <div className="space30"></div>
                <div className="row">

                {data.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1200">
                        <div className={item.addClass}>
                            <span className="after">{item.subtitle}</span>
                            <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                            <div className="space16"></div>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default HowWork3;