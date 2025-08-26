import data from '../../Data/home5/team5.json';
import SectionTitle3 from '../Common/SectionTitle3';

const Team3 = () => {
    return (
        <div className="team7 sp bg5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="heading7">
                <SectionTitle3
                    SubTitle="Our Team"
                    Title="The Team Behind the <span>Solutions</span>"
                    content=""
                ></SectionTitle3>

                </div>
              </div>
            </div>
            <div className="space30"></div>
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="700">
                <div className="team-box">
                  <div className="image image-anime">
                    <img src={item.img} alt="" />
                    <div className="hover-area">
                      <ul>
                      <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="heading-area">
                    <h4><a href="#">{item.title}</a></h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            </div>
          </div>
        </div>

    );
};

export default Team3;