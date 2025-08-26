import { Link } from 'react-router-dom';
import data from '../../Data/projectPage.json';

const Project4 = () => {
    return (
        <div className="project-boxs-area sp">
            <div className="container">
                <div className="row">
                {data.map((item, index)=>(
                    <div  key={index} className="col-lg-4 col-md-6">
                        <div className="project-page-box">
                            <div className="image">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="heading2">
                                <h4><Link to="/project/project-details">{item.title}</Link></h4>
                                <Link to="/project/project-details" className="learn">Learn More <span><i className="bi bi-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Project4;