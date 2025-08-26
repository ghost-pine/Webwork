import Slider from 'react-slick';
import data from '../../Data/home2/testimonial2.json';
import SectionTitle from '../Common/SectionTitle';

const Testimonial2 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    return (
        <div className="testimonial2 pt100 pb40">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 m-auto text-center">
                        <div className="heading2">
                        <SectionTitle
                        SubTitle="Testimonials"
                        Title="See What Our Customer Says"
                    ></SectionTitle>
                        </div>
                    </div>
                    </div>

                    <div className="space60"></div>
                    <div className="row">
                    <div className="tes2-slider cs_slider_gap_10" data-aos="fade-up" data-aos-duration="700">
                        <Slider {...settings}>
                    {data.map((item, i) => (
                        <div key={i} className="single-slider">
                        <div className="icon">
                            <img src="/assets/img/icons/tes2-icon.png" alt="" />
                        </div>
                        <p className="pera">{item.desc}</p>

                        <div className="bottom-area">
                            <div className="author">
                            <a href="#">{item.title}</a>
                            </div>
                            <div className="reating">
                            <ul>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star-half"></i></li>
                            </ul>
                            <p>{item.rating}</p>
                            </div>
                        </div>
                        </div>
                        ))}
                        </Slider>


                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Testimonial2;