import { useState } from 'react';
import data from '../../Data/home3/project3.json';
import { Link } from 'react-router-dom';

const Project2 = () => {

  const categoryMenu = [
    {
      title: 'Software',
      category: 'Software',
    },
    {
      title: 'Development',
      category: 'Development',
    },
    {
      title: 'IT',
      category: 'IT',
    },
    {
      title: 'Solution',
      category: 'Solution',
    },
    {
      title: 'Cybersecurity',
      category: 'Cybersecurity',
    },    
  ];

  const [active, setActive] = useState('Software');
   
    return (
        <div className="project3 sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <div className="heading3">
                <span className="span" data-aos="zoom-in-left" data-aos-duration="700"> Our Latest Project</span>
                <h2 className="title tg-element-title">Celebrating Our Achievements</h2>
              </div>
            </div>
          </div>

          <div className="space30"></div>
          <div className="row">
            <div className="col-lg-7 m-auto text-center">
              <ul className="nav nav-pills mb-3 text-center" id="pills-tab" role="tablist" data-aos="fade-up" data-aos-duration="700">

                {categoryMenu.map((item, index) => (
                <li onClick={() => setActive(item.category)} className={`nav-item ${active === item.category ? 'active' : ''}`} key={index} id="nav-item" role="presentation">
                  <button className="nav-link" id="project2-tab" data-bs-toggle="pill" data-bs-target="#project2" type="button" role="tab" aria-controls="project2" aria-selected="false"> {item.title}</button>
                </li>
                ))}

              </ul>

            </div>
          </div>

          <div className="space30"></div>

          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="pills-tabContent" data-aos="fade-up" data-aos-duration="900">
                <div className="tab-pane fade show active" id="project1" role="tabpanel" aria-labelledby="project1-tab">
                  <div className="project-all-images">
                    <div className="row">
                    {data.map((item, index)=>(
                      <div className={`col-lg-4 ${ active === 'all' ? '' : !(active === item.category) ? 'd-none' : '' }`}
                      key={index} >
                        <div className="main-image-area">
                          <div className="image">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="heading-area">
                            <div className="heading">
                              <p>{item.title}</p>
                              <h4><Link to="/project/project-details">{item.desc}</Link></h4>
                            </div>

                            <div className="arrow">
                              <Link to="/project/project-details"><i className="bi bi-arrow-right"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
 ))}
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

export default Project2;