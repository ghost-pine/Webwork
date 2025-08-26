import Slider from "react-slick";
import data from '../../Data/home4/testimonial4.json';
import { useEffect, useRef } from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Testimonial3 = () => {

    const sliderRef = useRef(null);

    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };  

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

      useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="testimonial4 testimonial-2 position-relative bg6 section-padding"  data-background="/assets/img/bg/testimonial4-bg.png">
        <div className="container">
          <div className="row">
            <div className="col-md-7 m-auto text-center">
              <div className="heading4-w">
                    <SectionTitle2
                        SubTitle="Testimonials 👋"
                        Title="See What Our Customer Saying"
                    ></SectionTitle2> 
              </div>
            </div>
          </div>
    
          <div className="space60"></div>
    
          <div className="row">
            <div className="col-lg-8 m-auto" data-aos="fade-up" data-aos-duration="1000">
              <div className="testimonial-sliders">
                <div className="slider-testimonial">
    
                <Slider ref={sliderRef} {...settings}>
                {data.map((item, i) => (
                  <div  key={i} className="single-testimonial">
                    <div className="single-testimonial-nav">
                        <img src={item.icon} alt="" />
                    </div>
                    <h5>{item.desc}</h5>
                    <div className="author">
                      <a href="#">{item.title}</a>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                  ))}
                  </Slider>
                
                </div>
                <div className="testimonial-arrows">
                  <div onClick={previous} className="testimonial-prev-arrow">
                    <button><i className="bi bi-arrow-left"></i></button>
                  </div>
                  <div onClick={next} className="testimonial-next-arrow">
                    <button><i className="bi bi-arrow-right"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial3;