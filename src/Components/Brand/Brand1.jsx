import Slider from "react-slick";
import data from '../../Data/home5/brand.json';

const Brand1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
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

    return (
        <div className="brands6">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="brands-area-all">
                  <p> More Than 5K+ Brands With Work Techzen </p>
                  <div className="brands6-slider owl-carousel">
                  <Slider {...settings}>
                  {data.map((item, i) => (
                    <div key={i} className="single-slider brand-image-area">
                      <img src={item.img} alt="" />
                    </div>
                    ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Brand1;