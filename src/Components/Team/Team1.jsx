import data from '../../Data/home2/team1.json';
import SectionTitle from '../Common/SectionTitle';

const Team1 = () => {
    return (
        <div className="team2 pt100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="heading2">
                <SectionTitle
                        SubTitle="Our Team"
                        Title="Meet With Our Expert Team"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="team-box" data-aos="fade-up" data-aos-duration="700">
                  <div className="image-area">
                    <div className="image image-anime">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="icon-area">
                      <ul>
                        <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="space30"></div>
                    <div className="heading2">
                      <h4><a href="#">{item.title}</a></h4>
                      <div className="space10"></div>
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

export default Team1;